// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';

export default {
	plugins: [
		svelte({
			/**
			 * Auto preprocess supported languages with
			 * '<template>'/'external src files' support
			 **/
			preprocess: autoPreprocess({
				/* options available https://github.com/kaisermann/svelte-preprocess/#user-content-options */
			})
		})
	]
};
