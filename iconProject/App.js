/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Card from './components/card';




export default class App extends Component {
    state = {
        cardsInfo: [
            {id:1, info: "onlinePlayer", value: 0, awesomeIcon: ['far', 'smile']},
            {id:2, info: "topup", value: 0, awesomeIcon: ['fas', 'dollar-sign']},
            {id:3, info: "withdrawal", value: 0, awesomeIcon: ['fas', 'dollar-sign']},
            {id:4, info: "bet", value: 0, awesomeIcon: ['far', 'money-bill-alt']},
            {id:5, info: "newPlayer", value: 0, awesomeIcon: ['fas', 'user-plus']},
        ]
            }

  render() {
    return (
        <ScrollView>
           {this.state.cardsInfo.map(c =>
               <Card
                   key = {c.id}
                   info = {c.info}
                   value = {c.value}
                   awesomeIcon = {c.awesomeIcon}
               />
           )}

        </ScrollView>
    );
  }
}



