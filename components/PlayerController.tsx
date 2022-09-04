import React from 'react';
import { View, Text } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons';
import { ISongs, SCREEN_HEIGHT, THRESHOLD } from './Constants';
import PlayerHeader from './PlayerHeader';

type PlayerControllerProps = {
  y: Animated.SharedValue<number>;
  reset: (toValue: number) => void;
  songDetails: ISongs;
};

const PlayerController: React.FC<PlayerControllerProps> = ({
  y,
  reset,
  songDetails,
}) => {
  const playerContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [-THRESHOLD * 0.4, 0, THRESHOLD * 0.4],
        [1, 0, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      style={[{ backgroundColor: songDetails.color }, playerContainerStyle]}
    >
      <PlayerHeader reset={reset} />
      <View
        style={{
          alignItems: 'center',
          marginBottom: 200,
        }}
      >
        <View>
          <Text style={{ fontSize: 21 }}>{songDetails.title}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>{songDetails.artist}</Text>
        </View>
      </View>

      <View
        style={{
          height: SCREEN_HEIGHT * 0.15,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}
        >
          <MaterialCommunityIcons
            name="playlist-music-outline"
            size={24}
            color="#ffffff"
          />
          <Ionicons name="heart-outline" size={24} color="#ffffff" />
          <Ionicons name="add-outline" size={30} color="#ffffff" />
        </View>
        <View>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#ffffff50',
              borderRadius: 1,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: '50%',

              width: 18,
              height: 18,
              backgroundColor: 'white',
              borderRadius: 9,
              transform: [{ translateY: -9 }],
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}
        >
          <Ionicons name="md-shuffle" size={20} color="#ffffff" />
          <FontAwesome5 name="fast-backward" size={16} color="#ffffff" />
          <Ionicons name="play" size={30} color="#ffffff" />
          <FontAwesome5 name="fast-forward" size={16} color="#ffffff" />
          <Ionicons name="ios-repeat-outline" size={24} color="#ffffff" />
        </View>
      </View>
    </Animated.View>
  );
};

export default PlayerController;
