<template lang="">
	<div
		class="card-actions bg-blue-light rounded-2xl flex items-center justify-around py-5 px-7 gap-4"
	>
		<button
			v-for="button in actions"
			:key="button.label"
			class="flex flex-col justify-center items-center"
		>
			<span>
				<component :is="button.icon" class="w-8 h-8"></component>
			</span>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span class="text-sm text-secondary-c inline-block mt-1.5" v-html="sanitizeHtml(button.label)">
			</span>
		</button>
	</div>
</template>
<script setup lang="ts">
import { markRaw } from 'vue';
import sanitizeHtml from 'sanitize-html';
import FreezeIcon from '@/common/icons/FreezeIcon.vue';
import LimitIcon from '@/common/icons/LimitIcon.vue';
import GPayIcon from '@/common/icons/GPayIcon.vue';
import ReplaceCardIcon from '@/common/icons/ReplaceCardIcon.vue';
import DeactivateCardIcon from '@/common/icons/DeactivateCardIcon.vue';

/*
* Todo:
* - Replace v-html
*/
const actions = [
	{
		label: 'Freeze <br /> card',
		icon: markRaw(FreezeIcon),
	},
	{
		label: 'Set spend <br /> limit',
		icon: markRaw(LimitIcon),
	},
	{
		label: 'Add to <br /> GPay',
		icon: markRaw(GPayIcon),
	},
	{
		label: 'Replace <br /> card',
		icon: markRaw(ReplaceCardIcon),
	},
	{
		label: 'Cancel <br /> card',
		icon: markRaw(DeactivateCardIcon),
	},
];
</script>
<style lang="scss"></style>
