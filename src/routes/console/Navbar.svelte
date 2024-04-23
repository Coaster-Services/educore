<script lang="ts">
	import TerminalIcon from "~icons/ph/terminal-window"
</script>

<div class="navBar">
	<div class="inner">
		<div class="title">
			<div class="icon">
				<TerminalIcon height="100%" width="100%" color="var(--primary)"/>
			</div>	
			<h2>Educore Console</h2>
		</div>
	</div>
</div>

<style lang="scss">
	.navBar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0rem 1rem;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
	}
	.inner {
		width: 90%;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		
		.icon {
			display: flex;
			aspect-ratio: 1/1;
			flex-shrink: 1;
			height: 2rem;
		}

		h2 {
			font-weight: 500;
			color: var(--primary);
			margin-left: 0.5rem;
		}
	}
</style>