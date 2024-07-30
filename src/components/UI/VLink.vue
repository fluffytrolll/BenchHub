<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['link']);
</script>

<template>
	<RouterLink class="button" :to="props.link">
		<slot name="icon"></slot>
		<slot name="text"></slot>
	</RouterLink>
</template>

<style scoped lang="scss">
.button {
	position: relative;
	height: 48px;
	display: flex;
	align-items: center;
	align-self: stretch;
	gap: 10px;
	overflow: hidden;
	padding: 12px 16px;
	border-radius: 14px;
	border: 1px solid var(--c-border, #ECECEC);
	background: var(--c-white, #FFF);
	text-decoration: none;
	color: var(--c-text, #080808);
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	transition: border ease-in-out 0.2s, background ease-in-out 0.2s, color ease-in-out 0.2s;

	&:deep(svg) {
		fill: var(--c-text, #000);
		transition: fill ease-in-out 0.3s;
	}

	&:hover,
	&:focus-visible {
		border: 1px solid var(--c-accent, #5653ef);
		background: var(--c-accent, #5653ef);
		color: var(--c-white, #fff);


		&:deep(svg) {
			fill: var(--c-white, #fff);
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: -100%;
		transform: translateY(-50%);
		width: 24px;
		height: 24px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M10.262 4.68a.75.75 0 0 0-.08 1.059l5.58 6.512-5.58 6.511a.75.75 0 1 0 1.137.976l6-7a.75.75 0 0 0 0-.976l-6-7a.75.75 0 0 0-1.057-.08' clip-rule='evenodd'/%3E%3Cpath fill='%23fff' d='M6 5.25a.75.75 0 0 1 1.32-.487l6 7a.75.75 0 0 1 0 .976l-6 7A.75.75 0 0 1 6 19.25v-14Z'/%3E%3C/svg%3E");
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;

		transition: right ease 0.3s;
	}
}

.button[aria-current="page"] {
	border: 1px solid var(--c-accent, #5653ef);
	background: var(--c-accent, #5653ef);
	color: var(--c-white, #fff);

	&::after {
		right: 16px;
	}

	&:deep(svg) {
		fill: var(--c-white, #fff);
	}
}
</style>