<script lang="ts">
	import '@fontsource/open-sauce-one';
	import { createStyleGuide } from '@coasterfan5/ui';

	createStyleGuide({
		background: 'var(--background)',
		text: 'var(--text)',
		primary: 'var(--primary)',
		secondary: 'var(--secondary)',
		accent: 'var(--accent)',
		button: {
			outline: {
				text: 'var(--text)',
				textHover: 'var(--background)'
			},
			regular: {
				text: 'var(--text)',
				textHover: 'var(--text)'
			}
		}
	});
</script>

<div class="wrap">
	<slot />
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
		background: var(--background);
		/*Theme*/
		--text: #01000a;
		--background: #fbfbfe;
		--primary: #2336e1;
		--secondary: #e4e4e4;
		--accent: #00aaff;
	}
	:global(h2) {
		font-weight: 500;
		font-size: 1.5rem;
	}

	.wrap {
		width: 100%;
		height: 100%;
	}
</style>
