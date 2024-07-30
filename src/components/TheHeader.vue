<script setup lang="ts">
import TheInterface from './TheInterface.vue';
import TheNavigation from './TheNavigation.vue';
</script>

<template>
	<header class="header">
		<RouterLink id="logo" to="/">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="42" height="43" fill="none">
				<g clip-path="url(#a)">
					<path fill="#080808" stroke="#080808"
						d="m27.391 26.396-2.009-2.009 1.655-1.655L40.335 36.03c1.38 1.38 1.38 3.425 0 4.805s-3.426 1.38-4.806 0L24.596 29.9l2.796-2.796.354-.354-.354-.354ZM7.21 1.49C8.228 1.164 9.278 1 10.5 1c5.499 0 10 4.501 10 10v.16c0 1.507.001 2.912-.427 4.058l-1.956 1.904-2.013-2.013-.377-.376-.352.399-3.935 4.459-.002.003-1.677 1.868C4.828 20.592.5 16.14.5 11c0-1.222.164-2.272.49-3.29l7.056 7.056.354.354.354-.354 5.512-5.512.354-.354-.354-.354L7.21 1.49Z" />
					<path fill="#5653EF"
						d="m21 28.85 2.363-2.1L21 24.387 35.962 9.425l3.15-1.05L42 2.6 40.163.762l-6.038 2.626-1.313 3.15-14.7 14.962-2.362-2.363-2.1 2.363s2.1 1.575-.263 3.938c-1.312 1.312-3.412-.263-7.35 3.675L.525 34.624S-1.05 37.25 2.1 40.4c3.15 3.15 5.775 1.575 5.775 1.575l5.512-5.513c3.675-3.675 2.363-6.037 3.413-7.087 2.363-2.363 4.2-.525 4.2-.525Zm-8.137-1.05 1.837 1.837-9.975 9.975-1.838-1.837 9.976-9.975Z" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 .5h42v42H0z" />
					</clipPath>
				</defs>
			</svg>
			<span class="title">Bench<strong>Hub</strong></span>
		</RouterLink>
		<TheNavigation />
		<TheInterface />
	</header>
</template>

<style scoped lang="scss">
.header {
	display: grid;
	grid-template-rows: auto auto 1fr;
	align-items: end;
	row-gap: 24px;

	width: 420px;
	height: 100%;
	border-radius: 48px;
	border: 1px solid var(--c-border, #ECECEC);
	background: var(--c-background, #F4F4F4);
	padding: 32px;

	@media screen and (min-width: 1440px) {
		padding: 42px;
		row-gap: 42px;
	}
}

#logo {
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 20px;
	text-decoration: none;

	.icon {
		width: 42px;
		height: 42px;
	}

	.title {
		color: var(--c-text, #080808);
		font-size: 40px;
		font-style: normal;
		font-weight: 500;
		line-height: 100%;

		strong {
			color: var(--c-accent, #5653EF);
		}
	}
}
</style>
