import React from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  NetInfo
} from 'react-native';

import PropTypes from 'prop-types';

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

  handlePress = () => {
    if (this.state.keyword === '') {
      alert("The input can't be blank.")
    } else {
      this.props.navigation.navigate('Forecast', { city: this.state.keyword });
    }
  };

  handleConnectivityChange = (isConnected) => {
    console.log(isConnected)
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
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
        <View>
          <Text>This app will allow you to see the forecast for a specific city. Enjoy it.</Text>
        </View>
        <View>
          <TextInput style={styles.input} onChangeText={(keyword) => this.setState({ keyword })} placeholder='Search by city...' />
        </View>
        <View style={styles.sectionContainer}>
          <Button style={styles.button} onPress={() => { this.handlePress() }} title='Search' />
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
  },
  sectionContainer: {
    width: 100,
    height: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  input: {
    fontSize: 20,
    width: 200,
    paddingBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
