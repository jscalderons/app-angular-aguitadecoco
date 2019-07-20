class Product {
    id: number;
    title: string;
    description: string;
    price: number;
}

class Promotion {
    id?: number;
    description: string;
    startedAt: string;
    endedAt: string;
    discount: number;
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
