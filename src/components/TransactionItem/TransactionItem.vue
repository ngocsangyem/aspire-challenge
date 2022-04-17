<template>
	<div class="transaction-item py-6">
		<div class="transaction-header flex">
			<div class="transaction-icon mr-3 shrink-0">
				<span
					v-if="isRightType('file-storage')"
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-fade"
				>
					<file-storage-icon></file-storage-icon>
				</span>
				<span
					v-if="isRightType('flight')"
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-fade"
				>
					<flight-icon></flight-icon>
				</span>
				<span
					v-if="isRightType('mega-phone')"
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-fade"
				>
					<mega-phone-icon></mega-phone-icon>
				</span>
			</div>
			<div class="transaction-info flex items-baseline grow">
				<div class="transaction-info-title">
					<span
						class="transaction-info-title-text text-md text-black font-semibold"
					>
						{{ transaction.title }}
					</span>
					<span
						class="transaction-info-title-date text-sm block mt-1 text-gray-light"
					>
						{{ transaction.date }}
					</span>
					<div class="transaction-item-action flex items-center mt-3">
						<span
							class="bg-blue-dark inline-block py-1.5 px-2 mr-2 rounded-xl"
						>
							<card-small-icon></card-small-icon>
						</span>
						<span class="text-xs font-semibold text-blue-dark">
							{{
								transaction.isIncome
									? 'Refund on debit card'
									: 'Charged to debit card'
							}}
						</span>
					</div>
				</div>
				<div
					class="transaction-info-expense inline-flex items-center ml-auto"
				>
					<span class="inline-block mr-2.5 font-bold text-md">
						{{ transaction.isIncome ? '+' : '-' }}
						{{}}
						{{ transaction.expense }}
					</span>
					<span>
						<next-arrow-icon></next-arrow-icon>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	MegaPhoneIcon,
	FlightIcon,
	FileStorageIcon,
	NextArrowIcon,
	CardSmallIcon,
} from '@/common/icons';
import { TransactionItemType } from '@/@types/transaction';

interface Props {
	transaction: TransactionItemType;
}

const props = withDefaults(defineProps<Props>(), {
	transaction: () => ({
		type: 'file-storage',
		title: 'Hamleys',
		date: '20 May 2020',
		expense: 'S$ 150',
		isIncome: false,
	}),
});

const isRightType = (type: string) => props.transaction.type === type;
</script>
