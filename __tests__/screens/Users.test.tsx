import 'react-native';
import React from 'react';
import {renderWithProviders} from '../../src/utils/test-utils';
import {Users} from '../../src/screens/Users';
import {fireEvent} from '@testing-library/react-native';

import {initialState} from '../../src/screens/Users/reducer';
const mockNavigation = {navigate: jest.fn()};

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

describe('Users', () => {
  test('Shows a loading while gets data', async () => {
    let screen = renderWithProviders(<Users navigation={mockNavigation} />);

    expect(screen.getByTestId('TestLoaderUsers')).toBeDefined();
  });

  test('Shows some users when receives data', async () => {
    let screen = renderWithProviders(<Users navigation={mockNavigation} />, {
      preloadedState: {
        users: {
          ...initialState,
          users: testUsers,
          isLoading: false,
        },
      },
    });

    expect(screen.getByTestId('TestSectionListUsers')).toBeDefined();
  });

  test('Navigates to album detail when one album is pressed', async () => {
    let screen = renderWithProviders(<Users navigation={mockNavigation} />, {
      preloadedState: {
        users: {
          ...initialState,
          users: testUsers,
          isLoading: false,
        },
      },
    });

    const button = screen.getAllByTestId('TouchableSelectAlbum');
    fireEvent.press(button[0]);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details');
  });
  test('Shows a sad dog when it receives data but its empty', async () => {
    let screen = renderWithProviders(<Users navigation={mockNavigation} />, {
      preloadedState: {
        users: {
          ...initialState,
          users: [],
          isLoading: false,
        },
      },
    });

    expect(screen.getByTestId('TestListEmpty')).toBeDefined();
  });
});
