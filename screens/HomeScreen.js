import React from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.sectionContainer}>
          <TextInput onChangeText={(keyword) => this.setState({keyword})} placeholder='Search by country...' />
        </View>
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._handlePress}
          >
            <Text> Search </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _handlePress = () => {
    //this.props.navigation.navigate('WeatherScreen', { country: this.state.keyword });
    this.props.navigation.navigate('WeatherScreen', { country: 'pepe' });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sectionContainer: {
    width: 100,
    height: 50
  },
  logo: {
    width: 50,
    height: 40
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
