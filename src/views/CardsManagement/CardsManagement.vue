<template>
	<div class="grow md:mt-14 md:px-5 xl:px-60px">
		<cards-management-header></cards-management-header>
		<tabs-container></tabs-container>
	</div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { useCardsStore } from '@/stores/cards.store';
import { onMounted } from 'vue';
import { mapCards } from '@/helpers/mapCards/mapCards';
import { CardsResponse } from '@/@types/response';
import { CardType } from '@/@types/card';
import CardsManagementHeader from './components/CardsManagementHeader/CardsManagementHeader.vue';
import TabsContainer from './components/Tabs/TabsContainer/TabsContainer.vue';

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
