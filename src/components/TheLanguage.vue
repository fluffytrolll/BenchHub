<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
	locale.value = lang
	localStorage.setItem('user-lang', lang)
}

const savedLang = localStorage.getItem('user-lang') || 'ru'
locale.value = savedLang
</script>

<template>
	<ul class="lang-list">
		<li class="lang-list__item">
			<input hidden type="radio" name="lang" id="lang-ru" @change="changeLanguage('ru')" :checked="locale === 'ru'">
			<label class="radio-chips" for="lang-ru">Русский</label>
		</li>
		<li class="lang-list__item">
			<input hidden type="radio" name="lang" id="lang-en" @change="changeLanguage('en')" :checked="locale === 'en'">
			<label class="radio-chips" for="lang-en">English</label>
		</li>
		<li class="lang-list__item">
			<input hidden type="radio" name="lang" id="lang-sb" @change="changeLanguage('sb')" :checked="locale === 'sb'">
			<label class="radio-chips" for="lang-sb">Српски</label>
		</li>
	</ul>
</template>

<style scoped lang="scss">
.lang-list {
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.lang-list__item {
	position: relative;
	width: 100%;
}

.radio-chips {
	cursor: pointer;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 12px;
	border-radius: 8px;
	background: var(--c-white, #FFF);
	color: var(--c-text, #080808);
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 100%;

	transition: box-shadow ease 0.3s;
}

input[type='radio']:checked ~ .radio-chips {
	box-shadow: 0 0 0 1px var(--c-accent, #5653ef);
}
</style>