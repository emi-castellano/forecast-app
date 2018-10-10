import React from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  NetInfo,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';

import PropTypes from 'prop-types';
import { windowWidth } from '../constants/Layout'
import { defaultColor, whiteColor } from '../constants/Colors'

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
    //console.log(isConnected)
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.text}>This app will allow you to see the forecast for a specific city. Enjoy it.</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholderTextColor={'#fff'} style={styles.input} onChangeText={(keyword) => this.setState({ keyword })} placeholder='Search by city...' />
        </View>
        <View>
          <TouchableHighlight style={styles.button} onPress={this.handlePress}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableHighlight>
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
    backgroundColor: defaultColor,
    paddingLeft: 20,
    paddingRight: 20
  },
  form: {
    flex: 1,
    justifyContent: 'space-between'
  }, 
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: whiteColor
  },
  input: {
    fontSize: 20,
    width: windowWidth - 40,
    paddingBottom: 10,
    color: whiteColor
  },
  text: {
    color: whiteColor,
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: whiteColor,
    width: 200,
    padding: 10,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 20
  }
});
