import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
  MIN_PLAYER_HEIGHT,
  MIN_PLAYER_RADIUS,
  THRESHOLD,
  MIN_DISTANCE,
  INPUT_RANGE,
  PLAYER_HEIGHT,
  ISongs,
  MUSICS,
} from '../components/Constants';

import Header from '../components/Header';
import MiniPlayerController from '../components/MiniPlayerController';
import PlayerController from '../components/PlayerController';
import AlbumCover from '../components/AlbumCover';
import SongList from '../components/SongList';

type Context = {
  y: number;
  isGoingUp: boolean;
  latestY: number;
};

const Player = () => {
  const y = useSharedValue(0);
  const [isPlayerOpen, setIsPlayerOpen] = React.useState(false);
  const [songDetails, setSongsDetails] = React.useState<ISongs>(MUSICS[0]);

  const reset = (toValue: number) => {
    'worklet';
    y.value = withTiming(toValue, {
      duration: 200,
    });
    runOnJS(setIsPlayerOpen)(toValue === 0 ? false : true);
  };

  const panGestureHander = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >(
    {
      onStart: (_, context) => {
        context.latestY = y.value;
        //Sanitaze the latestY value
        context.latestY < -THRESHOLD ? (context.latestY = -THRESHOLD) : null;
      },
      onActive: (event, context) => {
        //Set direction up or down
        context.isGoingUp = event.translationY < 0 ? true : false;
        y.value = context.latestY + event.translationY;
      },
      onEnd: (event, context) => {
        const slidedDistance = Math.abs(event.translationY);

        //Manage on the opening
        if (!isPlayerOpen && context.isGoingUp)
          slidedDistance < MIN_DISTANCE ? reset(0) : reset(-THRESHOLD);

        //Manage on the closing
        if (isPlayerOpen && !context.isGoingUp)
          slidedDistance < MIN_DISTANCE ? reset(-THRESHOLD) : reset(0);
      },
    },
    [isPlayerOpen]
  );

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        INPUT_RANGE,
        [SCREEN_HEIGHT, MIN_PLAYER_HEIGHT, MIN_PLAYER_HEIGHT],
        Extrapolate.CLAMP
      ),
      bottom: interpolate(
        y.value,
        INPUT_RANGE,
        [0, NAVIGATION_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT],
        Extrapolate.CLAMP
      ),
      borderRadius: interpolate(
        y.value,
        INPUT_RANGE,
        [MIN_PLAYER_RADIUS * 0.5, MIN_PLAYER_RADIUS, MIN_PLAYER_RADIUS],
        Extrapolate.CLAMP
      ),
    };
  });

  const playerReanimatedStyle = useAnimatedStyle(() => {
    return {
      top: interpolate(
        y.value,
        INPUT_RANGE,
        [
          STATUS_BAR_HEIGHT,
          -PLAYER_HEIGHT + STATUS_BAR_HEIGHT,
          -PLAYER_HEIGHT + STATUS_BAR_HEIGHT,
        ],
        Extrapolate.CLAMP
      ),
    };
  });

  const getSongDetails = (details: ISongs): void => setSongsDetails(details);

  return (
    <GestureHandlerRootView style={styles.main}>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Header totalSongs={MUSICS.length} />
          <View style={styles.flatListContainer}>
            <SongList {...{ getSongDetails }} />
          </View>
        </SafeAreaView>
      </View>

      {/* Player */}
      <PanGestureHandler onGestureEvent={panGestureHander} minDist={60}>
        <Animated.View
          style={[
            { backgroundColor: songDetails.color },
            styles.player,
            rStyle,
          ]}
        >
          <Animated.View
            style={[styles.playerContainer, playerReanimatedStyle]}
          >
            <PlayerController {...{ y, songDetails, reset }} />
            <MiniPlayerController {...{ y, songDetails }} />
            <AlbumCover {...{ y, image: songDetails.thumbImage }} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  flatListContainer: {
    flex: 1,
    backgroundColor: '#FCFBFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  player: {
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    backgroundColor: '#F3F4F5',
  },

  playerContainer: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    height: SCREEN_HEIGHT - (STATUS_BAR_HEIGHT + NAVIGATION_BAR_HEIGHT),
    width: '100%',
    paddingTop: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default Player;
