import {useEffect} from 'react';
import axios from 'axios';
import {Album, User, UserWithAlbum} from '../app/types';
import {useAppDispatch} from '../app/hooks';
import {setUsers} from '../screens/Users/reducer';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_ALBUMS_BY_USER_ID =
  'https://jsonplaceholder.typicode.com/albums?userId=';

const useUsers = () => {
  const dispatch = useAppDispatch();
  const fetchUsers = async () => {
    try {
      const {data} = await axios.get<User[]>(URL_USERS);

      const usersWithAlbums = [];

      for (const user of data) {
        const {data: albums} = await axios.get<Album[]>(
          `${URL_ALBUMS_BY_USER_ID}{${user.id}}`,
        );
        usersWithAlbums.push({...user, albums});
      }

      dispatch(setUsers(usersWithAlbums));
    } catch (e) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);
};

export default useUsers;
