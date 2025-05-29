import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  Platform,
} from 'react-native';
import React from 'react';
import { ICONS } from './resources';
import { FontStyleInterface, ImageType } from '../shared';

const Header = (props: {
  title?: string;
  showCloseButton?: boolean;
  closeButtonIcon?: ImageType;
  onPress?: (event: GestureResponderEvent) => void;
  titleStyle?: TextStyle;
  closeIconTint?: string;
}) => {
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
            source={closeButtonIcon as ImageSourcePropType}
            style={{marginTop : 2.5}}
            resizeMode='contain'          />
        </TouchableOpacity>
      )}
      <Text style={[styles.headingText, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    shadowColor: Platform.OS == 'android' ? '#000' : 'rgba(153, 153, 153, 0.15)',
    height: 120,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    zIndex: 1,
    paddingTop:60,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingHorizontal : 20
  },
  iconContainer: { paddingRight: 12, alignItems: 'center' },
  headingText: { fontSize: 20, fontWeight: '600', color: '#000' },
});
export default Header;
