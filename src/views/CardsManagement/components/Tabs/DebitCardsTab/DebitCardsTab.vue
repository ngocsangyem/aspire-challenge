<template>
	<div class="tab-content">
		<div class="md:grid md:grid-cols-2 md:gap-x-11">
			<div class="tab-content-left">
				<template v-if="getCards.length > 0">
					<div class="md-max:px-6 md-max:mb-6">
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
							<template #navigation-icon="{ active, btnProps, onClick }">
								<button
									type="button"
									class="dot-control"
									:class="{
										'is-active': active,
									}"
									@click="onClick"
								></button>
							</template>
							<q-carousel-slide
								v-for="(card, index) in cards"
								:key="card.id"
								:name="index"
							>
								<debit-card :card="card"></debit-card>
							</q-carousel-slide>
						</q-carousel>
					</div>
				</template>
				<template v-else>
					<p>No card in your account</p>
				</template>
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
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import CardActions from '@/components/Card/CardActions/CardActions.vue';
import ExpansionItems from '../../../components/ExpansionItems/ExpansionItems.vue';
import DebitCard from '@/components/Card/DebitCard/DebitCard.vue';
import { CardType } from '@/@types/card';

const $cardsStore = useCardsStore();
const { getCards } = storeToRefs($cardsStore);
const slide = ref(0);
const cards = ref<CardType[]>([]);

const onUpdateCarousel = (newVal: string | number) => {
	const card = cards.value.find((c, index) => index === newVal);
	$cardsStore.setCurrentCard(card as CardType);
};

watch(
	getCards,
	(newValue) => {
		if (newValue.length > 0) {
			slide.value = 0;
			cards.value = [...newValue];
			$cardsStore.setCurrentCard(newValue[0]);
		} else {
			$cardsStore.setCurrentCard({} as CardType);
		}
	},
	{
		deep: true,
	}
);
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
