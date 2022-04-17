<template>
	<div
		class="card-actions bg-blue-light rounded-2xl flex items-center justify-around py-5 px-7 gap-4"
	>
		<button type="button" class="flex flex-col justify-center items-center" @click="onFreezeCard">
			<span>
				<freeze-icon></freeze-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				{{getCurrentCard.freeze ? 'Unfreezing' : 'Freeze'}} <br /> card
			</span>
		</button>
		<button type="button" class="flex flex-col justify-center items-center">
			<span>
				<limit-icon></limit-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				Set spend <br /> limit
			</span>
		</button>
		<button type="button" class="flex flex-col justify-center items-center">
			<span>
				<gpay-icon></gpay-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				Add to <br /> GPay
			</span>
		</button>
		<button type="button" class="flex flex-col justify-center items-center">
			<span>
				<replace-card-icon></replace-card-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				Replace <br /> card
			</span>
		</button>
		<cancel-card-dialog></cancel-card-dialog>
	</div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import FreezeIcon from '@/common/icons/FreezeIcon.vue';
import LimitIcon from '@/common/icons/LimitIcon.vue';
import GpayIcon from '@/common/icons/GPayIcon.vue';
import ReplaceCardIcon from '@/common/icons/ReplaceCardIcon.vue';
import CancelCardDialog from '../CancelCardDialog/CancelCardDialog.vue';

const $cardsStore = useCardsStore();
const { getCurrentCard } = storeToRefs($cardsStore);

const onFreezeCard = () => {
	$cardsStore.toggleFreezeCard(getCurrentCard.value);
};

</script>
<style lang="scss"></style>
