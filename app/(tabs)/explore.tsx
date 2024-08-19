import FavoritesScreen from '@/components/game/FavoriteGameScreen';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <FavoritesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Favorites;
