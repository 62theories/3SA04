import React, {Component}  from 'react';
import Forecast from './Forecast';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
export default class Weather extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 forecast: {
 main: '-', description: '-', temp: 0
 }
 }
 }
 render() {
 return (
 <View style={styles.container}>
 <ImageBackground source={require('../a.jpg')} style={styles.backdrop}>
 <View style={styles.tryflex}>
 <Text>Zip code is {this.props.zipCode}.</Text>
 </View>
 <Forecast {...this.state.forecast} />
 </ImageBackground>
 </View>
 );
 }
}


const styles = StyleSheet.create({
 container: { paddingTop: 25,},
 backdrop: { width: '100%', height: '100%'},
 tryflex: {flex: 1,flexDirection: 'column',justifyContent: 'flex-end',alignItems:'flex-start' }
});
