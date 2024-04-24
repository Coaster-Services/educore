<script>

	import Sidebar from "./Sidebar.svelte";

</script>
<div class="wrap">
	<Sidebar/>
	<div class="content">
		<slot/>
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:row;
		align-items: start;
		justify-content: start;
	}

	.content {
		width: 100%;
		flex-grow: 1;
		height: 100%;
	}
</style>

