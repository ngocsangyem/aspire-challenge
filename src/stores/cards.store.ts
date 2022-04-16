import { CardsRootState } from '@/@types/state';
import { defineStore } from 'pinia';
import { CardType } from '@/@types/card';

export const useCardsStore = defineStore('cards', {
	state: (): CardsRootState => ({
		cards: [],
		currentCard: {} as CardType,
	}),
	getters: {
		getCards: (state: CardsRootState) => state.cards,
		getCurrentCard: (state: CardsRootState) => state.currentCard,
	},
	actions: {
		setCards(payload: CardType[]) {
			this.cards = payload;
		},
		setCurrentCard(payload: CardType) {
			this.currentCard = payload;
		},
		removeCard(payload: string) {
			this.cards = this.cards.filter((card) => card.id !== payload);
		},
		toggleFreezeCard(payload: CardType) {
			const { card, id } = this.findCard(payload);
			if (card) {
				this.cards[id].freeze = !this.cards[id].freeze;
			}
		},
		findCard(payload: CardType) {
			const card = this.cards.find(
				(card: CardType) => card.id === payload.id
			);
			const id = this.cards.findIndex(
				(user: CardType) => user.id === payload.id
			);

			return {
				card,
				id,
			};
		},
		addNewCard(payload: CardType) {
			this.cards.push(payload);
		}
	},
});
