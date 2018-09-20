import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import WeatherChart from '../components/city-weather-screen/WeatherChart';
import { Icon } from 'expo';

import { connect } from 'react-redux';
import { addFavorite, removeFav } from '../actions';

import { getWeatherByCountry } from '../services/ApiService';

const mydata =
{
    "cod": "200",
    "message": 0.003,
    "cnt": 39,
    "list": [
        {
            "dt": 1537412400,
            "main": {
                "temp": 12.34,
                "temp_min": 12.34,
                "temp_max": 13.32,
                "pressure": 1027.34,
                "sea_level": 1029.53,
                "grnd_level": 1027.34,
                "humidity": 91,
                "temp_kf": -0.99
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.27,
                "deg": 250.503
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-20 03:00:00"
        },
        {
            "dt": 1537423200,
            "main": {
                "temp": 11.51,
                "temp_min": 11.51,
                "temp_max": 12.25,
                "pressure": 1027.7,
                "sea_level": 1029.92,
                "grnd_level": 1027.7,
                "humidity": 90,
                "temp_kf": -0.74
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 3.45,
                "deg": 277.502
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-20 06:00:00"
        },
        {
            "dt": 1537434000,
            "main": {
                "temp": 11.3,
                "temp_min": 11.3,
                "temp_max": 11.79,
                "pressure": 1028.03,
                "sea_level": 1030.29,
                "grnd_level": 1028.03,
                "humidity": 91,
                "temp_kf": -0.49
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 2.46,
                "deg": 300.513
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-20 09:00:00"
        },
        {
            "dt": 1537444800,
            "main": {
                "temp": 14.28,
                "temp_min": 14.28,
                "temp_max": 14.53,
                "pressure": 1029.18,
                "sea_level": 1031.47,
                "grnd_level": 1029.18,
                "humidity": 97,
                "temp_kf": -0.25
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 2.71,
                "deg": 324.5
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-20 12:00:00"
        },
        {
            "dt": 1537455600,
            "main": {
                "temp": 17.1,
                "temp_min": 17.1,
                "temp_max": 17.1,
                "pressure": 1029.14,
                "sea_level": 1031.4,
                "grnd_level": 1029.14,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 2.32,
                "deg": 331.501
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-20 15:00:00"
        },
        {
            "dt": 1537466400,
            "main": {
                "temp": 18.49,
                "temp_min": 18.49,
                "temp_max": 18.49,
                "pressure": 1027.12,
                "sea_level": 1029.38,
                "grnd_level": 1027.12,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.67,
                "deg": 348.008
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-20 18:00:00"
        },
        {
            "dt": 1537477200,
            "main": {
                "temp": 18.09,
                "temp_min": 18.09,
                "temp_max": 18.09,
                "pressure": 1026.68,
                "sea_level": 1028.99,
                "grnd_level": 1026.68,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 2.51,
                "deg": 20.0032
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-20 21:00:00"
        },
        {
            "dt": 1537488000,
            "main": {
                "temp": 15.28,
                "temp_min": 15.28,
                "temp_max": 15.28,
                "pressure": 1027.03,
                "sea_level": 1029.36,
                "grnd_level": 1027.03,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.35,
                "deg": 31.0005
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-21 00:00:00"
        },
        {
            "dt": 1537498800,
            "main": {
                "temp": 13.34,
                "temp_min": 13.34,
                "temp_max": 13.34,
                "pressure": 1027.56,
                "sea_level": 1029.78,
                "grnd_level": 1027.56,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.97,
                "deg": 353.002
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-21 03:00:00"
        },
        {
            "dt": 1537509600,
            "main": {
                "temp": 12.66,
                "temp_min": 12.66,
                "temp_max": 12.66,
                "pressure": 1026.43,
                "sea_level": 1028.67,
                "grnd_level": 1026.43,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 5.6,
                "deg": 2.00455
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-21 06:00:00"
        },
        {
            "dt": 1537520400,
            "main": {
                "temp": 11.82,
                "temp_min": 11.82,
                "temp_max": 11.82,
                "pressure": 1026.16,
                "sea_level": 1028.32,
                "grnd_level": 1026.16,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.46,
                "deg": 358.005
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-21 09:00:00"
        },
        {
            "dt": 1537531200,
            "main": {
                "temp": 14.04,
                "temp_min": 14.04,
                "temp_max": 14.04,
                "pressure": 1026.26,
                "sea_level": 1028.45,
                "grnd_level": 1026.26,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.82,
                "deg": 350.501
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-21 12:00:00"
        },
        {
            "dt": 1537542000,
            "main": {
                "temp": 19.37,
                "temp_min": 19.37,
                "temp_max": 19.37,
                "pressure": 1025.33,
                "sea_level": 1027.5,
                "grnd_level": 1025.33,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 6.61,
                "deg": 332.001
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-21 15:00:00"
        },
        {
            "dt": 1537552800,
            "main": {
                "temp": 22.29,
                "temp_min": 22.29,
                "temp_max": 22.29,
                "pressure": 1023.24,
                "sea_level": 1025.51,
                "grnd_level": 1023.24,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 5.86,
                "deg": 298.001
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-21 18:00:00"
        },
        {
            "dt": 1537563600,
            "main": {
                "temp": 20.87,
                "temp_min": 20.87,
                "temp_max": 20.87,
                "pressure": 1023.13,
                "sea_level": 1025.23,
                "grnd_level": 1023.13,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.86,
                "deg": 269.5
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-21 21:00:00"
        },
        {
            "dt": 1537574400,
            "main": {
                "temp": 17.42,
                "temp_min": 17.42,
                "temp_max": 17.42,
                "pressure": 1023.7,
                "sea_level": 1025.93,
                "grnd_level": 1023.7,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.76,
                "deg": 270.5
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-22 00:00:00"
        },
        {
            "dt": 1537585200,
            "main": {
                "temp": 15,
                "temp_min": 15,
                "temp_max": 15,
                "pressure": 1024.31,
                "sea_level": 1026.4,
                "grnd_level": 1024.31,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.56,
                "deg": 168.503
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-22 03:00:00"
        },
        {
            "dt": 1537596000,
            "main": {
                "temp": 14.42,
                "temp_min": 14.42,
                "temp_max": 14.42,
                "pressure": 1023.27,
                "sea_level": 1025.5,
                "grnd_level": 1023.27,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.46,
                "deg": 105
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-22 06:00:00"
        },
        {
            "dt": 1537606800,
            "main": {
                "temp": 14.17,
                "temp_min": 14.17,
                "temp_max": 14.17,
                "pressure": 1022.68,
                "sea_level": 1024.92,
                "grnd_level": 1022.68,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.92,
                "deg": 72.5018
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-22 09:00:00"
        },
        {
            "dt": 1537617600,
            "main": {
                "temp": 17.59,
                "temp_min": 17.59,
                "temp_max": 17.59,
                "pressure": 1022.37,
                "sea_level": 1024.61,
                "grnd_level": 1022.37,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.47,
                "deg": 28.002
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-22 12:00:00"
        },
        {
            "dt": 1537628400,
            "main": {
                "temp": 23.36,
                "temp_min": 23.36,
                "temp_max": 23.36,
                "pressure": 1020.72,
                "sea_level": 1022.84,
                "grnd_level": 1020.72,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 5.91,
                "deg": 6.004
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-22 15:00:00"
        },
        {
            "dt": 1537639200,
            "main": {
                "temp": 25.73,
                "temp_min": 25.73,
                "temp_max": 25.73,
                "pressure": 1015.92,
                "sea_level": 1018.16,
                "grnd_level": 1015.92,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 8.36,
                "deg": 344.001
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-22 18:00:00"
        },
        {
            "dt": 1537650000,
            "main": {
                "temp": 25.45,
                "temp_min": 25.45,
                "temp_max": 25.45,
                "pressure": 1013.96,
                "sea_level": 1016.29,
                "grnd_level": 1013.96,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 7.62,
                "deg": 326.002
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-22 21:00:00"
        },
        {
            "dt": 1537660800,
            "main": {
                "temp": 18.38,
                "temp_min": 18.38,
                "temp_max": 18.38,
                "pressure": 1017.67,
                "sea_level": 1019.65,
                "grnd_level": 1017.67,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 6.56,
                "deg": 211.5
            },
            "rain": {
                "3h": 0.135
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-23 00:00:00"
        },
        {
            "dt": 1537671600,
            "main": {
                "temp": 17.32,
                "temp_min": 17.32,
                "temp_max": 17.32,
                "pressure": 1018.5,
                "sea_level": 1020.85,
                "grnd_level": 1018.5,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 0.7,
                "deg": 235.001
            },
            "rain": {
                "3h": 13.42
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-23 03:00:00"
        },
        {
            "dt": 1537682400,
            "main": {
                "temp": 16.9,
                "temp_min": 16.9,
                "temp_max": 16.9,
                "pressure": 1019.43,
                "sea_level": 1021.58,
                "grnd_level": 1019.43,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 2.86,
                "deg": 347.003
            },
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-23 06:00:00"
        },
        {
            "dt": 1537693200,
            "main": {
                "temp": 16.36,
                "temp_min": 16.36,
                "temp_max": 16.36,
                "pressure": 1019.69,
                "sea_level": 1021.85,
                "grnd_level": 1019.69,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 1.62,
                "deg": 344.501
            },
            "rain": {
                "3h": 0.059999999999999
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-23 09:00:00"
        },
        {
            "dt": 1537704000,
            "main": {
                "temp": 16.98,
                "temp_min": 16.98,
                "temp_max": 16.98,
                "pressure": 1022.06,
                "sea_level": 1024.3,
                "grnd_level": 1022.06,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 1.62,
                "deg": 337.503
            },
            "rain": {
                "3h": 0.1
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-23 12:00:00"
        },
        {
            "dt": 1537714800,
            "main": {
                "temp": 18.62,
                "temp_min": 18.62,
                "temp_max": 18.62,
                "pressure": 1022.71,
                "sea_level": 1024.93,
                "grnd_level": 1022.71,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 0.86,
                "deg": 125.504
            },
            "rain": {
                "3h": 0.059999999999999
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-23 15:00:00"
        },
        {
            "dt": 1537725600,
            "main": {
                "temp": 19.53,
                "temp_min": 19.53,
                "temp_max": 19.53,
                "pressure": 1021.27,
                "sea_level": 1023.5,
                "grnd_level": 1021.27,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.57,
                "deg": 145.502
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-23 18:00:00"
        },
        {
            "dt": 1537736400,
            "main": {
                "temp": 17.47,
                "temp_min": 17.47,
                "temp_max": 17.47,
                "pressure": 1021.97,
                "sea_level": 1024.04,
                "grnd_level": 1021.97,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.55,
                "deg": 137.502
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-23 21:00:00"
        },
        {
            "dt": 1537747200,
            "main": {
                "temp": 15.56,
                "temp_min": 15.56,
                "temp_max": 15.56,
                "pressure": 1024.35,
                "sea_level": 1026.45,
                "grnd_level": 1024.35,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 5.81,
                "deg": 133.503
            },
            "rain": {
                "3h": 0.09
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-24 00:00:00"
        },
        {
            "dt": 1537758000,
            "main": {
                "temp": 14.67,
                "temp_min": 14.67,
                "temp_max": 14.67,
                "pressure": 1026.32,
                "sea_level": 1028.51,
                "grnd_level": 1026.32,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 6.56,
                "deg": 123
            },
            "rain": {
                "3h": 1.32
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-24 03:00:00"
        },
        {
            "dt": 1537768800,
            "main": {
                "temp": 14.18,
                "temp_min": 14.18,
                "temp_max": 14.18,
                "pressure": 1026.38,
                "sea_level": 1028.51,
                "grnd_level": 1026.38,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 6.66,
                "deg": 113.502
            },
            "rain": {
                "3h": 0.07
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-24 06:00:00"
        },
        {
            "dt": 1537779600,
            "main": {
                "temp": 13.51,
                "temp_min": 13.51,
                "temp_max": 13.51,
                "pressure": 1026.66,
                "sea_level": 1028.95,
                "grnd_level": 1026.66,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 6.72,
                "deg": 102.501
            },
            "rain": {

            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-09-24 09:00:00"
        },
        {
            "dt": 1537790400,
            "main": {
                "temp": 15.41,
                "temp_min": 15.41,
                "temp_max": 15.41,
                "pressure": 1027.99,
                "sea_level": 1030.17,
                "grnd_level": 1027.99,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 6.76,
                "deg": 100.504
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-24 12:00:00"
        },
        {
            "dt": 1537801200,
            "main": {
                "temp": 17.97,
                "temp_min": 17.97,
                "temp_max": 17.97,
                "pressure": 1028.84,
                "sea_level": 1031.11,
                "grnd_level": 1028.84,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 6.37,
                "deg": 104.504
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-24 15:00:00"
        },
        {
            "dt": 1537812000,
            "main": {
                "temp": 18.96,
                "temp_min": 18.96,
                "temp_max": 18.96,
                "pressure": 1028.82,
                "sea_level": 1031.14,
                "grnd_level": 1028.82,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 6.16,
                "deg": 108.502
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-24 18:00:00"
        },
        {
            "dt": 1537822800,
            "main": {
                "temp": 17.83,
                "temp_min": 17.83,
                "temp_max": 17.83,
                "pressure": 1029.44,
                "sea_level": 1031.71,
                "grnd_level": 1029.44,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 5.21,
                "deg": 118.503
            },
            "rain": {

            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-09-24 21:00:00"
        }
    ],
    "city": {
        "id": 3441575,
        "name": "Montevideo",
        "coord": {
            "lat": -34.8335,
            "lon": -56.1674
        },
        "country": "UY",
        "population": 1270737
    }
}

class CityWeathersScreen extends React.Component {
    static navigationOptions = {
        title: 'Weather',
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.state = {
            country: navigation.getParam('country', 'No country'),
            isLoading: false,
            data: {},
            isInFav: (this.props.favState.favorites.find((item) => item === mydata.city.name + ', ' + mydata.city.country)) ? true : false
        }
    }

    componentDidMount() {
        /*getWeatherByCountry(this.state.country)
            .then((res) => {
                this.setState({data: res, isLoading: false});
            });*/
    }

    favoriteAction = (action) => {
        if (action === 'add') {
            this.props.addFavorite(mydata.city.name + ', ' + mydata.city.country);
            this.setState({ isInFav: true })
        } else {
            console.log('remove');
            this.props.removeFav(mydata.city.name + ', ' + mydata.city.country);
            this.setState({ isInFav: false })
        }
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
                    <WeatherChart data={mydata} />
                    <Button 
                        title={(this.state.isInFav) ? 'Remove Favorite' : 'Add Favorite'} 
                        onPress={() => { (this.state.isInFav) ? this.favoriteAction('remove') : this.favoriteAction('add') }}
                    />
                </View>
            )
        }
    }
}

const mapStateToProps = ({ favState }) => ({ favState })

export default connect(mapStateToProps, { addFavorite, removeFav })(CityWeathersScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});