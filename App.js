import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '0e56c5109973ad4a6f0ba36c2b4311b6';

// 위치정보 > 날씨정보 > isLoaded = true
export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude,position.coords.longitude)
      },
      error=> {
        this.setState({
          error: error
        })
      }
    );
  }

  _getWeather = (lat,lon) => {
    console.log(lat,lon);

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  };

  render() {
    const { isLoaded, error, temperature,name } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={false} barStyle="light-content" />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.infoText}>made by jieun</Text>
            <Text style={styles.loadingText}>Getting the weather !</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 30
  },
  loading: {
    flex: 1,
    backgroundColor: 'rgb(47,117,160)',
    justifyContent: 'flex-end',
    paddingLeft: 30
  },
  infoText: {
    fontSize: 24,
    fontWeight: '100',
    marginBottom: 3,
    color: 'white'
  },
  loadingText: {
    fontSize: 35,
    marginBottom: 115,
    color: 'white',
    fontWeight: 'bold'
  }
});