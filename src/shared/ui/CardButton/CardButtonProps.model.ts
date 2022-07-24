export interface CardButtonProps {
	title: string;
	details?: number;
	negative?: boolean;
	click: () => void;
}