import {UserWithAlbum} from '../app/types';

export const mapUserToSectionList = (users: UserWithAlbum[]) => {
  let mapped: any[] = [];
  mapped = users.map(user => {
    return {title: user.name, data: user.albums};
  });
  return mapped;
};
