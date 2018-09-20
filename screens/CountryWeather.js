import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { getWeatherByCountry } from '../services/ApiService';

export default class CountryWeathersScreen extends React.Component {
    static navigationOptions = {
        title: 'Weather',
    };
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.state = {
            country: navigation.getParam('country', 'No country'),
            isLoading: true,
            data: {}
        }
    }

    componentDidMount() {
        getWeatherByCountry(this.state.country)
            .then((res) => {
                this.setState({data: res, isLoading: false});
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ScrollView style={styles.container}>
                    <Text>Loading...</Text>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView style={styles.container}>
                    <Text>Clima pa + {this.state.country}</Text>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});