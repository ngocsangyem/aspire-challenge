<template>
	<div class="tabs-container">
		<q-tabs
			v-model="tab"
			dense
			class="text-grey"
			active-color="primary"
			indicator-color="primary"
			align="justify"
			narrow-indicator
		>
			<q-tab name="DebitCardsTab" label="My debit cards"> </q-tab>
			<q-tab
				name="CompanyCards"
				label="All company cards"
				:disable="true"
			>
			</q-tab>
		</q-tabs>
		<q-tab-panels v-model="tab">
			<q-tab-panel name="DebitCardsTab">
				<debit-cards-tab></debit-cards-tab>
			</q-tab-panel>
			<q-tab-panel name="CompanyCards" :disable="true">
				<company-cards-tab></company-cards-tab>
			</q-tab-panel>
		</q-tab-panels>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DebitCardsTab from '../DebitCardsTab/DebitCardsTab.vue';
import CompanyCardsTab from '../CompanyCardsTab/CompanyCardsTab.vue';

const tab = ref('DebitCardsTab');
</script>

<style lang="scss">
.tabs-container {
	.q-tabs__content--align-justify {
		.q-tab {
			@apply flex-none;
		}
	}
	.q-tab {
		@apply p-0;
		@apply mr-8;
		&__label {
			@apply normal-case;
		}
		&--active {
			.q-tab__label {
				@apply font-bold;
				@apply text-black-c;
			}
		}
	}
	.q-focus-helper {
		@apply hidden;
	}
	.q-panel-parent {
		@apply overflow-visible;
	}

	.q-tab-panel {
		@apply p-0;
		@apply mt-4;
	}
	.q-panel {
		@apply overflow-visible;
	}

	.tab-content {
		@include breakpoint(md) {
			@apply bg-white;
			@apply py-7 px-10;
			@apply shadow-box;
			@apply rounded-lg;
		}
	}
}
</style>
