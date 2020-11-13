import { createServer, Model, Factory } from 'miragejs';
import faker from 'faker';

export default function() {
	createServer({
		models: {
			user: Model
		},
		factories: {
			user: Factory.extend({
				uuid: faker.random.uuid(),
				role: faker.random.arrayElement(['user', 'admin', 'modeler']),
				active: true
			})
		},
		seeds(server) {
			for (let i = 0; i < 100; i += 1) {
				const firstName = faker.name.firstName();
				const lastName = faker.name.lastName();
				const userName = faker.internet.userName(firstName, lastName);
				const email = faker.internet.email(firstName, lastName);

				server.create('user', {
					name: `${firstName} ${lastName}`,
					userName,
					email
				});
			}
		},
		routes() {
			this.get('/api/users', schema => {
				return schema.users.all();
			});
		}
	});
}
