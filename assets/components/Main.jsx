import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import Movie from "./Movie";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Axios from "axios";

export default function Main() {
  const { width } = useWindowDimensions();
  const numberOfColumns = Math.floor(width / 170);
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    Keyboard.dismiss();
    const response = await Axios.get(`http://www.omdbapi.com/?s=${name}&apikey=93064b0b
    `);

    setMovies(response.data.Search);
  };

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.textInput}
          placeholder="Enter a movie name"
        ></TextInput>
        <ButtonLink title="Search" onPress={handleSearch} />
      </View>

      <View style={styles.movieList}>
        <FlatList
          numColumns={numberOfColumns}
          key={numberOfColumns}
          data={movies}
          renderItem={({ item }) => <Movie movie={item} />}
          keyExtractor={(item) => item.imdbID}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  textInput: {
    height: 40,
    width: 200,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  movieList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});
