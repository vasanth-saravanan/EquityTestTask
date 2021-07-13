import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Title, Caption} from 'react-native-paper';
import {appStyles} from '../utils/AppStyles';
import {basePagestyle} from '../utils/BasePageStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IntradayScreen from './IntradayScreen';
import PositionalScreen from './PositionalScreen';
import Themes from '../utils/Themes';
const Tab = createMaterialTopTabNavigator();

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={basePagestyle.baseContainer}>
        <SafeAreaView />
        <Appbar style={styles.appBar}>
          <TouchableOpacity style={styles.iconContainer}>
            <Appbar.Action
              size={30}
              color={appStyles.color.white}
              icon="keyboard-backspace"
              onPress={() => {}}
            />
          </TouchableOpacity>
          <Title style={Themes.textWhite}>Equity</Title>

          <TouchableOpacity style={styles.oconContainer}>
            <Appbar.Action
              icon="filter-outline"
              size={30}
              color={appStyles.color.white}
              onPress={() => {}}
            />
          </TouchableOpacity>
        </Appbar>
        <Tab.Navigator
          initialRouteName={'IntradayScreen'}
          backBehavior={'initialRoute'}
          tabBarOptions={{
            activeTintColor: appStyles.color.white,
            labelStyle: [{textTransform: 'none'}],
            indicatorStyle: {
              backgroundColor: appStyles.color.blue,
              paddingBottom: 1,
              borderRadius: 2,
              marginBottom: 10,
            },
            style: {
              backgroundColor: appStyles.color.blueMedium,
              color: appStyles.color.blue,
              elevation: 0,
              paddingHorizontal: 20,
            },
          }}>
          <Tab.Screen
            name="IntradayScreen"
            component={IntradayScreen}
            options={{tabBarLabel: 'Intraday'}}
          />
          <Tab.Screen
            name="PositionalScreen"
            component={PositionalScreen}
            options={{tabBarLabel: 'Positional'}}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

export default DashboardScreen;
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  icon: {
    backgroundColor: appStyles.color.transparent,
    marginTop: 10,
  },
  appBar: {
    justifyContent: 'space-between',
    backgroundColor: appStyles.color.blueDark,
    elevation: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: appStyles.color.greyDark,
    backgroundColor: '#162029',
  },
});
