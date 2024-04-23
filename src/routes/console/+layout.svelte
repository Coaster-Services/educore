<script>

	import Navbar from "./Navbar.svelte";

</script>
<div class="wrap">
	<Navbar/>
	<div class="content">
		<slot/>
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.content {
		height: 100%;
	}
</style>