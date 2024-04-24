<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="sidebar">
	<a class="button" href="/console/dashboard" class:active={$page.route.id == '/console/dashboard'}
		>Dashboard</a
	>
	<a
		class="button"
		href="/console/dashboard"
		class:active={$page.route.id == '/console/organizations'}>Organizations</a
	>
</nav>

<style lang="scss">
	.sidebar {
		height: 100%;
		padding: 1rem 0.5rem;
		width: 15rem;
		background: var(--background);
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}

	.button {
		width: 100%;
		padding: 0.25rem;
		border-radius: 0.25rem;
		font-size: 1.2rem;
		color: var(--text);
		text-decoration: none;

		&:hover {
			background: var(--secondary);
		}

		&.active {
			background: color-mix(in srgb, var(--secondary) 50%, var(--background) 50%);
		}
	}
</style>
