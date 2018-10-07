import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { LOCAL_IP } from 'react-native-dotenv'

import {
  SIGN_IN_REQUEST
} from '../actions/types'

import { connect } from 'react-redux'

import PropTypes from 'prop-types';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In'
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
        <Text>Sign In</Text>
        <View>
          <TextInput style={styles.input} onChangeText={(username) => this.setState({ username })} placeholder='Username' />
          <TextInput style={styles.input} onChangeText={(password) => this.setState({ password })} placeholder='Password' />
        </View>
        <Button title="Sign In" onPress={() => { this.signInPress() }}></Button>
        <Text onPress={() => { this.props.navigation.navigate('SignUp') }}>Sign Up</Text>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 20,
    width: 200,
    paddingBottom: 10
  }
});
