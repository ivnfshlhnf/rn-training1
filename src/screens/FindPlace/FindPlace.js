import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(places => {
      return places.key === key
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetail",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  }
  itemDeletedHandler = key => {
    this.props.onDeletePlace(key);
  }

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} onItemDeleted={this.itemDeletedHandler} />
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);