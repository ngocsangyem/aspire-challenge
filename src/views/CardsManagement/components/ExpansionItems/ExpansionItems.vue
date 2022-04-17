<template>
	<div class="expansion-items bg-white">
		<q-expansion-item expand-icon-class="hidden">
			<template #header>
				<header
					class="flex items-center w-full p-6 rounded-lg bg-blue-lighter shadow-expansion border border-border-c border-solid"
				>
					<span class="inline-block mr-3">
						<card-detail-icon></card-detail-icon>
					</span>
					<span class="text-md text-secondary-c"> Card details </span>
					<span
						class="inline-block ml-auto toggle-icon md:transition"
					>
						<down-arrow-icon></down-arrow-icon>
					</span>
				</header>
			</template>
			<q-card>
				<q-card-section>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quidem, eius reprehenderit eos corrupti commodi magni
					quaerat ex numquam, dolorum officiis modi facere maiores
					architecto suscipit iste eveniet doloribus ullam aliquid.
				</q-card-section>
			</q-card>
		</q-expansion-item>
		<q-expansion-item
			expand-icon-class="hidden"
			:duration="200"
			:default-opened="true"
		>
			<template #header>
				<header
					class="flex items-center w-full p-6 rounded-lg bg-blue-lighter shadow-expansion border border-border-c border-solid"
				>
					<span class="inline-block mr-3">
						<transaction-icon></transaction-icon>
					</span>
					<span class="text-md text-secondary-c">
						Recent transactions
					</span>
					<span
						class="inline-block ml-auto toggle-icon md:transition"
					>
						<down-arrow-icon></down-arrow-icon>
					</span>
				</header>
			</template>
			<div
				class="transaction-list border border-line-c border-solid border-t-0 px-6 relative rounded-b-lg bg-white z-10"
			>
				<transaction-item
					v-for="transaction in get4Transactions()"
					:key="transaction.title"
					:transaction="transaction"
					class="transaction"
				></transaction-item>
			</div>
			<div v-if="transactions.length > 4" class="transaction-view-all">
				<a href="/" class="transaction-view-link text-primary-c font-semibold text-sm text-center border border-green-light border-t-0 border-solid bg-green-lighter block rounded-b-lg py-4 relative">
					View all card transactions
				</a>
			</div>
		</q-expansion-item>
	</div>
</template>
<script setup lang="ts">
import { TransactionItemType } from '@/@types/transaction';
import { DownArrowIcon, CardDetailIcon, TransactionIcon } from '@/common/icons';
import TransactionItem from '@/components/TransactionItem/TransactionItem.vue';

const transactions: TransactionItemType[] = [
	{
		type: 'file-storage',
		title: 'Hamleys',
		date: '20 May 2020',
		expense: 'S$ 150',
		isIncome: true,
	},
	{
		type: 'flight',
		title: 'Dubai',
		date: '20 May 2020',
		expense: 'S$ 160',
		isIncome: false,
	},
	{
		type: 'mega-phone',
		title: 'Vinaphone',
		date: '20 May 2020',
		expense: 'S$ 186',
		isIncome: false,
	},
	{
		type: 'file-storage',
		title: 'Trident',
		date: '20 May 2020',
		expense: 'S$ 194',
		isIncome: false,
	},
	{
		type: 'mega-phone',
		title: 'Toyota',
		date: '20 May 2020',
		expense: 'S$ 250',
		isIncome: true,
	},
];

const get4Transactions = (): TransactionItemType[] => {
	return transactions.slice(0, 4);
};
</script>
<style lang="scss">
.expansion-items {
	.q-item {
		@apply p-0;
	}
	.q-expansion-item {
		&--expanded {
			.toggle-icon {
				@apply rotate-180;
			}
		}
		+ .q-expansion-item {
			@apply mt-6;
		}
	}
}

.transaction {
	&:not(:last-child) {
		@apply border-b;
		@apply border-border-c;
		@apply border-solid;
	}
}

.transaction-list {
	&:before,
	&:after {
		content: '';
		width: 0.9px;
		top: -11px;
		height: 11px;
		@apply bg-line-c;
		@apply absolute;
	}

	&:before {
		left: -1px;
	}

	&:after {
		right: -1px;
	}
}

.transaction-view-all {
	margin-top: -5px;

	.transaction-view-link {
		padding-top: calc(1rem + 5px);
	}
}
</style>
