import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100, 
    borderRadius: 50
  },
  inner_container: {
    padding: 10,
    flex: 1, //dışarıya yazı taşmaz
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27
  },
  info_container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'red'
    
  },
  year: {
    fontSize: 12,
    marginLeft: 15,
    color: 'grey',
    fontWeight: 'bold'
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    padding: 5,
  },
  soldout_title: {
    color: 'red',
    fontSize: 9,
    fontWeight: 'bold'
  },
  content_container:{
    
    flexDirection: 'row', 
    
  },
});