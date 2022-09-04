import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

type PropButtons = {
  icon: any;
};

const Buttons = ({ icon }: PropButtons) => {
  return (
    <TouchableOpacity
      style={{
        padding: 6,
        borderRadius: 16,
        backgroundColor: 'rgba(0,0,0,0.1)',
        margin: 4,
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};
const ListHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Pressable style={{ flexDirection: 'row', opacity: 0.5 }}>
        <MaterialCommunityIcons name="sort-ascending" size={24} color="black" />
        <Text>Custom order</Text>
      </Pressable>
      <View style={{ flexDirection: 'row' }}>
        <Buttons
          icon={<Ionicons name="md-shuffle" size={20} color="black" />}
        />
        <Buttons icon={<Ionicons name="play" size={20} color="black" />} />
      </View>
    </View>
  );
};

export default ListHeader;
