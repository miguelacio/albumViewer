import {fetchUsers} from '../../src/screens/Users/thunks';
import reducer, {initialState} from '../../src/screens/Users/reducer';

const testUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {lat: '-37.3159', lng: '81.1496'},
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
    albums: [
      {userId: 1, id: 99, title: 'album  1'},
      {userId: 1, id: 94, title: 'album 2'},
    ],
  },
];

describe('User thunks', () => {
  test('passes through non-function action', () => {
    const action = fetchUsers.fulfilled(testUsers, '');

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      users: testUsers,
    });
  });
});
