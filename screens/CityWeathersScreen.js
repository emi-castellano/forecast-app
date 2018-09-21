import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import WeatherChart from '../components/city-weather-screen/WeatherChart';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFavorite, removeFav } from '../actions';

import { getWeatherByCity } from '../services/ApiService';

class CityWeathersScreen extends React.Component {
    static navigationOptions = {
        title: 'Weather details',
    };

    constructor(props) {
        super(props);

        const param = this.props.navigation.getParam('city', 'No city');

        this.state = {
            city: param,
            isLoading: true,
            data: {},
            isInFav: (this.props.favState.favorites.find((item) => item === param)) !== undefined ? true : false
        }
    }

    componentDidMount() {
        getWeatherByCity(this.state.city)
            .then((res) => {
                this.setState({ data: res, isLoading: false });
            });
    }

    favoriteAction = (action) => {
        if (action === 'add') {
            this.props.addFavorite(this.state.city);
            this.setState({ isInFav: true })
        } else {
            this.props.removeFav(this.state.city);
            this.setState({ isInFav: false })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            );
        } else {
            if (this.state.data.cod === '200') {
                return (
                    <View style={styles.container}>
                        <ScrollView>
                            <WeatherChart data={this.state.data} />
                            <View style={styles.buttonContainer}>
                                <Button
                                    color={(this.state.isInFav) ? 'red' : 'blue'}
                                    style={{ width: 100 }}
                                    title={(this.state.isInFav) ? 'Remove Favorite' : 'Add Favorite'}
                                    onPress={() => { (this.state.isInFav) ? this.favoriteAction('remove') : this.favoriteAction('add') }}
                                />
                            </View>
                        </ScrollView>
                    </View >
                )
            } else {
                return (
                    <View style={styles.container}>
                        <Text>No results found for {this.state.country}</Text>
                    </View>
                )
            }
        }
    }
}

const mapStateToProps = ({ favState }) => ({ favState })

CityWeathersScreen.propTypes = {
    addFavorite: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    favState: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { addFavorite, removeFav })(CityWeathersScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});