import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ISongs } from './Constants';

interface SongProps {
  item: ISongs;
  getSongDetails: (obj: ISongs) => void;
}

const SongItem = ({ item, getSongDetails }: SongProps) => {
  const handleCoverColor = (item: ISongs) => getSongDetails({ ...item });

  return (
    <TouchableOpacity
      onPress={() => handleCoverColor(item)}
      style={{
        height: 75,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        source={item.thumbImage}
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          flex: 1,
          height: '100%',
          marginLeft: 19,
          paddingRight: 3,
          borderBottomWidth: 0.8,
          borderBottomColor: '#E6E7E7',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}>{item.title}</Text>
          <Text style={{ fontSize: 13, color: '#919291' }}>{item.artist}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={15} color="rgba(0,0,0,0.2)" />
      </View>
    </TouchableOpacity>
  );
};

export default SongItem;
