import React, { Component } from "react";
import { View, Text, Button, Modal, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

import Icon from 'react-native-vector-icons/Ionicons'


class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop()
  }
  closeScreenhandler = () => {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.imgUrl} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name} </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.deleteButton} onPress={this.placeDeletedHandler}>
            <Text>Delete</Text>
            <Icon size={30} name="ios-trash" color="red" />
          </TouchableOpacity>
          <Button title="Close" onPress={this.closeScreenhandler} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    alignItems: "center"
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center"
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);