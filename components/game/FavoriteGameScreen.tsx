import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, Game } from '@/redux/gameSlice';
import { RootState } from '@/redux/store';
import GameCard from './GameCard';

const FavoritesScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { games, loading } = useSelector((state: RootState) => state.games);

  const favoriteGames = games.filter((game) => game.isFavorite);

  const handleFavoriteToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleDetailsPress = (game: Game) => {
    console.log('Game Detailssssss:', game);
  };

  const renderItem = ({ item }: { item: Game }) => (
    <GameCard
      title={item.title}
      icon={item.iconURL}
      rating={item.rating}
      isFavorite={item.isFavorite ?? false}
      onFavoriteToggle={() => handleFavoriteToggle(item.id)}
      onDetailsPress={() => handleDetailsPress(item)}
    />
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text >Favorite Games</Text>
      </View>
      {favoriteGames.length > 0 ? (
        <FlatList
          data={favoriteGames}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite games yet.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },

  list: {
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
