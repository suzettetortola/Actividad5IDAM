import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Sound from 'react-native-sound';

const BirdSoundPlayer = ({ soundUrl }: {soundUrl: string}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let sound: any;

  const playSound = () => {
    if (!isPlaying) {
      sound = new Sound(soundUrl, '', (error) => {
        if (error) {
          console.log('Error al cargar el archivo de sonido:', error);
          return;
        }
        sound.play((success: any) => {
          if (success) {
            console.log('Reproducción del sonido completada');
          } else {
            console.log('Error al reproducir el sonido');
          }
        });
      });
      setIsPlaying(true);
    } else {
      sound.stop();
      setIsPlaying(false);
    }
  };

  return (
    <View>
      <Button
        title={isPlaying ? 'Detener Sonido' : 'Reproducir Sonido'}
        onPress={playSound}
      />
    </View>
  );
};

export default BirdSoundPlayer;
