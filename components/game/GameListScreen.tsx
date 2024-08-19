import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesRequest, toggleFavorite, Game } from "@/redux/gameSlice";
import { RootState } from "@/redux/store";
import GameCard from "./GameCard";

const GameListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { games, loading } = useSelector((state: RootState) => state.games);

  useEffect(() => {
    dispatch(fetchGamesRequest());
  }, [dispatch]);

  const handleFavoriteToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleDetailsPress = (game: Game) => {
    console.log("Gamee Details:", game);
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
        <Text>Game List</Text>
      </View>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  appBar: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameListScreen;
