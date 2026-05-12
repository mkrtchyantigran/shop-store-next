'use client';
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filtersSidebar.scss';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import FilterByBrand from '../FilterByBrand/FilterByBrand';

const MIN_PRICE = 0;
const MAX_PRICE = 9999;

const categories = [
    { id: 1, name: "Chairs", count: 10 },
    { id: 2, name: "Beds", count: 10 },
    { id: 3, name: "Cabinets", count: 10 },
    { id: 4, name: "Sofas", count: 10 },
    { id: 5, name: "Decor", count: 10 },
    { id: 6, name: "Sale", count: 10 },
];

const colors = [
    { id: 1, name: "White", hex: "#FFFFFF", count: 10 },
    { id: 2, name: "Black", hex: "#000000", count: 10 },
    { id: 3, name: "Grey", hex: "#C4C4C4", count: 10 },
    { id: 4, name: "Brown", hex: "#947458", count: 10 },
    { id: 5, name: "Blue", hex: "#3B82F6", count: 10 },
    { id: 6, name: "Green", hex: "#22C55E", count: 10 },
];

const materials = [
    { id: 1, name: "Leather", count: 10 },
    { id: 2, name: "Marble", count: 10 },
    { id: 3, name: "Metal", count: 10 },
    { id: 4, name: "Wood", count: 10 },
    { id: 5, name: "Leatherette", count: 10 },
];


export default function FiltersSidebar() {
    const [priceRange, setPriceRange] = useState<[number, number]>([99, 9999]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

    const toggleCategory = (name: string) => {
        setSelectedCategories((prev) =>
            prev.includes(name)
                ? prev.filter((c) => c !== name)
                : [...prev, name]
        )
    }

    const toggleColor = (name: string) => {
        setSelectedColors((prev) =>
            prev.includes(name)
                ? prev.filter((c) => c !== name)
                : [...prev, name]
        );
    };

    const toggleMaterial = (name: string) => {
        setSelectedMaterials((prev) =>
            prev.includes(name)
                ? prev.filter((c) => c !== name)
                : [...prev, name]   
        );
    };

    return (
        <aside className="filters-sidebar">
            <div className="filter-by-price">
                <h4>Filter by Price</h4>
                <Slider
                    range
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value as [number, number])}
                />
                <p className="price-display">
                    Price: ${priceRange[0]} -   ${priceRange[1]}
                </p>
            </div>

            <CheckboxFilter
                title="Filter by Categories"
                items={categories}
                selected={selectedCategories}
                onToggle={toggleCategory}
            />

            <CheckboxFilter
                title="Filter by Color"
                items={colors}
                selected={selectedColors}
                onToggle={toggleColor}
                renderBefore={(color) => (
                    <span className="color-dot" style={{ backgroundColor: color.hex }} />
                )}
            />

            <CheckboxFilter
                title="Filter by Material"
                items={materials}
                selected={selectedMaterials}
                onToggle={toggleMaterial}
            />

            <FilterByBrand />

        </aside>
    );
}
