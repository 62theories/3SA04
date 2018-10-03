import React, {Component}  from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
export default class Forecast extends React.Component {
 render() {
 return (
 <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-around'}}>
 <Text style={{fontSize: 40,textAlign :'center'}}>{this.props.main}</Text>
 <Text style={{fontSize: 20,textAlign :'center'}}>{this.props.description}</Text>
  <Text style={{fontSize: 30,textAlign :'center'}}>{this.props.temp}°C</Text>
 </View>
 );
 }
}
