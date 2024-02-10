import {mapUserToSectionList} from './mapUserToSectionList';

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
      {userId: 1, id: 1, title: 'quidem molestiae enim'},
      {userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa'},
      {userId: 1, id: 3, title: 'omnis laborum odio'},
      {userId: 1, id: 4, title: 'non esse culpa molestiae omnis sed optio'},
      {userId: 1, id: 5, title: 'eaque aut omnis a'},
      {userId: 1, id: 6, title: 'natus impedit quibusdam illo est'},
      {userId: 1, id: 7, title: 'quibusdam autem aliquid et et quia'},
    ],
  },
];

const expectedResult = [
  {
    title: 'Leanne Graham',
    data: [
      {userId: 1, id: 1, title: 'quidem molestiae enim'},
      {userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa'},
      {userId: 1, id: 3, title: 'omnis laborum odio'},
      {userId: 1, id: 4, title: 'non esse culpa molestiae omnis sed optio'},
      {userId: 1, id: 5, title: 'eaque aut omnis a'},
      {userId: 1, id: 6, title: 'natus impedit quibusdam illo est'},
      {userId: 1, id: 7, title: 'quibusdam autem aliquid et et quia'},
    ],
  },
];

describe('mapUserToSectionList', () => {
  it('should map users to be able to show un SectionList Component', () => {
    expect(mapUserToSectionList(testUsers)).toEqual(expectedResult);
  });
});
