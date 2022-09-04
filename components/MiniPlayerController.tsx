import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import {
  THRESHOLD,
  MIN_PLAYER_HEIGHT,
  WINDOW_WIDTH,
  ISongs,
} from './Constants';
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

type ControllerProps = {
  y: Animated.SharedValue<number>;
  songDetails: ISongs;
};

const MiniPlayerController: React.FC<ControllerProps> = ({
  y,
  songDetails,
}) => {
  const miniPlayerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [-THRESHOLD * 0.7, 0, THRESHOLD * 0.7],
        [0, 1, 1]
      ),
    };
  });

  const iconsProps = { size: 16, color: '#ffffff' };

  return (
    <Animated.View style={[styles.container, miniPlayerStyle]}>
      <View style={styles.wrapper}>
        <View>
          <View>
            <Text style={styles.title}>{songDetails.title}</Text>
          </View>
          <View>
            <Text style={styles.author}>{songDetails.artist}</Text>
          </View>
        </View>
        <View style={styles.controllers}>
          <FontAwesome5 name="fast-backward" {...iconsProps} />
          <Ionicons name="play" {...iconsProps} />
          <FontAwesome5 name="fast-forward" {...iconsProps} />
          <MaterialCommunityIcons
            name="playlist-music-outline"
            {...{ iconsProps, size: 20 }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: MIN_PLAYER_HEIGHT * 1.05,
    width: WINDOW_WIDTH,
    right: 0,
    bottom: 0,
    paddingBottom: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25,
    height: '100%',
    width: '85%',
  },
  title: {
    fontSize: 15.5,
    fontWeight: '500',
    color: 'rgba(256,256,256,0.8)',
  },
  author: {
    fontSize: 10.5,
    marginTop: -2,
    color: 'rgba(256,256,256,0.8)',
  },
  controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
});

export default MiniPlayerController;
