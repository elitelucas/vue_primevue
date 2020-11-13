<template>
	<div id="app">
		<app-header />
		<router-view />
		<app-footer />
	</div>
</template>

<style lang="scss">
.vue-dialog button {
	letter-spacing: 1px;
	outline: none;
	text-transform: uppercase;
}
</style>

<script lang="ts">
import Vue from 'vue';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

export default Vue.extend({
	name: 'Layout',
	components: {
		AppFooter,
		AppHeader
	}
});
</script>
