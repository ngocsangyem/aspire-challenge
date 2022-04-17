<template>
	<div class="tab-content">
		<div class="md:grid md:grid-cols-2 md:gap-x-11">
			<div class="tab-content-left">
				<div v-if="cards.length > 0" class="md-max:px-6 md-max:mb-6">
					<q-carousel
						v-model="slide"
						animated
						navigation
						infinite
						:swipeable="true"
						:autoplay="false"
						:arrows="false"
						transition-prev="fade"
						transition-next="fade"
						@update:model-value="onUpdateCarousel"
					>
						<template
							#navigation-icon="{ active, _, onClick }"
						>
							<button
								type="button" class="dot-control" :class="{
								'is-active': active
							}" @click="onClick"></button>
						</template>
						<q-carousel-slide
							v-for="card in cards"
							:key="card.id"
							:name="card.name"
						>
							<debit-card :card="card"></debit-card>
						</q-carousel-slide>
					</q-carousel>
				</div>
				<card-actions class="mt-8 md-max:hidden"></card-actions>
			</div>
			<div class="tab-content-right">
				<card-actions class="md:hidden rounded-b-none"></card-actions>
				<expansion-items class="md-max:p-6"></expansion-items>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, onUpdated } from 'vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import CardActions from '@/components/Card/CardActions/CardActions.vue';
import ExpansionItems from '../../../components/ExpansionItems/ExpansionItems.vue';
import DebitCard from '@/components/Card/DebitCard/DebitCard.vue';
import { CardType } from '@/@types/card';

const $cardsStore = useCardsStore();
const { getCards } = storeToRefs($cardsStore);
const slide = ref('Dennis Ilan');
const cards = ref<CardType[]>([]);

const onUpdateCarousel = (newVal: string | number) => {
	const card = cards.value.find(c => c.name === newVal);
	$cardsStore.setCurrentCard(card as CardType);
}

onUpdated(() => {
	$cardsStore.setCurrentCard(cards.value[0]);
});

watch(getCards, (newValue) => {
	cards.value = [...newValue];
});
</script>

<style lang="scss">
.tab-content-left {
	.q-carousel {
		@apply bg-transparent;
		@apply h-auto;
		&__slide {
			@apply p-0;
		}
		&__control {
			@apply relative;
			@apply bottom-auto;
			@apply left-auto;
			@apply right-auto;
			@apply mt-4;
		}
	}

	.dot-control {
		@apply inline-block;
		@apply m-0;
		@apply p-0;
		@apply bg-primary-c;
		@apply w-2;
		@apply h-2;
		@apply rounded-full;
		@apply cursor-pointer;
		transition: width 0.3s ease-in-out;
		&:not(.is-active) {
			@apply opacity-20;
		}
		&:not(:last-child) {
			@apply mr-2;
		}

		&.is-active {
			@apply w-4;
		}
	}
}
</style>
