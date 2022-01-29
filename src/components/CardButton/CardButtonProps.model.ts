export interface CardButtonProps {
	title: string;
	details: string;
	negative?: boolean;
	click: () => void;
}