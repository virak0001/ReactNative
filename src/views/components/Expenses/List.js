import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import expense from '../../../../expenses.json';
import Item from './Item';
const List = () => {
  return (
    <FlatList
      initialNumToRender={4}
      data={expense}
      renderItem={({item, separators}) => (
        <TouchableHighlight
          key={item.id}
          // onPress={() => this._onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            expensed={item.expensed}
          />
        </TouchableHighlight>
      )}
    />
  );
};
export default List;
