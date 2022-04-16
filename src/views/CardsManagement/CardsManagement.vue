<template>
	<div>
		<h1>Cards Management</h1>
	</div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { useCardsStore } from '@/stores/cards.store';
import { onMounted } from 'vue';
import { mapCards } from '@/helpers/mapCards/mapCards';
import { CardsResponse } from '@/@types/response';
import { CardType } from '@/@types/card';

const $cardsStore = useCardsStore();
const cardsUrl = import.meta.env.VITE_CARDS_URL;

const { setCards } = $cardsStore;

const mappedCards = (cards: CardType[]) => {
	let cardsMapped: CardType[];
	if (cards.length > 3) {
		cardsMapped = cards.slice(0, 3);
	} else {
		cardsMapped = cards;
	}

	return mapCards(cardsMapped);
};

onMounted(async () => {
	const { data } = await useFetch<CardsResponse>(cardsUrl).get().json();
	const { cards } = data.value;
	
	setCards(mappedCards(cards));
});
</script>
