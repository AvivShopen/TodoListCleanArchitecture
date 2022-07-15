import { faker } from '@faker-js/faker';

export function generateRandomUser() {
	return faker.name.findName();
}
