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
        try {
            //const userToken = await AsyncStorage.getItem('token')
            const userToken = false
            this.props.navigation.navigate(userToken ? 'SignedIn' : 'SignedOut')
        } catch (err) {
            this.props.navigation.navigate('SignedOut')
            console.log(err)
        }
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