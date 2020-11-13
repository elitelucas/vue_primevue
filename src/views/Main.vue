<template>
	<div id="app">
		<router-view />
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

export default Vue.extend({
	name: 'Main',
	components: {}
});
</script>
