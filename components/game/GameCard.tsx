import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface GameCardProps {
  title: string;
  icon: string;
  rating: number;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onDetailsPress: () => void; 
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  icon,
  rating,
  isFavorite,
  onFavoriteToggle,
  onDetailsPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}/5</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={onDetailsPress} style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>See Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onFavoriteToggle}>
            <FontAwesome
              name={isFavorite ? "heart" : "heart-o"}
              size={24}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 2,
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 10,
    flex: 1, 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    marginTop: 4,
  },
  actions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
  },
  detailsButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#fff",
  },
});

export default GameCard;
