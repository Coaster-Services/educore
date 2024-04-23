<script lang="ts">
	export let href = "/"
</script>

<a {href}>
	<slot/>
</a>

<style lang="scss">
	a {
		all: unset;
		cursor: pointer;
		color: var(--primary);
		position: relative;

		&::after {
			content: "";
			position: absolute;
			background: var(--primary);
			bottom: 0px;
			left: 0px;
			width: 100%;
			height: 2px;
			transform: scaleX(0);
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
		}

		&:hover::after {
			transform: scaleX(1);
		}
	}
</style>