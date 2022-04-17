<template>
	<button
		class="md:bg-blue-dark md:py-2 md:px-3 md:text-white text-blue-c md:rounded flex items-center"
		@click="onOpenAddDialog"
	>
		<span class="inline-block mr-2">
			<add-icon class="fill-blue md:fill-white"></add-icon>
		</span>
		<span class="font-bold text-sm">New card</span>
	</button>
	<q-dialog v-model="isOpenAddDialog" persistent class="add-dialog">
		<q-card>
			<q-card-section class="max-w-xl">
				<q-form @submit="onSubmit">
					<q-input
						v-model="name"
						filled
						label="New card name *"
						hint="Name and surname"
						lazy-rules
						:rules="[
							(val) =>
								(val && val.length > 0) ||
								'Please type something',
						]"
						:no-error-icon="true"
					></q-input>

					<q-card-actions align="right">
						<q-btn
							v-close-popup
							label="Cancel"
							color="primary"
						></q-btn>
						<q-btn
							label="Add"
							color="primary"
							type="submit"
						></q-btn>
					</q-card-actions>
				</q-form>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>
<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards.store';
import { ref } from 'vue';
import { CardType } from '@/@types/card';
import AddIcon from '@/common/icons/AddIcon.vue';
import { randomId } from '@/helpers'

const $cardsStore = useCardsStore();
const isOpenAddDialog = ref(false);
const name = ref(null);

const onOpenAddDialog = () => {
	isOpenAddDialog.value = true;
};

const randomDate = (min: number, max: number) => {
	return Math.floor((Math.random())*(max-min+1))+min;;
};

const onSubmit = () => {
	if (name.value) {
		const newCard: CardType = {
			id: uuidv4(),
			name: name.value,
			card_number: randomId(16),
			cvv_number: randomId(3),
			expiration_date: `${randomDate(1, 12)}/${randomDate(24, 30)}`,
			freeze: false,
		}
		$cardsStore.addNewCard(newCard);
		isOpenAddDialog.value = false;
	}
};
</script>
<style lang="scss">
.add-dialog {
	.q-card {
		@apply m-auto;
		@apply mt-32;
	}
	.q-dialog__inner {
		@apply block;
	}
}
</style>
