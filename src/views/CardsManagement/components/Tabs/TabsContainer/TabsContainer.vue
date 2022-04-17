<template>
	<div class="tabs-container">
		<q-tabs
			v-model="tab"
			dense
			class="text-grey md-max:px-6"
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
		<q-tab-panels v-model="tab" class="md-max:bg-secondary-c">
			<q-tab-panel name="DebitCardsTab">
				<debit-cards-tab></debit-cards-tab>
			</q-tab-panel>
			<q-tab-panel name="CompanyCards" :disable="true">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt quae provident dolores eveniet blanditiis doloremque quibusdam asperiores exercitationem optio? Alias minima ab iure eum voluptates soluta illo necessitatibus? Neque, numquam corrupti. Quibusdam voluptate repudiandae, at nulla praesentium molestiae deserunt id incidunt necessitatibus qui, alias fugiat explicabo recusandae, ipsum adipisci temporibus delectus a expedita labore vero saepe libero? In fugit, tenetur blanditiis delectus laudantium, voluptate quas natus nisi doloremque non quae quaerat placeat harum laborum inventore error enim aliquid saepe. Rem dignissimos accusantium, excepturi eligendi iure voluptatibus voluptates fugit saepe, sunt sapiente quibusdam veniam dolor praesentium ex! Aspernatur, ut praesentium.</p>
			</q-tab-panel>
		</q-tab-panels>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DebitCardsTab from '../DebitCardsTab/DebitCardsTab.vue';

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
			@apply md-max:text-sm;
		}
		&--active {
			.q-tab__label {
				@apply font-bold;
				@apply text-black-c;
				@apply md-max:text-white;
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
