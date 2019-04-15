import React, {Component} from 'react';
import { StyleSheet } from "react-native";


export default class StyleSheetFactory {
  static getSheet(changeColor) {
    return StyleSheet.create({
      upperBox: {
        backgroundColor: changeColor,
      },
      container: {
        borderWidth: 2,
        borderColor: changeColor,
        margin: 10,
      },
      detail: {
        fontSize: 25,
        color: changeColor,
      }
    })
  }
}

