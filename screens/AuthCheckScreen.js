import React from 'react';
import { StatusBar, StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';

export default class AuthCheckScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'SignedIn' : 'SignedOut');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});