import 'react-native';
import React from 'react';
import {renderWithProviders} from '../../src/utils/test-utils';
import {AlbumDetail} from '../../src/screens/AlbumDetail';

describe('AlbumDetail', () => {
  test('Shows a loading while gets data', async () => {
    let screen = renderWithProviders(<AlbumDetail />);

    expect(screen.getByTestId('TestLoaderAlbumDetail')).toBeDefined();
  });
});
