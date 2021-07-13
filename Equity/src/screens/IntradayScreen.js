import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Card, Title, Button, Avatar} from 'react-native-paper';
import {appStyles} from '../utils/AppStyles';
import {basePagestyle} from '../utils/BasePageStyles';
import moment from 'moment';
import Themes from '../utils/Themes';

class IntradayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: [
        {
          id: 1,
          companyName: 'Infosys',
          date: '	2021-07-13T13:52:25Z',
          paymentMethod: 'Cash',
          profit: 3000,
          entryPrice: 1350,
          stopLose: 1300,
          quantity: 1400,
          strickPrice: 0,
          status: 'Active',
          level: 'T2',
          epScore: 1365,
          t1Score: 1365,
          t2Score: 1380,
          t3Score: 1400,
        },
        {
          id: 2,
          companyName: 'Tata Consultancy Service',
          date: '	2021-07-13T13:52:25Z',
          paymentMethod: 'Options',
          profit: 3000,
          entryPrice: 1350,
          stopLose: 1300,
          quantity: 1400,
          strickPrice: 1300,
          status: 'InActive',
          level: 'T1',
          epScore: 1365,
          t1Score: 1365,
          t2Score: 1380,
          t3Score: 1400,
        },
        {
          id: 3,
          companyName: 'Tata Consultancy Service',
          date: '	2021-07-13T13:52:25Z',
          paymentMethod: 'Future',
          profit: 3000,
          entryPrice: 1350,
          stopLose: 1300,
          quantity: 1400,
          strickPrice: 1300,
          status: 'Active',
          level: 'T1',
          epScore: 1365,
          t1Score: 1365,
          t2Score: 1380,
          t3Score: 1400,
        },
      ],
    };
  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }

  renderItem = ({item}) => (
    <Card style={styles.card}>
      <View style={styles.cardInnerView}>
        <View style={basePagestyle.flexDirectionRow}>
          <Title style={{color: appStyles.color.white}}>
            {item.companyName}
          </Title>
          <View style={styles.verticalDivider}></View>
          <Title style={[Themes.textYellow, Themes.upperText]}>
            {item.paymentMethod}
          </Title>
        </View>

        <View style={[basePagestyle.flexDirectionRow, styles.header]}>
          <Text style={styles.date}>
            Date : {moment.utc(item.date).local().format('DD MMMM YYYY hh:mmA')}
          </Text>
          <View style={basePagestyle.flexDirectionRow}>
            <Title style={Themes.textGreen}>Profit :</Title>
            <Avatar.Icon
              size={30}
              icon="currency-inr"
              color={appStyles.color.green}
              style={styles.inrIcon}
            />
            <Title style={[Themes.textGreen, styles.profit]}>
              {this.numberWithCommas(item.profit)}
            </Title>
          </View>
        </View>

        <View style={styles.hr}></View>

        <View style={styles.priceLevelContainer}>
          <View style={styles.priceContainerLeft}>
            {item.strickPrice > 0 ? (
              <Text style={styles.priceLabel}>
                Strick Price -{' '}
                <Title style={styles.price}>{item.strickPrice}</Title>
              </Text>
            ) : (
              <Title> </Title>
            )}

            <View style={styles.priceLevelContainer}>
              <Text style={styles.priceLabel}>
                Entry Price -{' '}
                <Title style={styles.price}>{item.entryPrice}</Title>
              </Text>
              <View style={styles.priceDivider}></View>
              <Text style={styles.priceLabel}>
                Stop Lose - <Title style={styles.price}>{item.stopLose}</Title>
              </Text>
              <View style={styles.priceDivider}></View>
              <Text style={styles.priceLabel}>
                Quantity - <Title style={styles.price}>{item.quantity}</Title>
              </Text>
            </View>
          </View>
          <View style={styles.buyButtonContainer}>
            <Button
              icon="chart-line-variant"
              labelStyle={Themes.textTransformNone}
              style={styles.buyButton}
              contentStyle={basePagestyle.rowReverse}
              mode="contained"
              onPress={() => {}}>
              Buy
            </Button>
          </View>
        </View>

        <View style={styles.levelContainer}>
          <View>
            <Avatar.Icon
              size={30}
              icon="flag"
              color={appStyles.color.yellow}
              style={styles.flagIcon}
            />
            <View style={styles.levelCircle}>
              <Text style={{color: appStyles.color.white}}>EP</Text>
            </View>
            <Title style={styles.score}>{item.epScore}</Title>
          </View>
          <View>
            {item.level == 'EP' ? (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.yellow}
                style={styles.runIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.transparent}
                style={styles.runIcon}
              />
            )}

            <View style={styles.levelHR}></View>
          </View>
          <View>
            {item.level != 'EP' ? (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.yellow}
                style={styles.flagIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.transparent}
                style={styles.flagIcon}
              />
            )}
            <View style={styles.levelCircle}>
              <Text style={{color: appStyles.color.white}}>T1</Text>
            </View>
            <Title style={styles.score}>{item.t1Score}</Title>
          </View>
          <View>
            {item.level == 'T1' ? (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.yellow}
                style={styles.runIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.transparent}
                style={styles.runIcon}
              />
            )}
            <View style={styles.levelHR}></View>
          </View>
          <View>
            {item.level == 'T2' || item.level == 'T3' ? (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.yellow}
                style={styles.flagIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.transparent}
                style={styles.flagIcon}
              />
            )}
            <View style={styles.levelCircle}>
              <Text style={{color: appStyles.color.white}}>T2</Text>
            </View>
            <Title style={styles.score}>{item.t2Score}</Title>
          </View>
          <View>
            {item.level == 'T2' ? (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.yellow}
                style={styles.runIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="run"
                color={appStyles.color.transparent}
                style={styles.runIcon}
              />
            )}

            <View style={styles.levelHR}></View>
          </View>
          <View>
            {item.level == 'T3' ? (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.yellow}
                style={styles.flagIcon}
              />
            ) : (
              <Avatar.Icon
                size={30}
                icon="flag"
                color={appStyles.color.transparent}
                style={styles.flagIcon}
              />
            )}
            <View style={styles.levelCircle}>
              <Text style={{color: appStyles.color.white}}>T3</Text>
            </View>
            <Title style={styles.score}>{item.t3Score}</Title>
          </View>
        </View>

        {item.status == 'Active' ? (
          <View
            style={[basePagestyle.flexDirectionRow, styles.statusContainer]}>
            <Text style={[Themes.textOrange, Themes.boldFont]}>
              Status - {item.status}
            </Text>
            <Button
              mode="outlined"
              labelStyle={[Themes.textOrange, Themes.textTransformNone]}
              style={styles.updateButton}
              onPress={() => {}}>
              Updates
            </Button>
          </View>
        ) : null}
      </View>
    </Card>
  );

  render() {
    return (
      <View style={styles.baseContainer}>
        <FlatList
          data={this.state.responseData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default IntradayScreen;
const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: appStyles.color.blueDark,
    padding: 5,
    paddingTop: 20,
    paddingBottom: 10,
  },
  card: {
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: appStyles.color.blueMedium,
    shadowColor: appStyles.color.white,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.26,
    elevation: 5,
  },
  cardInnerView: {
    flex: 1,
    margin: 3,
  },
  verticalDivider: {
    width: 2,
    height: 25,
    backgroundColor: appStyles.color.blue,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  header: {
    justifyContent: 'space-between',
  },
  date: {
    color: appStyles.color.greyMedium,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inrIcon: {
    backgroundColor: 'transparent',
    top: 5,
  },
  profit: {
    left: -5,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: appStyles.color.greyDark,
  },
  priceLevelContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  priceContainerLeft: {
    width: '70%',
  },
  priceLabel: {
    color: appStyles.color.greyMedium,
    marginVertical: 10,
    fontSize: 13,
  },
  price: {
    color: appStyles.color.white,
    alignSelf: 'center',
    fontSize: 15,
  },
  priceDivider: {
    width: 1,
    height: 20,
    backgroundColor: appStyles.color.greyMedium,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  buyButtonContainer: {
    width: '30%',
    justifyContent: 'flex-end',
  },
  buyButton: {
    backgroundColor: appStyles.color.smoothGreen,
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  flagIcon: {
    backgroundColor: 'transparent',
  },
  levelCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: appStyles.color.smoothBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    color: appStyles.color.white,
    alignSelf: 'center',
    fontSize: 15,
  },
  runIcon: {
    backgroundColor: 'transparent',
    top: 10,
    alignSelf: 'center',
  },
  levelHR: {
    height: 1,
    width: 55,
    backgroundColor: appStyles.color.greyLight,
    marginTop: 15,
    marginHorizontal: 5,
  },
  statusContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    borderWidth: 1,
    borderColor: appStyles.color.greyMedium,
  },
});