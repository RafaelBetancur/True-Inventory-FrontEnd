export interface SelectProps {
  label?: string;
  options: string[];
  width?: string;
  onChange?: (value: string) => void;
}