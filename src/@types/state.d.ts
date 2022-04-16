import { CardType } from '@/@types/card';

export interface CardsRootState {
	cards: CardType[];
	currentCard: CardType;
}
