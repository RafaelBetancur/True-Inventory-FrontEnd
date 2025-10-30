export interface FilterProps {
  width?: string;
  height?: string;
  bgColor?: string;
  borderShadow?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  onPriceChange?: (min: number | null, max: number | null) => void; // ✅ nuevo
}
