import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#9EA93F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  nameTouchable: {
    flex: 1,
    height: '100%',
  },
  albumName: {
    marginTop: 14,
    marginLeft: 24,
    color: '#274029',
  },

  deleteTouchable: {
    padding: 12,
  },
});
