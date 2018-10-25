import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image  } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity 
      onPress={props.onItemPressed}
      onLongPress={props.onItemLongPressed}>
        <View style={styles.listItem} >
            <Image source={props.placeImage} style={styles.itemImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    },
    itemImage: {
        marginRight: 10,
        width: 20,
        height: 20
    }
});

export default listItem;