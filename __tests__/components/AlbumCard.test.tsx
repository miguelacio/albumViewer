import 'react-native';
import React from 'react';
import {AlbumCard} from '../../src/components/AlbumCard';
import {render, fireEvent} from '@testing-library/react-native';

const mockDelete = jest.fn();
const mockOnSelect = jest.fn();
describe('AlbumCard', () => {
  test('renders correctly', () => {
    let screen = render(
      <AlbumCard
        onPressAlbum={mockOnSelect}
        onDeleteAlbum={mockDelete}
        title="Some Title"
      />,
    );

    expect(screen.findByText('Some Title')).toBeDefined();
  });

  test('calls onPressAlbum func when is pressed', () => {
    let screen = render(
      <AlbumCard
        onPressAlbum={mockOnSelect}
        onDeleteAlbum={mockDelete}
        title="Some Title"
      />,
    );

    fireEvent.press(screen.getByTestId('TouchableSelectAlbum'));
    expect(mockOnSelect).toHaveBeenCalled();
  });

  test('calls onDeleteAlbum func when delete icon is pressed', () => {
    let screen = render(
      <AlbumCard
        onPressAlbum={mockOnSelect}
        onDeleteAlbum={mockDelete}
        title="Some Title"
      />,
    );

    fireEvent.press(screen.getByTestId('TouchableDeleteAlbum'));
    expect(mockDelete).toHaveBeenCalled();
  });
});
