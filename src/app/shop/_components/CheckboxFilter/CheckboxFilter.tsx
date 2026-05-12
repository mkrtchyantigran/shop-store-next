'use client';

import { ReactNode } from 'react';
import './checkboxFilter.scss';

type FilterItem = {
    id: number;
    name: string;
    count: number;
};

type Props<T extends FilterItem> = {
    title: string;
    items: T[];
    selected: string[];
    onToggle: (name: string) => void;
    renderBefore?: (item: T) => ReactNode;
};


export default function CheckboxFilter<T extends FilterItem>({
    title,
    items,
    selected,
    onToggle,
    renderBefore,
}: Props<T>) {
    return (
        <div className="checkbox-filter">
            <h4>{title}</h4>
            <ul className="filter-list">
                {items.map((item) => (
                    <li key={item.id} className="filter-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={selected.includes(item.name)}
                                onChange={() => onToggle(item.name)}
                            />
                            {renderBefore?.(item)}
                            <span className="name">{item.name}</span>
                            <span className="count">{item.count}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}