<template>
	<div>
		<div style="padding: 30px">
			<div class="content-section implementation" style="margin-bottom: 30px">
				<Toolbar>
					<template v-slot:left>
						<SplitButton
							label="Add User"
							icon="pi pi-plus"
							:model="items"
							@click="openModal"
						></SplitButton>
					</template>
					<template v-slot:right>
						<span class="p-input-icon-left">
							<i class="pi pi-search" />
							<InputText
								type="text"
								placeholder="Search.."
								v-model="filters['global']"
							/>
						</span>
					</template>
				</Toolbar>
			</div>
			<div>
				<DataTable
					class="p-datatable-customers p-datatable-striped"
					:value="users"
					:paginator="true"
					:rows="10"
					paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
					:rowsPerPageOptions="[5, 10]"
					currentPageReportTemplate="{first} to {last} of {totalRecords}"
					:selection.sync="selectedCustomers"
					contextMenu
					:contextMenuSelection.sync="selectedUser"
					@row-contextmenu="onRowContextMenu"
					:filters="filters"
				>
					<Column selectionMode="multiple" headerStyle="width: 3em"></Column>
					<Column field="name" header="Name"></Column>
					<Column field="userName" header="User Name"></Column>
					<Column field="email" header="Email"></Column>
					<Column field="role" header="Role(s)"></Column>
					<Column
						headerStyle="width: 8rem; text-align: center"
						bodyStyle="text-align: center; overflow: visible"
					>
						<template #body>
							<Button
								type="button"
								icon="pi pi-pencil"
								class="p-button-secondary"
							></Button>
						</template>
					</Column>
				</DataTable>
				<ContextMenu :model="menuModel" ref="cm" />
			</div>

			<Dialog
				header="New User"
				:visible.sync="displayModal"
				:style="{ width: '50vw' }"
				:modal="true"
			>
				<div class="p-fluid">
					<div class="p-field">
						<label for="firstname1">Name</label>
						<InputText id="firstname1" type="text" />
					</div>
					<div class="p-field">
						<label for="lastname1">User Name</label>
						<InputText id="lastname1" type="text" />
					</div>
					<div class="p-field">
						<label for="email">Email</label>
						<InputText id="email" type="text" />
					</div>
					<div class="p-field">
						<label for="state">State</label>
						<Dropdown
							inputId="state"
							v-model="selectedState"
							:options="states"
							optionLabel="name"
							placeholder="Select"
						/>
					</div>
				</div>

				<div class="p-grid">
					<div class="p-col p-fluid">
						<Button
							label="Cancel"
							@click="closeModal"
							class="p-button-secondary"
						/>
					</div>
					<div class="p-col p-fluid">
						<Button label="Create User" @click="closeModal" autofocus />
					</div>
				</div>
			</Dialog>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			displayModal: false,
			selectedCustomers: null,
			items: [
				{
					label: 'Update',
					icon: 'pi pi-refresh'
				},
				{
					label: 'Delete',
					icon: 'pi pi-times'
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/';
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
					command: () => {
						this.$router.push('fileupload');
					}
				}
			],
			filters: {},
			users: null,
			newusername: '',
			selectedState: null,
			states: [
				{ name: 'Admin', code: 'Admin' },
				{ name: 'User', value: 'User' },
				{ name: 'Modeler', code: 'Modeler' }
			],
			selectedUser: null,
			menuModel: [
				{
					label: 'Reset password',
					icon: 'pi pi-fw pi-key',
					command: () => {
						this.changepassword();
					}
				},
				{
					label: 'Disable user',
					icon: 'pi pi-fw pi-eye-slash',
					command: () => console.log('disable', this.selectedUser.name)
				},
				{
					label: 'Delete user',
					icon: 'pi pi-fw pi-trash',
					style: { color: '#353434' },
					command: () => console.log('delete', this.selectedUser.name)
				}
			]
		};
	},
	methods: {
		openModal() {
			this.displayModal = true;
		},
		closeModal() {
			this.displayModal = false;
		},
		onRowContextMenu(event) {
			this.$refs.cm.show(event.originalEvent);
		},
		changepassword() {
			console.log('reset', this.selectedUser.name);
		}
	},
	created() {
		fetch('/api/users')
			.then(res => res.json())
			.then(json => {
				this.users = json.users;
			});
	}
});
</script>

<style scoped></style>
