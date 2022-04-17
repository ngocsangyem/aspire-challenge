<template>
	<div class="debit-card-container">
		<div class="debit-card-action flex justify-end md:mb-3">
			<button
				class="debit-card-show text-primary-c text-xs font-bold flex items-center"
			>
				<removed-eye-icon class="mr-1.5"></removed-eye-icon>
				<span>Show card number</span>
			</button>
		</div>
		<div class="debit-card bg-primary-c rounded-xl p-7">
			<header class="debit-card-header mb-6 md:mb-7">
				<aspire-logo-white class="ml-auto"></aspire-logo-white>
			</header>
			<div class="debit-card-body text-white">
				<div class="debit-card-name mb-6 md:mb-8">
					<span class="font-bold">Mark Henry</span>
				</div>
				<div class="debit-card-number">
					<template v-if="!isShowNumber">
						<div class="flex items-center">
							<span class="dots">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
							</span>
							<span class="dots">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
							</span>
							<span class="dots">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
							</span>
							<span class="text-md font-bold">{{
								get4Digits(card.card_number)
							}}</span>
						</div>
					</template>
					<template v-else>
						<div class="flex items-center">
							<span v-for="(number, index) in cardNumbers" :key="`${number[0]}-${index}`" class="numbers">
								<span v-for="(n, i) in number" :key="`${n[0]}-${i}`" class="text-md font-bold">{{ n }}</span>
							</span>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { splitChunks } from '@/helpers';
import { CardType } from '@/@types/card';
import { RemovedEyeIcon, AspireLogoWhite } from '@/common/icons';
interface Props {
	card: CardType;
}

const props = withDefaults(defineProps<Props>(), {
	card: () => ({
		id: '',
		name: '',
		card_number: '2700457222980717',
		expiration_date: '',
		cvv_number: '',
		freeze: false,
	}),
});
const isShowNumber = ref(true);
const cardNumbers = ref<string[][]>([])
const get4Digits = (number: string) => number.slice(0, 4);
const stringArray = props.card.card_number.split('');

onMounted(() => {
	cardNumbers.value = splitChunks(stringArray, 4);
});

</script>

<style lang="scss" scoped>
.debit-card-name {
	span {
		font-size: 22px;
	}
	@include breakpoint(md) {
		@apply text-2xl;
	}
}

.dots, .numbers {
	@apply flex;
	@apply mr-7;
}

.dot {
	@apply bg-white;
	@apply w-1.5;
	@apply h-1.5;
	@apply inline-block;
	@apply rounded-full;

	&:not(:last-child) {
		@apply mr-1.5;
	}
}
</style>
