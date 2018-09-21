import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import { connect } from 'react-redux'
import ListItem from '../components/favorites-screen/ListItem'

import PropTypes from 'prop-types';

class FavoritesScreen extends React.Component {

  static navigationOptions = {
    title: 'Favorites'
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.favState.favorites.length > 0) {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <FlatList
              data={this.props.favState.favorites}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) => {
                return <ListItem index={index} city={item}></ListItem>
              }}
            >
            </FlatList>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.containerNoFav}>
          <Text>You haven't added any city to your favorites.</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = ({ favState }) => ({ favState })

FavoritesScreen.propTypes = {
  favState: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(FavoritesScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerNoFav: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 1,
  }
});
