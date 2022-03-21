import { getUsers } from './getUsers';


describe('USERS API - GET USERS', () => {
  it('returns an array of users', async () => {
    const users = await getUsers();
    const user = users[0];

    expect(Array.isArray(users)).toBe(true);
    expect(user).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    }))
  });
});
