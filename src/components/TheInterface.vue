<script setup lang="ts">
import TheLanguage from './TheLanguage.vue';
import VButton from './UI/VButton.vue';
</script>

<template>
	<div class="interface">
		<div class="interface-container">
			<span class="subtitle">{{ $t('interface.language') }}</span>
			<TheLanguage />
		</div>
		<VButton type="button" :accent="true" :center="true" :aria-label="$t('interface.installApp')">
			<template v-slot:text>
				{{ $t('interface.installApp') }}
			</template>
		</VButton>
	</div>
</template>

<style scoped lang="scss">
.interface {
	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
	gap: 32px;
}

.interface-container {
	display: flex;
	flex-flow: column nowrap;
	gap: 24px;
}

.subtitle {
	color: var(--c-gray, #6A6A6A);
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}
</style>