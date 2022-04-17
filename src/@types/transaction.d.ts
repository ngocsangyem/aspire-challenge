
export enum TransactionTypes {
	FILE_STORAGE= 'FILE_STORAGE',
	FLIGHT= 'FLIGHT',
	MEGA_PHONE= 'MEGA_PHONE',
}
export type TransactionItemType = {
	type: 'file-storage' | 'flight' | 'mega-phone';
	title: string;
	date: string;
	expense: string;
	isIncome: boolean;
}