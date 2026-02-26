export interface DropdownProps {
    options: string[];
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}