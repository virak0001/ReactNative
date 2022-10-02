import React from 'react';
import {Text, View} from 'react-native';
const Item = props => {
  return (
    <View className="flex flex-row px-10 mt-5 items-center justify-between">
      <View className="h-16 w-16 rounded-full bg-black" />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.price} budget</Text>
      </View>
      <View>
        <Text>{props.date}</Text>
        <Text>18 transactions</Text>
      </View>
    </View>
  );
};
export default Item;
