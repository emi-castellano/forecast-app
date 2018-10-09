import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { SIGN_UP_REQUEST } from '../actions/types'

import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { defaultColor, whiteColor } from '../constants/Colors'
import { windowWidth } from '../constants/Layout'
class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      fullname: ''
    }
  }

  signUpPress = () => {
    this.props.onSignUp(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Complete the form</Text>
        <View>
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(fullname) => this.setState({ fullname })} placeholder='Full name' />
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(username) => this.setState({ username })} placeholder='Username' />
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(password) => this.setState({ password })} placeholder='Password' />
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(email) => this.setState({ email })} placeholder='Email' />
        </View>
        <TouchableHighlight style={styles.signUpButton} onPress={this.signUpPress}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableHighlight>
        <Text style={styles.haveAccount} onPress={() => { this.props.navigation.navigate('SignIn') }}>Already have an account.</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: async (credentials) => {
      return dispatch({ type: SIGN_UP_REQUEST, payload: credentials })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: defaultColor
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    color: whiteColor
  },  
  signUpButton: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: whiteColor,
    width: 200,
    padding: 10,
    borderRadius: 50
  },
  signUpButtonText: {
    fontSize: 18
  },
  input: {
    fontSize: 20,
    width: windowWidth - 30,
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: whiteColor
  },
  haveAccount: {
    color: whiteColor,
    marginTop: 30,
    fontSize: 17
  }
});
