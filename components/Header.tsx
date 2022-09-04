import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

const Header = ({ totalSongs }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0,
          padding: 0,
        }}
      >
        <Entypo name="chevron-thin-left" size={22} color="black" />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 16,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#060606',
              }}
            >
              Favorite Tracks
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#636363',
              }}
            >
              {totalSongs} tracks
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="add-outline"
              size={30}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Entypo name="dots-three-vertical" size={16} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 94,
    paddingTop: 35,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },
});

export default Header;
