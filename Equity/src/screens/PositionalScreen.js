import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {appStyles} from '../utils/AppStyles';
import {basePagestyle} from '../utils/BasePageStyles';
import Themes from '../utils/Themes';

class PositionalScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.baseContainer}>
        <Text style={Themes.textWhite}>
          Positional screen under construction
        </Text>
      </View>
    );
  }
}

export default PositionalScreen;
const styles = StyleSheet.create({
  baseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: appStyles.color.blueDark,
  },
});
