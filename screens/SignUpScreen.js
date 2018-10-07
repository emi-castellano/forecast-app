import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import PropTypes from 'prop-types';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up Screen</Text>
        <Button title="Have an account" onPress={() => { this.props.navigation.navigate('SignIn') }}></Button>
      </View>
    );
  }
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
  }
});
