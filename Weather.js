import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types'


const weatherCases = {
	Rain: {
		colors: [ '#00C6FB', '#005BEA' ],
		title: 'Raining like a MF',
		subtitle: 'For more info look outside',
		icon: 'weather-rainy'
	},
	Clear: {
		colors: [ '#E06656', '#FC302A' ],
		title: 'Sunny as fuck',
		subtitle: 'Go get out',
		icon: 'weather-sunny'
	},
	Thunderstorm: {
		colors: [ '#00ECBC', '#007ADF' ],
		title: 'Thunderstorm in the house',
		subtitle: 'Actually, outside of the house',
		icon: 'weather-lightning'
	},
	Clouds: {
		colors: [ '#D7D2CC', '#304352' ],
		title: 'Clouds',
		subtitle: 'I know, fucking boring',
		icon: 'weather-cloudy'
	},
	Snow: {
		colors: [ '#7DE2FC', '#B9B6E5' ],
		title: 'Cold as balls',
		subtitle: 'Do you want to build a snowman? Fuck no.',
		icon: 'weather-snowy'
	},
	Drizzle: {
		colors: [ '#89F7FE', '#66A6FF' ],
		title: 'Drizzle',
		subtitle: 'Is like rain',
		icon: 'weather-hail'
	},
	Mist: {
		colors: [ '#EABFB6', '#DABEDF' ],
		title: 'Mist',
		subtitle: 'Its like you have no glasses on',
		icon: 'weather-fog'
	},
	Haze: {
		colors: [ '#0F71D0', '#1B8370' ],
		title: 'Haze',
		subtitle: 'Dont know what that is',
		icon: 'weather-hail'
	}
}

function Weather({ weatherName, temp }) {
	return(
		<LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
			<View style={styles.upperView}>
				<MaterialCommunityIcons color='white' size={133} name={weatherCases[weatherName].icon} />
				<Text style={styles.tempView}>{temp}ºC</Text>
			</View>
			<View style={styles.lowerView}>
				<Text style={styles.title}>{weatherCases[weatherName].title}</Text>
				<Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	weatherName: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upperView: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		marginTop: 100
	},
	tempView: {
		fontSize: 48,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	lowerView: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 30
	},
	title: {
		fontSize: 38,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		fontWeight: '300'
	},
	subtitle: {
		fontSize: 24,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 100,
		fontWeight: '100'
	}
});
