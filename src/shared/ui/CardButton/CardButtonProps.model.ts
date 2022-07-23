export interface CardButtonProps {
	title: string;
	details: number | null;
	negative?: boolean;
	click: () => void;
}