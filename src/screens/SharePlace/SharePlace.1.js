import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "./src/store/actions/index";

class SharePlaceScreen extends Component {
  onPlaceAdded = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        {/* <PlaceInput onPlaceAdded={this.onPlaceAdded}/> */}
        <Text> test</Text>
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);