import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import StyleSheetFactory from './styleSheetFactory'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)


export default class Card extends Component {

  render() {

    return (

      <View style={StyleSheetFactory.getSheet(this.changeColor()).container}>
        <View style={StyleSheetFactory.getSheet(this.changeColor()).upperBox}>
            <View style={ styles.box }>
                <FontAwesomeIcon icon={ this.props.awesomeIcon } size={ 55 } style={ styles.icon }/>
                <View>
                  <Text style={ styles.upperData }>{this.formatValue()}</Text>
                  <Text style={ styles.upperData }>{this.changeChinese()}</Text>
                </View>
            </View>
        </View>

        <View>
            <View style={ styles.box }>
                <Text style={ StyleSheetFactory.getSheet(this.changeColor()).detail}>详细信息</Text>
                <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-right']} size={ 50 } style = {StyleSheetFactory.getSheet(this.changeColor()).detail}/>
            </View>
        </View>
      </View>


    );
  }
        changeChinese = () =>  {
          const {info} = this.props;
          let chinese = "";
            chinese += info === "onlinePlayer" ? "在线玩家" : "";
            chinese += info === "topup" ? "充值额度" : "";
            chinese += info === "withdrawal" ? "提款额" : "";
            chinese += info === "bet" ? "投注额" : "";
            chinese += info === "newPlayer" ? "新玩家" : "";
            return chinese;
        }

        changeColor = () =>  {
          const {info} = this.props;
          let color = "";
            color += info === "onlinePlayer" ? "#5cb85c" : "";
            color += info === "topup" ? "#2B6698" : "";
            color += info === "withdrawal" ? "#4B0082" : "";
            color += info === "bet" ? "#f39c12" : "";
            color += info === "newPlayer" ? "#d9534f" : "";
            return color;
        }

       formatValue() {
          const {value} = this.props;
          const {info} = this.props;
          if(info === "topup"){
              return value.toFixed(2);
          }else if(info === "withdrawal"){
              return value.toFixed(2);
          }else if(info === "bet"){
              return value.toFixed(2);
          }else{
              return value;
          }
       }

}

let styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  upperData: {
    color: '#fff',
    fontSize: 25,
    alignSelf: 'flex-end'
  },
});


