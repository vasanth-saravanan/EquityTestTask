import {StyleSheet} from 'react-native';
import {appStyles} from './AppStyles';

const basePagestyle = StyleSheet.create({
  baseContainer: {
    flex: 1,
    width : '100%',
    backgroundColor: appStyles.color.blueDark,
  },
  container: {
    flex: 1,
    margin: 5,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  flex: {
    flex: 1,
  },
});
export {basePagestyle};