<script setup lang="ts">

</script>

<template>
	<footer class="footer">
		<a class="coffee" href="#" :title="$t('footer.coffee')" :aria-label="$t('footer.coffee')">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<path fill="#fff"
					d="M25.053 7.56a2 2 0 0 0-1.546-1.947L23 3.773a1.44 1.44 0 0 0-1.4-1.013H10.387A1.413 1.413 0 0 0 9 3.773l-.507 1.84A2.053 2.053 0 0 0 6.947 7.68 1.973 1.973 0 0 0 8.36 9.573l.133 3.694a1 1 0 0 0-.84 1.04l.32 7.68a1.013 1.013 0 0 0 .867.96l.107 2.96A3.44 3.44 0 0 0 12.4 29.24h7.187a3.44 3.44 0 0 0 3.466-3.333l.107-2.96a1.014 1.014 0 0 0 .853-.96l.32-7.68a1.027 1.027 0 0 0-.28-.747.96.96 0 0 0-.546-.293l.133-3.694a2.046 2.046 0 0 0 1.413-2.013ZM10.387 4.093l11.32.04.4 1.427H9.92l.467-1.467ZM21.72 25.867a2.106 2.106 0 0 1-2.133 2.04H12.4a2.1 2.1 0 0 1-2.12-2.04l-.107-2.907h11.654l-.107 2.907Zm-8.52-7.76a2.8 2.8 0 1 1 5.6 0 2.8 2.8 0 0 1-5.6 0Zm8.973-4.867H9.827l-.134-3.56h12.6l-.12 3.56Zm.88-4.893H8.947a.693.693 0 0 1-.667-.787.667.667 0 0 1 .667-.667h14.106a.706.706 0 0 1 .667.787.666.666 0 0 1-.667.667Z" />
			</svg>
		</a>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	position: fixed;
	top: 10px;
	right: -60px;

	width: 186px;
	height: 48px;

	display: flex;
	transform: rotate(45deg);
	justify-content: center;
	align-items: center;
	background: var(--c-accent, #5653EF);
	box-shadow: -29px 28px 11px 0px rgba(0, 0, 0, 0.00), -19px 18px 10px 0px rgba(0, 0, 0, 0.01), -10px 10px 9px 0px rgba(0, 0, 0, 0.05), -5px 4px 6px 0px rgba(0, 0, 0, 0.09), -1px 1px 4px 0px rgba(0, 0, 0, 0.10);


	@media screen and (min-width: 1024px) {
		top: 10px;
		left: -60px;
		transform: rotate(-45deg);
		box-shadow: 21px 29px 10px 0px rgba(0, 0, 0, 0.00), 14px 19px 9px 0px rgba(0, 0, 0, 0.01), 8px 10px 8px 0px rgba(0, 0, 0, 0.05), 3px 5px 6px 0px rgba(0, 0, 0, 0.09), 1px 1px 3px 0px rgba(0, 0, 0, 0.10);
	}


	.coffee {
		display: inline-block;
		width: 38px;
		height: 38px;

		.icon {
			width: inherit;
			height: inherit;
		}
	}
}
</style>