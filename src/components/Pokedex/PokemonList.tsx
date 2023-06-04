import {
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";

import PokemonCard from "./PokemonCard";
import { PokemonCustom } from "../../types";

export default function PokemonList({
  pokemons,
  loadMorePokemons,
  isNext,
}: {
  pokemons: PokemonCustom[];
  loadMorePokemons?: () => void;
  isNext: boolean;
}) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => pokemon.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={() => isNext && loadMorePokemons && loadMorePokemons()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  );
}
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "ios" ? 0 : 30,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});