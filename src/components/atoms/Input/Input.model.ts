export interface InputProps {
  type?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}