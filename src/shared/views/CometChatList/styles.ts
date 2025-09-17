//@ts-ignore
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal : 28,
    marginTop:10,
  },
  listBaseHeaderStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height : 120,
    elevation: 20,
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
    paddingBottom : 30
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 19,
    marginVertical: 25,
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#247BA0',
  },
  backButtonStyle: {
    marginRight: 14,
    marginTop : 3,
  },
  searchTextStyle: {
    flex: 1,
    marginLeft: 8,
    alignSelf:"center"
  },
  searchButtonStyle: {
    width: 16,
    height: 16,
    marginLeft: 11,
  },
  msgContainerStyle: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgTxtStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
  },
  headerLetterStyle: {
    height: 24,
    fontWeight: '500',
    fontFamily: undefined,
    fontSize: 13,
    marginTop: 8,
  },
  dividerStyle: {
    height: 1,
    width: '100%',
    marginLeft: 16,
    marginRight: 16,
  },
  listContainerStyle: {
    width: '100%',
    height: '100%',
  },
  selectionIcon : {
    height : 20,
    width : 20
  }
});

export default styles;
