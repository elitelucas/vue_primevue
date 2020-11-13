export interface UsersState {
	usersList: User;
}

export interface User {
	id: number;
	name: string;
	userName: string;
	email: string;
	role: string;
	active: boolean;
}
