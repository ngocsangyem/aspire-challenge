<template>
	<div class="tab-content">
		<div class="md:grid md:grid-cols-2 md:gap-x-11">
			<div class="tab-content-left">
				<card-actions class="mt-8 md-max:hidden"></card-actions>
			</div>
			<div class="tab-content-right">
				<card-actions class="md:hidden rounded-b-none"></card-actions>
				<expansion-items class="md-max:p-6"></expansion-items>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardActions from '@/components/Card/CardActions/CardActions.vue';
import ExpansionItems from '../../../components/ExpansionItems/ExpansionItems.vue';
</script>