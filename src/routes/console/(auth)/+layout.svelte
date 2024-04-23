<div class="wrap">
	<form method="post" action="?/auth" class="loginCard">
		<slot/>
	</form>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loginCard {
		min-width: 20rem;
		background: var(--background);
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 1rem;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>