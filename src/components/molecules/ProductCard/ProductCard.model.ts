export interface ProductCardProps {
    width?: string;
    bgColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    fontSize?: string;
    color?: string;
    isAdmin?: boolean;
    onDelete?: () => void;
    onClick?: () => void;
    /* Data de dummies */
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
}