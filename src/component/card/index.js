import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Button } from '../../component';
import styles from './styles';

const Card = props => {

  const { data, onPress, menu, carts } = props

  return (
    <View style={ { paddingHorizontal: 10, paddingVertical: 10, } }>
      <FlatList
        data={ data }
        renderItem={ ( { item, index } ) => {
          // console.log( item );
          return (
            <View style={ styles.card }
              key={ index }
              item={ item }
            >
              <View style={ styles.content }>
                <Text style={ styles.text }>{ item.title }</Text>
                {/* <Text style={ styles.textDesc }>{ item.price }</Text> */ }
                {/* {
                  item.total === 0 ?

                    (
                      < Button
                        title='Add'
                        btnStyle={ styles.btnAdd }
                        onPress={ () => [
                          onPress( item.id, 'tambah' )
                          // , toggleCart( item )
                        ] }
                      />
                    ) : (
                      <View style={ { marginTop: 10, display: 'flex', flexDirection: 'row', width: 60 } }>
                        <TouchableOpacity
                          onPress={ () => onPress( item.id, 'kurang', item.total ) }>
                          <Text style={ { fontSize: 25 } }> - </Text>
                        </TouchableOpacity>
                        <Text style={ { fontSize: 25, paddingHorizontal: 15 } }>{ item.total }</Text>
                        <TouchableOpacity
                          onPress={ () => onPress( item.id, 'tambah', item.total ) }>
                          <Text style={ { fontSize: 25 } }> + </Text>
                        </TouchableOpacity>
                      </View>
                    )
                } */}
              </View>
              {/* <TouchableOpacity onPress={ () => toggleModal( item.pict ) }>
                <View style={ styles.imageWrapper }>
                  <View style={ styles.imageContent }>
                    <Image
                      style={ styles.img }
                      source={ {
                        uri: item.pict
                      } }
                    />
                  </View>
                </View>
              </TouchableOpacity> */}
            </View>
          )
        }
        }
        keyExtractor={ ( item ) => item.title }
      />
      {/* 
      <BottomSheet visible={ isModalVisible }>
        <View style={ {
          alignItems: "center",
        } }>
          <Button
            title="X"
            btnStyle={ styles.btnClose }
            onPress={ toggleModal } />
          <Image style={ {
            width: 350, height: 300, borderRadius: 10, resizeMode: 'stretch',
          } }
            source={ {
              uri: pict
            } } />
        </View>
      </BottomSheet> */}

    </View>
  );
};

export default Card;
