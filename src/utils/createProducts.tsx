import { v4 as uuid } from "uuid";

export default function createProduct(product: {title: string, price: number, new:string, sale: string}) {
    return {
        ...product,
        id: uuid()
    }
}