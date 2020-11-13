<template>
	<Menubar :model="navbaritems">
		<template #start>
			<img alt="logo" src="@/assets/logo.jpg" width="40" class="p-mr-2" />
		</template>
		<template #end>
			<i
				id="user-icon"
				class="pi pi-user"
				label="Toggle"
				aria-hidden="true"
				@click="toggle"
			/>
			<OverlayPanel id="user-dropdown" ref="navbar-dropdown">
				<p class="dropdown-text">
					<i class="pi pi-user" aria-hidden="true" />
					<span>Sign Out</span>
				</p>
			</OverlayPanel>
		</template>
	</Menubar>
</template>

<script>
import OverlayPanel from 'primevue/overlaypanel';

export default {
	components: {
		OverlayPanel
	},
	data() {
		return {
			navbaritems: [
				{
					label: 'User Management',
					items: [
						{
							label: 'User Management',
							command: () => {
								this.$router.push('users');
							}
						},
						{
							label: 'Test',
							command: () => {
								this.$router.push('test');
							}
						}
					]
				}
			]
		};
	},
	methods: {
		toggle(event) {
			this.$refs['navbar-dropdown'].toggle(event);
		}
	}
};
</script>

<style lang="scss" scoped>
.p-menubar {
	background-color: black;
	color: white;
	padding: 8px 16px;
	border: none;
	border-radius: unset;
}

#user-icon {
	padding: 5px;
	background: white;
	color: black;
	border-radius: 100px;
	cursor: pointer;
}

.p-overlaypanel {
	min-width: 150px;
	margin-top: 6px;
	box-shadow: 0 0 3px 0 hsla(0, 0%, 0%, 0.2);
	border-radius: 6px;
	&::before,
	&::after {
		display: none;
	}
	/deep/ .p-overlaypanel-content {
		padding: 12px;
	}
}

.dropdown-text {
	margin: 0;
	color: hsl(300, 0, 68);
	font-size: 16px;
	user-select: none;
	> .pi-user {
		margin-right: 10px;
	}
}
</style>
