class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discount?: number;
}

class Promotion {
    id: number;
    description: string;
    startedAt: string;
    endedAt: string;
    discount: number;
    products?: Product[];
}

class CartItem {
    product: Product;
    quantity: number;
}

export {
    Product,
    Promotion,
    CartItem
};
