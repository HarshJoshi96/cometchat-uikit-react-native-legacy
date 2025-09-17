import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { ICONS } from './resources';

const Header = (props: any) => {
  const {
    title,
    showCloseButton,
    closeButtonIcon,
    onPress,
    titleStyle,
    closeIconTint,
  } = props;
  return (
    <View style={styles.container}>
      {showCloseButton && (
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <Image
            source={closeButtonIcon}
            style={{
              tintColor: closeIconTint ?? 'rgb(51, 153, 255)',
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.headingText,titleStyle]}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 20,
    shadowColor: Platform.OS == 'android' ? '#000' : 'rgba(153, 153, 153, 1)',
    height: 120,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    zIndex: 1,
    paddingTop:60,
    paddingBottom: 24,
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginLeft : -20,
    paddingLeft : 20
  },
  iconContainer: { paddingRight: 15 },
  headingText: { fontSize: 20, fontWeight: '600', color: '#247BA0' },
});
export default Header;
