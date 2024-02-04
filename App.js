import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import React, {useState} from 'react';
import music_data from "./src/music-data.json";
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';



function App() {
  const renderSong = ({item}) => <SongCard song={item}>{item.title}</SongCard>

  const renderSeperator = () => <View style={styles.seperator}/>;

  const [list, setList] = useState(music_data);

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>  
        <FlatList 
                    keyExtractor={(item) => item.id}
                    data={music_data} 
                    renderItem={renderSong} 
                    ItemSeperatorComponent={renderSeperator}
        />
      </View>
     
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator: {
    borderWidth:1,
    borderColor: "#e0e0e0",
  }
});
