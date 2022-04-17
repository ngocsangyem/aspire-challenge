<template>
	<button type="button" class="flex flex-col justify-center items-center" @click="onOpenCancelDialog">
		<span>
			<deactivate-card-icon></deactivate-card-icon>
		</span>
		<span class="text-sm text-secondary-c inline-block mt-1.5">
			Cancel <br />
			card
		</span>
	</button>
	<q-dialog v-model="canceled" persistent>
		<q-card>
			<q-card-section class="row items-center">
				<span class="q-ml-sm">Remove this card?</span>
			</q-card-section>

			<q-card-actions align="right">
				<q-btn
					flat
					label="Cancel"
					color="primary"
					v-close-popup
				></q-btn>
				<q-btn
					flat
					label="Remove"
					color="primary"
					@click="onRemoveCard"
				></q-btn>
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import DeactivateCardIcon from '@/common/icons/DeactivateCardIcon.vue';

const canceled = ref(false);
const $cardsStore = useCardsStore();
const { getCurrentCard } = storeToRefs($cardsStore);

const onOpenCancelDialog = () => {
	canceled.value = true;
};
const onRemoveCard = () => {
	console.log('remove card', getCurrentCard);
	
	$cardsStore.removeCard(getCurrentCard.value.id);
	canceled.value = false;
};
</script>
