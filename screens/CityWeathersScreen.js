import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import WeatherChart from '../components/city-weather-screen/WeatherChart';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFavorite, removeFav } from '../actions';

import { FORECAST_FETCH } from '../actions/types'

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
            //isInFav: (this.props.favState.favorites.find((item) => item === param)) !== undefined ? true : false
        }
    }

    componentDidMount() {
        this.props.onFetchForecast(this.state.city)
    }

    /*favoriteAction = (action) => {
        if (action === 'add') {
            this.props.addFavorite(this.state.city);
            this.setState({ isInFav: true })
        } else {
            this.props.removeFav(this.state.city);
            this.setState({ isInFav: false })
        }
    }*/

    render() {
        if (this.props.fetchState.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>Fetching data...</Text>
                </View>
            )
        } else {
            if (this.props.fetchState.forecast) {
                return (
                    <View style={styles.container}>
                        <ScrollView>
                            <WeatherChart data={this.props.fetchState.forecast} />

                        </ScrollView>
                    </View >
                )
            } else {
                return (
                    <Text>An error has ocurred while fetching data.</Text>
                )
            }
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchForecast: async (city) => {
            return dispatch({ type: FORECAST_FETCH, payload: city })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        fetchState: state.dataForecast
    }
}

CityWeathersScreen.propTypes = {
    /*addFavorite: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    favState: PropTypes.object.isRequired*/
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeathersScreen)

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