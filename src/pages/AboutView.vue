<script setup lang="ts">
import VBackButton from '../components/UI/VBackButton.vue';
</script>

<template>
	<article class="container">
		<VBackButton />
		<hgroup class="heading">
			<h1 class="title">{{ $t('aboutPage.title') }}</h1>
			<p><strong class="product-name">Bench<span>Hub</span></strong> {{ $t('aboutPage.content.p1') }}</p>
		</hgroup>
		<p>{{ $t('aboutPage.content.p2') }}</p>
		<p>
			{{ $t('aboutPage.content.p3') }}
		</p>
		<ul class="about-product-list">
			<li class="about-product-list__item">
				<span class="about-product"><strong>{{ $t('aboutPage.list.i1') }}</strong> 0.0.1 (beta)</span>
			</li>
			<li class="about-product-list__item">
				<span class="about-product"><strong>{{ $t('aboutPage.list.i2') }}</strong> 01.09.2024</span>
			</li>
			<li class="about-product-list__item">
				<span class="about-product"><strong>{{ $t('aboutPage.list.i3') }}</strong> MIT (ссылка)</span>
			</li>
			<li class="about-product-list__item">
				<span class="about-product"><strong>{{ $t('aboutPage.list.i4') }}</strong> Анпилогов Артём (github)</span>
			</li>
		</ul>
	</article>
</template>

<style scoped lang="scss">
.container {
	padding: 12px 0;
	max-width: 400px;

	color: var(--c-text, #000);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	strong {
		font-weight: 600;
	}
}

.heading {
	display: flex;
	flex-flow: column nowrap;
	gap: 16px;
	margin-top: 20px;

	p {
		margin-bottom: 20px;
	}
}

.product-name {
	span {
		color: var(--c-accent, #5653EF);
	}
}

.title {
	color: var(--c-text, #000);
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}

p:not(:last-child) {
	margin-bottom: 20px;
}

.about-product-list {
	list-style: none;
	display: flex;
	flex-flow: column nowrap;
	gap: 12px;
}
</style>