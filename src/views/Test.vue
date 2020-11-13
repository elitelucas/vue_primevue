<template>
	<div style="padding:20px;" @contextmenu="onImageRightClick">
		<ContextMenu ref="menu" :model="items" />
		<div>
			<DataTable
				:value="cars"
				class="p-datatable-striped"
				:paginator="true"
				:rows="3"
				paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
				:rowsPerPageOptions="[3, 5]"
				currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
			>
				<Column field="vin" header="Vin"></Column>
				<Column field="year" header="Year"></Column>
				<Column field="brand" header="Brand"></Column>
				<Column field="color" header="Color"></Column>
			</DataTable>
		</div>
		<div>
			<h5>Basic</h5>
			<Button label="Show" icon="pi pi-external-link" @click="openBasic" />
			<Dialog
				header="Header "
				:visible.sync="displayBasic"
				:style="{ width: '50vw' }"
			>
				<p class="p-m-0">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<template #footer>
					<Button
						label="No"
						icon="pi pi-times"
						@click="closeBasic"
						class="p-button-text"
					/>
					<Button
						label="Yes"
						icon="pi pi-check"
						@click="closeBasic"
						autofocus
					/>
				</template>
			</Dialog>
		</div>
		<h3>Advanced</h3>
		<div class="p-fluid p-formgrid p-grid">
			<div class="p-field p-col-12 p-md-6">
				<label for="firstname6">Firstname</label>
				<InputText id="firstname6" type="text" />
			</div>
			<div class="p-field p-col-12 p-md-6">
				<label for="lastname6">Lastname</label>
				<InputText id="lastname6" type="text" />
			</div>
			<div class="p-field p-col-12">
				<label for="address">Address</label>
				<Textarea id="address" rows="4" />
			</div>
			<div class="p-field p-col-12 p-md-6">
				<label for="city">City</label>
				<InputText id="city" type="text" />
			</div>
			<div class="p-field p-col-12 p-md-3">
				<label for="state">State</label>
				<Dropdown
					inputId="state"
					v-model="selectedState"
					:options="states"
					optionLabel="name"
					placeholder="Select"
				/>
			</div>
			<div class="p-field p-col-12 p-md-3">
				<label for="zip">Zip</label>
				<InputText id="zip" type="text" />
			</div>
		</div>
		<div class="p-shadow-5">
			<h3>Basic</h3>
			<div class="p-field-checkbox">
				<Checkbox id="binary" v-model="checked" :binary="true" />
				<label for="binary">{{ checked }}</label>
			</div>

			<h3>Multiple</h3>
			<div class="p-field-checkbox">
				<Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
				<label for="city1">Chicago</label>
			</div>
			<div class="p-field-checkbox">
				<Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
				<label for="city2">Los Angeles</label>
			</div>
			<div class="p-field-checkbox">
				<Checkbox id="city3" name="city" value="New York" v-model="cities" />
				<label for="city3">New York</label>
			</div>
			<div class="p-field-checkbox">
				<Checkbox
					id="city4"
					name="city"
					value="San Francisco"
					v-model="cities"
				/>
				<label for="city4">San Francisco</label>
			</div>
		</div>
		<Button label="Primary" class="p-button-outlined" />
		<Button label="Small" icon="pi pi-check" class="p-button-sm" />
		<Button label="Normal" icon="pi pi-check" class="p-button" />
		<Button label="Large" icon="pi pi-check" class="p-button-lg" />
		<h3>Addons</h3>
		<div class="p-grid p-fluid">
			<div class="p-col-12 p-md-4">
				<div class="p-inputgroup">
					<span class="p-inputgroup-addon">
						<i class="pi pi-user"></i>
					</span>
					<InputText placeholder="Username" />
				</div>
			</div>

			<div class="p-col-12 p-md-4">
				<div class="p-inputgroup">
					<span class="p-inputgroup-addon">$</span>
					<InputText placeholder="Price" />
					<span class="p-inputgroup-addon">.00</span>
				</div>
			</div>

			<div class="p-col-12 p-md-4">
				<div class="p-inputgroup">
					<span class="p-inputgroup-addon">W</span>
					<InputText placeholder="Website" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			checked: false,
			cities: [],
			categories: [
				{ name: 'Accounting', key: 'A' },
				{ name: 'Marketing', key: 'M' },
				{ name: 'Production', key: 'P' },
				{ name: 'Research', key: 'R' }
			],
			selectedState: null,
			states: [
				{ name: 'Arizona', code: 'Arizona' },
				{ name: 'California', value: 'California' },
				{ name: 'Florida', code: 'Florida' },
				{ name: 'Ohio', code: 'Ohio' },
				{ name: 'Washington', code: 'Washington' }
			],
			cities1: [],
			cities2: [],
			city1: null,
			city2: null,
			cars: [
				{ brand: 'Volkswagen', year: 2012, color: 'Orange', vin: 'dsad231ff' },
				{ brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
				{ brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
				{ brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
				{ brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34' },
				{ brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
				{ brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
				{ brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34' },
				{ brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
				{ brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' }
			],
			items: [
				{
					label: 'File',
					icon: 'pi pi-fw pi-file',
					items: [
						{
							label: 'New',
							icon: 'pi pi-fw pi-plus',
							items: [
								{
									label: 'Bookmark',
									icon: 'pi pi-fw pi-bookmark'
								},
								{
									label: 'Video',
									icon: 'pi pi-fw pi-video'
								}
							]
						},
						{
							label: 'Delete',
							icon: 'pi pi-fw pi-trash'
						},
						{
							separator: true
						},
						{
							label: 'Export',
							icon: 'pi pi-fw pi-external-link'
						}
					]
				},
				{
					label: 'Edit',
					icon: 'pi pi-fw pi-pencil',
					items: [
						{
							label: 'Left',
							icon: 'pi pi-fw pi-align-left'
						},
						{
							label: 'Right',
							icon: 'pi pi-fw pi-align-right'
						},
						{
							label: 'Center',
							icon: 'pi pi-fw pi-align-center'
						},
						{
							label: 'Justify',
							icon: 'pi pi-fw pi-align-justify'
						}
					]
				},
				{
					label: 'Users',
					icon: 'pi pi-fw pi-user',
					items: [
						{
							label: 'New',
							icon: 'pi pi-fw pi-user-plus'
						},
						{
							label: 'Delete',
							icon: 'pi pi-fw pi-user-minus'
						},
						{
							label: 'Search',
							icon: 'pi pi-fw pi-users',
							items: [
								{
									label: 'Filter',
									icon: 'pi pi-fw pi-filter',
									items: [
										{
											label: 'Print',
											icon: 'pi pi-fw pi-print'
										}
									]
								},
								{
									icon: 'pi pi-fw pi-bars',
									label: 'List'
								}
							]
						}
					]
				},
				{
					label: 'Events',
					icon: 'pi pi-fw pi-calendar',
					items: [
						{
							label: 'Edit',
							icon: 'pi pi-fw pi-pencil',
							items: [
								{
									label: 'Save',
									icon: 'pi pi-fw pi-calendar-plus'
								},
								{
									label: 'Delete',
									icon: 'pi pi-fw pi-calendar-minus'
								}
							]
						},
						{
							label: 'Archieve',
							icon: 'pi pi-fw pi-calendar-times',
							items: [
								{
									label: 'Remove',
									icon: 'pi pi-fw pi-calendar-minus'
								}
							]
						}
					]
				},
				{
					separator: true
				},
				{
					label: 'Quit',
					icon: 'pi pi-fw pi-power-off'
				}
			],
			displayBasic: false
		};
	},
	methods: {
		onImageRightClick(event) {
			this.$refs.menu.show(event);
		},
		openBasic() {
			this.displayBasic = true;
		},
		closeBasic() {
			this.displayBasic = false;
		}
	}
});
</script>

<style scoped></style>
