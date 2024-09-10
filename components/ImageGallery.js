import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageList from './ImageList'; // Asegúrate de importar el componente hijo

const ImageGallery = () => {
  const [images] = useState([
    'https://unsplash.com/es/fotos/codigos-de-programacion-GI1hwOGqGtE',

    
  ]);

  return (
    <View style={styles.container}>
      <ImageList images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
});

export default ImageGallery;
