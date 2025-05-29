import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { ICONS } from './resources';

const Header = (props: any) => {
  const {
    title,
    titleStyle,
    closeIconTint,
    createIconTint,
    joinIcon,
    closeIcon,
    onCancel,
    onSubmit,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={onCancel}>
          <Image
            source={closeIcon ?? ICONS.CLOSE}
            style={{
              tintColor: closeIconTint ?? 'rgb(51, 153, 255)',
              marginTop : 3
            }}
          />
        </TouchableOpacity>
        <Text style={[styles.headingText, titleStyle]}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onSubmit}>
        <Image
          source={joinIcon ?? ICONS.TICK}
          style={{
            tintColor: createIconTint ?? 'rgb(51, 153, 255)',
            height: 20,
            width: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    elevation: 2,
    shadowColor: Platform.OS == 'android' ? '#000' : 'rgba(153, 153, 153, 1)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingHorizontal : 20,
    paddingBottom : 30,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop : 3,
  },
  iconContainer: { paddingRight: 15 },
  headingText: { fontSize: 20, fontWeight: '600', color: '#000', },
});
export default Header;
