import 'react-native';
import React from 'react';
import {renderWithProviders} from '../../src/utils/test-utils';
import {Users} from '../../src/screens/Users';
const mockNavigation = {navigate: jest.fn()};

describe('Users', () => {
  test('Shows a loading while gets data', async () => {
    let screen = renderWithProviders(<Users navigation={mockNavigation} />);

    // should show no user initially, and not be fetching a user
    expect(screen.getByTestId('TestLoaderUsers')).toBeDefined();
  });
});
