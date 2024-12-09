// CountryInfo.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { BirdRecording } from './interface';
import Video from 'react-native-video';
import BirdSoundPlayer from './BirdSound';

interface Call {
  numRecordings: string,
  numSpecies: string,
  page: number,
  numPages: number,
  recordings: BirdRecording[]
}
const CountryInfo: React.FC = () => {
  const [birdData, setBirdData] = useState<BirdRecording[] | null>(null);

  useEffect(() => {
    console.log('Fetching data from API...');
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response: AxiosResponse = await axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala');
      if (response.status === 200) {
        setBirdData(response.data.recordings)
        console.log('Data fetched successfully!', response)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const renderBirdItem = ({ item }: { item: BirdRecording }) => (
    <View style={{ marginBottom: 20, marginTop: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
      {/* <Video source={{uri: item.file}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
      <Text style={{ flex: 1 }}>Familia: {item.gen}</Text>
      <Text style={{ flex: 1 }}>Nombre: {item.en}</Text>
      <Text style={{ flex: 1 }}>Descubridor: {item.rec}</Text>
      <Text style={{ flex: 1 }}>Localizacion: {item.loc}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {birdData ? (
        <FlatList
          data={birdData}
          renderItem={renderBirdItem}
          keyExtractor={(item) => item.id}
          stickyHeaderIndices={[0]} // Índice del elemento que quieres que sea el encabezado fijo
          ListHeaderComponent={<Text style={{ backgroundColor: 'lightgray', padding: 10, textAlign: 'center', fontSize: 50 }}>Aves de Guatemala</Text>}
        />
      ) : (
        <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default CountryInfo;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoPlayer: {
    width: 300,
    height: 200,
  },
});