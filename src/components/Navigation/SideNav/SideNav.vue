<template>
	<aside
		class="side-nav md:bg-secondary-c w-full md:w-340 md:p-12 md-max:fixed md:min-h-screen md-max:left-0 md-max:bottom-0"
	>
		<header class="mb-20 md-max:hidden md:block">
			<a
				href="https://aspireapp.com/"
				class="aspire-logo"
				target="_blank"
				rel="noopener"
			>
				<span class="inline-block">
					<aspire-logo></aspire-logo>
				</span>
			</a>
			<p class="opacity-30 text-white text-lg">
				Trusted way of banking for 3,000+ SMEs and startups in Singapore
			</p>
		</header>
		<nav-menu></nav-menu>
	</aside>
</template>

<script setup lang="ts">
import AspireLogo from '@/common/icons/AspireLogo.vue';
import NavMenu from '../NavMenu/NavMenu.vue';
</script>

<style lang="scss" scoped>
.aspire-logo {
	span {
		&:first-child {
			margin-bottom: 19px;
		}
	}
}
</style>
