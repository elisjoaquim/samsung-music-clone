import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { runOnUI } from 'react-native-reanimated';

interface PlayerHeaderProps {
  reset: (value: number) => void;
}

const PlayerHeader: React.FC<PlayerHeaderProps> = ({ reset }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 297,
      }}
    >
      <TouchableOpacity
        style={{ flexGrow: 2.7 }}
        onPress={() => runOnUI(reset)(0)}
      >
        <Entypo name="chevron-thin-down" size={24} color="black" />
      </TouchableOpacity>

      <View
        style={{
          // backgroundColor: 'blue',
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Ionicons name="md-volume-medium-outline" size={24} color="black" />
        <MaterialCommunityIcons
          name="motion-play-outline"
          size={24}
          color="black"
        />
        <MaterialIcons name="graphic-eq" size={24} color="black" />
        <Entypo name="dots-three-vertical" size={16} color="black" />
      </View>
    </View>
  );
};

export default PlayerHeader;
