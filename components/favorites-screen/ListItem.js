import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { removeFav } from '../../actions';

const { width } = Dimensions.get('window');

class ListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{ this.props.city }</Text>
          <Button color='red' title='Remove' onPress={() => { this.props.removeFav(this.props.city) }}/>
        </View>
      </View>    
    );
  }
}

const mapStateToProps = ({ favState }) => ({ favState })

ListItem.propTypes = {
  city: PropTypes.string.isRequired
}

export default connect(mapStateToProps, { removeFav })(ListItem)

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
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});
