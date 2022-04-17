<template>
	<div
		class="card-actions bg-blue-light rounded-2xl flex items-center justify-around py-5 px-7 gap-4"
	>
		<button type="button" class="flex flex-col justify-center items-center">
			<span>
				<freeze-icon></freeze-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				Freeze <br /> card
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
		<button type="button" class="flex flex-col justify-center items-center">
			<span>
				<deactivate-card-icon></deactivate-card-icon>
			</span>
			<span
				class="text-sm text-secondary-c inline-block mt-1.5"
			>
				Cancel <br /> card
			</span>
		</button>
	</div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import FreezeIcon from '@/common/icons/FreezeIcon.vue';
import LimitIcon from '@/common/icons/LimitIcon.vue';
import GpayIcon from '@/common/icons/GPayIcon.vue';
import ReplaceCardIcon from '@/common/icons/ReplaceCardIcon.vue';
import DeactivateCardIcon from '@/common/icons/DeactivateCardIcon.vue';

const $cardsStore = useCardsStore();
const { getCurrentCard } = storeToRefs($cardsStore);

</script>
<style lang="scss"></style>
