import React, {Component}  from 'react';
import Forecast from './Forecast';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  backgroundColor,
} from 'react-native';
export default class Weather extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 forecast: {
 main: 'main', description: 'description', temp: 0
 }
 }
 }

 fetchData = () => {
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=5cd833c34e967d68df44291f1f051132`)
 .then((response) => response.json())
 .then((json) => {
 this.setState(
 {
 forecast: {
 main: json.weather[0].main,
 description: json.weather[0].description,
 temp: json.main.temp
 }
 });
 })
 .catch((error) => {
 console.warn(error);
 });
 }

 componentDidMount = () => this.fetchData()

componentDidUpdate = (prevProps) => {
 if (prevProps.zipCode !== this.props.zipCode) {
 this.fetchData()
 }
 }

 render() {
 return (
 <View style={styles.container}>
  <ImageBackground source={require('../a.jpg')} style={styles.backdrop}>
    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center'}}>

      <View style={{paddingTop: 25}}>
       <Text style={{fontSize: 20,textAlign :'center'}}>Zip code is {this.props.zipCode}.</Text>
      </View>
      <Forecast {...this.state.forecast} />
    
    </View>
    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'center'}}>
    </View>
  </ImageBackground>
 </View>
 );
 }
}


const styles = StyleSheet.create({
 container: { paddingTop: 25},
 backdrop: { width: '100%', height: '100%'},
 tryflex: {flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems:'center'}
});
