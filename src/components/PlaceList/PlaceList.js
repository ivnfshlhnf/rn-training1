import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
    return (
      <FlatList 
        style={styles.listContainer}
        data={props.places}
        renderItem= {(i) => (
          <ListItem 
            key={i.item.key}
            placeName={i.item.name} 
            placeImage={i.item.imgUrl}
            onItemPressed={() => props.onItemDeleted(i.item.key)}
            onItemLongPressed={() => props.onItemSelected(i.item.key)}/>
        )}
      />
    )
};

const styles = StyleSheet.create ({
  listContainer: {
    width: "100%"
  }
})

export default placeList;