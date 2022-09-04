import React from 'react';
import { FlatList } from 'react-native';
import ListHeader from './ListHeader';
import SongItem from './SongItem';
import { ISongs, MUSICS } from './Constants';

interface SongListProps {
  getSongDetails: (details: ISongs) => void;
}

const SongList: React.FC<SongListProps> = ({ getSongDetails }) => {
  return (
    <FlatList
      ListHeaderComponent={<ListHeader />}
      data={MUSICS}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <SongItem {...{ item, getSongDetails }} />}
    />
  );
};

export default SongList;
