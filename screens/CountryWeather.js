import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import WeatherChart from '../components/WeatherChart';

import { getWeatherByCountry } from '../services/ApiService';

export default class CountryWeathersScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Weather',
    };
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.state = {
            country: navigation.getParam('country', 'No country'),
            isLoading: false,
            data: {}
        }
    }

    componentDidMount() {
        /*getWeatherByCountry(this.state.country)
            .then((res) => {
                this.setState({data: res, isLoading: false});
            });*/
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
                <View style={styles.container}>
                    <WeatherChart />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});