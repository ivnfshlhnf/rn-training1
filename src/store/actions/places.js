import { ADD_PLACE, DELETE_PLACE, DELETE_PLACE_SCREEN, SELECT_PLACE, DESELECT_PLACE } from "./actionTypes";
import { bindActionCreators } from "redux";


export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};

export const deletePlaceScreen = (key) => {
  return {
    type: DELETE_PLACE_SCREEN,
    placeKey: bindActionCreators.placeKey
  };
};

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};