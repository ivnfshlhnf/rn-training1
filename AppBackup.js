import React, { Component } from "react";
import { StyleSheet, View} from "react-native";

import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import { addPlace, deletePlace, deletePlaceModal, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {
  onPlaceAdded = placeName => {
    this.props.onAddPlace(placeName);
  };

  onPlaceDeletedModalHandler = () => {
    this.props.onDeletePlaceModal();
  };

  onPlaceSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  onPlaceDeletedHandler = key => {
    this.props.onDeletePlace(key);
  };

  onModalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.onPlaceDeletedModalHandler}
          onModalClosed={this.onModalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
        <PlaceList 
          places={this.props.places} 
          onItemDeleted={this.onPlaceDeletedHandler}
          onItemSelected={this.onPlaceSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    onDeletePlaceModal: () => dispatch(deletePlaceModal()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);