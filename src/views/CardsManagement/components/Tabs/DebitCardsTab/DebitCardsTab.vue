<template>
	<div class="tab-content">
		<div class="md:grid md:grid-cols-2 md:gap-x-11">
			<div class="tab-content-left">
				<card-actions class="mt-8"></card-actions>
			</div>
			<div class="tab-content-right">
				<expansion-items></expansion-items>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardActions from '@/components/Card/CardActions/CardActions.vue';
import ExpansionItems from '@/components/ExpansionItems/ExpansionItems.vue';
</script>