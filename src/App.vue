<template>
	<router-view />
</template>

<script lang="ts">
import './assets/scss/app.scss';

export default {
	name: 'App'
};
</script>

<style lang="scss">
html,
body {
	height: 100%;
}

#app {
	font-family: 'DINPro', sans-serif;
	font-weight: 300;
	font-size: 14px;
	line-height: normal;

	.p-component {
		font-size: 14px;
		font-weight: 300;
	}
}
</style>
