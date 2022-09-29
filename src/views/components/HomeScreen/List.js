import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import Item from './Item';
const List = ({data}) => {
  return (
    <FlatList
      initialNumToRender={4}
      data={data}
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
            used={item.used}
          />
        </TouchableHighlight>
      )}
    />
  );
};
export default List;
