import { CardType } from '@/@types/card';

export const mapCards = (cards: Exclude<CardType, 'freeze'>[]) => {
	return cards.map(card => ({
		...card,
		freeze: false,
	}))
}