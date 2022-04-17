<template>
	<header class="cd-header pb-8 md:pb-8 md-max:p-6 md-max:text-white">
		<span class="text-md inline-block mb-4 "> Available balance </span>
		<div class="flex items-center justify-between">
			<div class="header-balance text-black">
				<div class="font-bold flex items-center md-max:text-white">
					<span
						class="bg-primary-c text-white text-xs md:text-sm py-1 px-3 rounded inline-block mr-3"
						>S$</span
					>
					<span class="text-3xl">3,000</span>
				</div>
			</div>
			<add-new-card></add-new-card>
		</div>
	</header>
</template>
<script lang="ts" setup>
import AddNewCard from '../AddNewCard/AddNewCard.vue';
</script>
<style lang="scss">
</style>
