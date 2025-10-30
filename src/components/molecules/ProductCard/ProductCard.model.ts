export interface ProductCardProps {
    id?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    quantity?: number;
    category?: string;
    isAdmin?: boolean;
    onDelete?: () => void;
    width?: string;
    bgColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    fontSize?: string;
    color?: string;
}
