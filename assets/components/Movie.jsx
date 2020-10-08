import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Movie = ({ movie }) => {
  const [showImage, setShowImage] = useState(false);
  const handlePress = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={styles.movie}>
      <TouchableOpacity onPress={handlePress}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.movieText}>
          {movie.Title}
        </Text>
        {showImage && (
          <Image
            source={{ uri: `${movie.Poster}` }}
            style={{ height: 400 }}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  movie: {
    backgroundColor: "slategray",

    borderColor: "black",
    borderWidth: 3,

    margin: 10,
    padding: 4,

    width: 150,
  },
  movieText: {
    color: "white",
    textAlign: "center",
  },
});

export default Movie;
