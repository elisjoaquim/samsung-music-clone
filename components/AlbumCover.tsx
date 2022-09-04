import { ImageSourcePropType, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';
import {
  INPUT_RANGE,
  WINDOW_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
} from './Constants';

interface AlbumCoverProps {
  y: Animated.SharedValue<number>;
  image: ImageSourcePropType;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({ y, image }) => {
  const imageReanimatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(
        y.value,
        INPUT_RANGE,
        [20, 90, 90],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            y.value,
            INPUT_RANGE,
            [0, -WINDOW_WIDTH * 0.428, -WINDOW_WIDTH * 0.428],
            Extrapolate.CLAMP
          ),
        },
        {
          translateY: interpolate(
            y.value,
            INPUT_RANGE,
            [
              0,
              (SCREEN_HEIGHT - (STATUS_BAR_HEIGHT + NAVIGATION_BAR_HEIGHT)) *
                0.656,
              (SCREEN_HEIGHT - (STATUS_BAR_HEIGHT + NAVIGATION_BAR_HEIGHT)) *
                0.656,
            ],
            Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            y.value,
            INPUT_RANGE,
            [1, 0.22, 0.22],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.Image
      source={image}
      style={[styles.albumCover, imageReanimatedStyle]}
    />
  );
};

const styles = StyleSheet.create({
  albumCover: { width: 180, height: 180, position: 'absolute', top: '20%' },
});

export default AlbumCover;
