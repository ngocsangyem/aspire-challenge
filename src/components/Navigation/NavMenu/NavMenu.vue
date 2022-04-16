<template>
	<nav class="shadow-menu md:shadow-none">
		<ul class="flex md:flex-col justify-around">
			<li v-for="menuItem in menu" :key="menuItem.name">
				<a
					:href="menuItem.path"
					:class="`text-tiny py-3 md:py-0 md:text-xl flex flex-col md:flex-row items-center active:text-primary ${isActive(
						menuItem.isActive
					)}`"
					:title="menuItem.name"
				>
					<span class="inline-block mb-1 md:mb-0">
						<component :is="menuItem.icon"></component>
					</span>
					<span class="md:ml-4 inline-block">{{ menuItem.name }}</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { markRaw } from 'vue';
import AspireIcon from '@/common/icons/AspireIcon.vue';
import DebitCardIcon from '@/common/icons/DebitCardIcon.vue';
import PaymentIcon from '@/common/icons/PaymentIcon.vue';
import CreditCardIcon from '@/common/icons/CreditCardIcon.vue';
import UserIcon from '@/common/icons/UserIcon.vue';

/*
 * Todo
 * dynamic active class by route
 */
const menu = [
	{
		name: 'Home',
		path: '/',
		icon: markRaw(AspireIcon),
		isActive: false,
	},
	{
		name: 'Cards',
		path: '/',
		icon: markRaw(DebitCardIcon),
		isActive: true,
	},
	{
		name: 'Payments',
		path: '/',
		icon: markRaw(PaymentIcon),
		isActive: false,
	},
	{
		name: 'Credit',
		path: '/',
		icon: markRaw(CreditCardIcon),
		isActive: false,
	},
	{
		name: 'Settings',
		path: '/',
		icon: markRaw(UserIcon),
		isActive: false,
	},
];
const isActive = (active: boolean) => {
	return active
		? 'text-primary'
		: 'text-gray-acadia md:text-white hover:md:text-primary md:transition';
};
</script>

<style lang="scss" scoped>
.is-active {
	@apply text-primary;
}

li {
	@include breakpoint(md) {
		+ li {
			margin-top: 60px;
		}
	}
}
</style>
