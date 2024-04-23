<script lang="ts">
	import '@fontsource/open-sauce-one';
</script>

<div class="wrap">
	<slot/>
</div>


<style lang="scss">
	:global(*) {

		box-sizing: border-box;
		font-family: 'Open Sauce One', sans-serif;
	}
	:global(body) {
		margin: 0px;
		display: flex;
		height: 100vh;
		width: 100%;	
	}

	.wrap {
		width: 100%;
		height: 100%;
	}

</style>