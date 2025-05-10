export interface Product {
    id: number;
    name: string;
    price: { main: number; fractional: number };
}

export interface ButtonProps {
    name: string;
    onClick: () => void
}

export interface ProductListProps {
    products: Product[];
}

export type CartItem = Product & { quantity: number }

export interface CartState {
    cart: CartItem[];
}