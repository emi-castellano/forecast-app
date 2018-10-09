import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {
  SIGN_IN_REQUEST
} from '../actions/types'

import { connect } from 'react-redux'
import { defaultColor, whiteColor } from '../constants/Colors'
import { windowWidth, windowHeight } from '../constants/Layout'

import PropTypes from 'prop-types';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: null
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  signInPress = () => {
    this.props.onSignIn(this.state)
  }

  componentDidUpdate (prevPros, prevState) {
  
    if (this.props.authState.authenticated) {
      this.props.navigation.navigate('SignedIn');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Please, log in first:</Text>
        <View>
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(username) => this.setState({ username })} placeholder='Username' />
          <TextInput placeholderTextColor={whiteColor} style={styles.input} onChangeText={(password) => this.setState({ password })} placeholder='Password' />
        </View>
        <TouchableHighlight style={styles.signInButton} onPress={this.signInPress}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableHighlight>
        <Text style={styles.haveAccount} onPress={() => { this.props.navigation.navigate('SignUp') }}>Already have an account.</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: async (credentials) => {
      return dispatch({ type: SIGN_IN_REQUEST, payload: credentials })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: defaultColor
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    color: whiteColor
  },  
  signInButton: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: whiteColor,
    width: 200,
    padding: 10,
    borderRadius: 50
  },
  signInButtonText: {
    fontSize: 20
  },
  input: {
    fontSize: 20,
    width: windowWidth - 30,
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    color: whiteColor,
    borderBottomColor: whiteColor
  },
  haveAccount: {
    color: whiteColor,
    marginTop: 30,
    fontSize: 17
  }
});
