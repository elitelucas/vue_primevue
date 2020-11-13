<template>
	<footer ref="footer">
		<div class="btn-group" role="group">
			<div class="btn-group">
				<div class="dropdown-menu dropdown-menu-right"></div>
			</div>
		</div>

		Obsidian {{ version }} © {{ year }} Obsidian Soft
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'AppFooter',
	data() {
		return {
			year: new Date().getFullYear()
		};
	},
	computed: {
		version() {
			return this.$store.getters.version;
		}
	}
});
</script>
