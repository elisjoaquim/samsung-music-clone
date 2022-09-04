import { Dimensions, ImageSourcePropType, StatusBar } from 'react-native';

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const STATUS_BAR_HEIGHT: number = StatusBar.currentHeight;
export const NAVIGATION_BAR_HEIGHT =
  SCREEN_HEIGHT - (WINDOW_HEIGHT + STATUS_BAR_HEIGHT);

export const MIN_PLAYER_HEIGHT = 59;
export const MIN_PLAYER_RADIUS = (MIN_PLAYER_HEIGHT / 2) * 0.9;
export const THRESHOLD = SCREEN_HEIGHT * 0.65;
export const MIN_DISTANCE = SCREEN_HEIGHT * 0.12;
export const INPUT_RANGE = [-THRESHOLD, 0, THRESHOLD];
export const PLAYER_HEIGHT =
  SCREEN_HEIGHT - (STATUS_BAR_HEIGHT * 2 + NAVIGATION_BAR_HEIGHT);

export interface ISongs {
  id: string;
  title: string;
  thumbImage: ImageSourcePropType;
  artist: string;
  color: string;
}

export const MUSICS: Array<ISongs> = [
  {
    id: '01',
    title: 'Our Father',
    thumbImage: require('../assets/thumb/chosen.jpg'),
    artist: 'Chosen SG',
    color: '#6E767F',
  },
  {
    id: '02',
    title: 'Desire',
    thumbImage: require('../assets/thumb/kiki-sheard.jpg'),
    artist: 'Kierra Sheard',
    color: '#FABE7F',
  },
  {
    id: '03',
    title: 'Kune Musik',
    thumbImage: require('../assets/thumb/radiance-1.jpg'),
    artist: 'Radiance Acapella',
    color: '#595A57',
  },
  {
    id: '04',
    title: 'Medley',
    thumbImage: require('../assets/thumb/radiance-2.jpg'),
    artist: 'Radiance Acapella',
    color: '#938C07',
  },
  {
    id: '05',
    title: 'Over the Horizon',
    thumbImage: require('../assets/thumb/samsung.jpg'),
    artist: 'Samsung',
    color: '#1C4A5E',
  },
  {
    id: '06',
    title: 'Enquanto Ele Não Vem',
    thumbImage: require('../assets/thumb/arautos-1.jpg'),
    artist: 'Arautos do Rei',
    color: '#289BD6',
  },
  {
    id: '07',
    title: 'Paradise',
    thumbImage: require('../assets/thumb/isaac.jpg'),
    artist: 'Isaac Carree',
    color: '#3D3D44',
  },
  {
    id: '08',
    title: 'Our Father',
    thumbImage: require('../assets/thumb/chosen.jpg'),
    artist: 'Chosen SG',
    color: '#6E767F',
  },
  {
    id: '09',
    title: 'Desire',
    thumbImage: require('../assets/thumb/kiki-sheard.jpg'),
    artist: 'Kierra Sheard',
    color: '#FABE7F',
  },
  {
    id: '10',
    title: 'Kune Musik',
    thumbImage: require('../assets/thumb/radiance-1.jpg'),
    artist: 'Radiance Acapella',
    color: '#595A57',
  },
  {
    id: '11',
    title: 'Medley',
    thumbImage: require('../assets/thumb/radiance-2.jpg'),
    artist: 'Radiance Acapella',
    color: '#938C07',
  },
  {
    id: '12',
    title: 'Over the Horizon',
    thumbImage: require('../assets/thumb/samsung.jpg'),
    artist: 'Samsung',
    color: '#1C4A5E',
  },
  {
    id: '13',
    title: 'Enquanto Ele Não Vem',
    thumbImage: require('../assets/thumb/arautos-1.jpg'),
    artist: 'Arautos do Rei',
    color: '#289BD6',
  },
  {
    id: '14',
    title: 'Paradise',
    thumbImage: require('../assets/thumb/isaac.jpg'),
    artist: 'Isaac Carree',
    color: '#3D3D44',
  },
];
