import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { getCityImage } from '../../services/ImageService'

const { width, height } = Dimensions.get('window');

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl : 'http://www.fondear.org/infonautic/mar/El%20Cielo/Nubes_Color/nube01.jpg'
    };
  }

  /*componentWillMount(){
      getCityImage(this.props.city.name).then((req)=>{
        if(req.photos != undefined && req.photos[0].image.web != undefined){
          this.setState({imgUrl:req.photos[0].image.web});
        }
      }).catch(
        function(error) {
          console.error(error);
        }
      );;
  }*/

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{ this.props.city }</Text>
        </View>
      </ScrollView>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex:1,
    padding: 20,
    backgroundColor: '#fff',
    height: 70,
    width: width,
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});
