import React from "react";
import { View, Text, Button, Modal, Image, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'


const placeDetail = (props) => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.imgUrl}  style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name} </Text>
      </View>
    )
  }
  return (
    <Modal 
      onRequestClose={props.onModalClosed} 
      visible={props.selectedPlace !== null} 
      animationType="slide">
      <View style={styles.modalContainer}>
      {modalContent}
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <Icon size={30} name="ios-trash" color="red"/>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create ({
  modalContainer: {
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
  deleteButton: {
    alignItems: "center"
  }
})

export default placeDetail;