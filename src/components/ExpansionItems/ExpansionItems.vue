<template>
	<div class="expansion-items">
		<q-expansion-item expand-icon-class="hidden">
			<template #header>
				<header
					class="flex items-center w-full p-6 rounded-lg bg-blue-lighter shadow-expansion"
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
		<q-expansion-item expand-icon-class="hidden">
			<template #header>
				<header
					class="flex items-center w-full p-6 rounded-lg bg-blue-lighter shadow-expansion"
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
			<q-card>
				<q-card-section>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quidem, eius reprehenderit eos corrupti commodi magni
					quaerat ex numquam, dolorum officiis modi facere maiores
					architecto suscipit iste eveniet doloribus ullam aliquid.
				</q-card-section>
			</q-card>
		</q-expansion-item>
	</div>
</template>
<script setup lang="ts">
import { DownArrowIcon, CardDetailIcon, TransactionIcon } from '@/common/icons';
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
</style>
