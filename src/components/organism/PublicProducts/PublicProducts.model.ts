export interface PublicProductsProps {
    isAdmin?: boolean;
    setIsAdmin?: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
}