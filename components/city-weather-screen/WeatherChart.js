import React from 'react';
import { StyleSheet, View, ScrollView, Button, Text, Dimensions, Picker } from 'react-native';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class WeatherChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataTempCelsius: this.props.data.list.map((item) => (item.main.temp)),
            dataTempFahrenheit: this.props.data.list.map((item) => (item.main.temp - 32) * 5 / 9),
            dataHum: this.props.data.list.map((item) => (item.main.humidity)),
            dataPress: this.props.data.list.map((item) => (item.main.pressure)),
            selectedValue: 'temp',
            unit: 'Celsius',
            xAxis: (this.props.data.cod !== '404') ? this.props.data.list.map((item) => item.dt_txt) : [],
            city: (this.props.data.cod !== '404') ? this.props.data.city.name : ''
        }
    }

    getData = () => {
        switch (this.state.selectedValue) {
            case 'temp':
                // Is fahrenheit
                if (this.state.unit !== 'Celsius') {
                    return this.state.dataTempFahrenheit
                }
                return this.state.dataTempCelsius
            break;
            case 'hum':
                return this.state.dataHum
            break;
            case 'press':
                return this.state.dataPress
            break;
        }
    }

    changeTempUnit = (itemValue) => {
        this.setState({ unit: itemValue });
    }

    render() {
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }

        if (this.props.data.cod !== '404') {
            return (
                <ScrollView style={styles.container}>
                    <View>
                        <Text style={styles.title}>This is the forecast for { this.state.city }</Text>
                    </View>
                    <Text>Pick the value to show:</Text>
                    <View style={styles.buttonsContainer}>
                        <Button title="Temperature" onPress={() => { this.setState({ selectedValue: 'temp' }) }} />
                        <Button title="Humidity" onPress={() => { this.setState({ selectedValue: 'hum' }) }} />
                        <Button title="Pressure" onPress={() => { this.setState({ selectedValue: 'press' }) }} />
                    </View>
                    {this.state.selectedValue === 'temp' &&
                        <View>
                            <Text>Select the temp unit:</Text>
                            <Picker
                                selectedValue={this.state.unit}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => this.changeTempUnit(itemValue)}>
                                <Picker.Item label="Celsius" value="Celsius" />
                                <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                            </Picker>
                        </View>
                    }
                    <ScrollView horizontal={true} style={styles.chartContainer}>
                        <YAxis
                            data={this.getData()}
                            style={styles.axis}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                        />
                        <View style={{ flex: 1, width: this.state.xAxis.length * 50 }}>
                            <LineChart
                                style={{ flex: 1 }}
                                data={this.getData()}
                                contentInset={verticalContentInset}
                                svg={{ stroke: 'rgb(255, 0, 0)' }}
                            >
                                <Grid />
                            </LineChart>
                            <XAxis
                                style={styles.axis}
                                data={this.state.xAxis}
                                formatLabel={(value, index) => this.state.xAxis[index].split(' ')[1]}
                                contentInset={{ left: 20, right: 10 }}
                                svg={axesSvg}
                            />
                        </View>
                    </ScrollView>
                </ScrollView>
            )
        } else {
            return (
                <View>
                    <Text>We didn't find information about your search.</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    chartContainer: {
        flex: 1,
        height: 200,
        flexDirection: 'row'
    },
    axis: {
         marginBottom: 30
    },
    picker: {
        width: 150,
        height: 50
    },
    buttonsContainer: {
        marginTop: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});