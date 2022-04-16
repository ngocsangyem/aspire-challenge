<script setup lang="ts">
import SideNav from '@/components/Navigation/SideNav/SideNav.vue';
</script>

<template>
	<div class="md:flex">
		<side-nav></side-nav>
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
@use '@/styles/styles.scss';
</style>
