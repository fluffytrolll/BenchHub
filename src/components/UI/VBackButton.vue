<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
	router.back();
}
</script>

<template>
	<button class="button" @click="goBack">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path fill="#6A6A6A" fill-rule="evenodd"
				d="M9.159 3.12a.5.5 0 0 1 .053.706l-3.72 4.341 3.72 4.341a.5.5 0 1 1-.758.651l-4-4.667a.5.5 0 0 1 0-.65l4-4.667a.5.5 0 0 1 .704-.054"
				clip-rule="evenodd" />
			<path fill="#6A6A6A" d="M12 3.5a.5.5 0 0 0-.88-.325l-4 4.667a.5.5 0 0 0 0 .65l4 4.667a.5.5 0 0 0 .88-.325V3.5Z" />
		</svg>
		<span>{{ $t('ui.backButton') }}</span>
	</button>
</template>

<style scoped lang="scss">
.button {
	cursor: pointer;
	appearance: none;
	border: none;
	background: transparent;
	display: flex;
	align-items: center;
	gap: 6px;
	color: var(--c-gray, #6A6A6A);
	font-size: 12px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}
</style>