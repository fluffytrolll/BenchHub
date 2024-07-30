<script setup lang="ts">
import VLink from './UI/VLink.vue';
</script>

<template>
	<nav id="navigation">
		<div class="navigation-container">
			<span class="subtitle">{{ $t('menu.title') }}</span>
			<ul class="navidation-list">
				<li class="navigation-list__item">
					<VLink link="/web-development/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#web"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.menuList.webDevelopment') }}
						</template>
					</VLink>
				</li>
				<li class="navigation-list__item">
					<VLink link="/converters/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#recicle"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.menuList.converters') }}
						</template>
					</VLink>
				</li>
				<li class="navigation-list__item">
					<VLink link="/math/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#infinity"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.menuList.math') }}
						</template>
					</VLink>
				</li>
				<li class="navigation-list__item">
					<VLink link="/pomodoro/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#time"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.menuList.pomodoro') }}
						</template>
					</VLink>
				</li>
			</ul>
		</div>
		<div class="navigation-container">
			<span class="subtitle">{{ $t('menu.other') }}</span>
			<ul class="navidation-list">
				<li class="navigation-list__item">
					<VLink link="/settings/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#settings"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.otherList.settings') }}
						</template>
					</VLink>
				</li>
				<li class="navigation-list__item">
					<VLink link="/about/">
						<template v-slot:icon>
							<svg class="icon" width="24" height="24">
								<use xlink:href="#pet"></use>
							</svg>
						</template>
						<template v-slot:text>
							{{ $t('menu.otherList.about') }}
						</template>
					</VLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped lang="scss">
#navigation,
.navigation-container {
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

.navidation-list {
	list-style: none;
	display: flex;
	flex-flow: column nowrap;
	gap: 14px;
}
</style>
