import reducer, {
  initialState,
  selectAlbum,
  deleteAlbum,
} from '../../src/screens/Users/reducer';

const albumToDelete = {
  userId: 1,
  id: 94,
  title: 'album To Delete',
};
const albumToSelect = {
  userId: 1,
  id: 99,
  title: 'album To Select',
};

const testUser = {
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
};
describe('UsersReducer', () => {
  test('should add selected album  to reducer when selectAlbum action is triggered', () => {
    expect(reducer(initialState, selectAlbum(albumToSelect))).toEqual({
      ...initialState,
      selectedAlbum: albumToSelect,
    });
  });

  test('should add delete  selected album when deleteAlbum action is triggered', () => {
    expect(
      reducer(
        {
          ...initialState,
          users: [{...testUser, albums: [albumToSelect, albumToDelete]}],
        },
        deleteAlbum(albumToDelete),
      ),
    ).toEqual({
      ...initialState,
      users: [{...testUser, albums: [albumToSelect]}],
    });
  });
});
