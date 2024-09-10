import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const ImageList = ({ images }) => {
  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100, // Ajusta el tamaño según tus necesidades
    height: 100,
    margin: 10,
  },
});

export default ImageList;
