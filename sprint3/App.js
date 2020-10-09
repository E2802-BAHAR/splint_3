import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () =>{
    return(
<View style ={styles.container}>
<View style ={{flex:1,backgroundColor:'red'}}>
    <View style={styles.boxGrey}>
        <View style={styles.circleOrange}><Text style={{alignSelf:'center',fontWeight:'bold',fontSize:12}}>Orange Circle</Text></View>
        <View style={{flex:1}}></View>
        <View style={styles.yellowBox}><Text style={{alignSelf:'center'}}>Yellow Box</Text></View>
    </View>

</View>

<View style={{flex:2,backgroundColor:'pink',flexDirection:'row',alignItems:'center'}}>
    <View style={styles.blackBox}><Text style={{color:'white',alignSelf:'center'}}>Black Box</Text></View>
    <View style={styles.brownBox}><Text style={{color:'white',transform: [{ rotate: '-90deg'}]}}>Brown Box</Text></View>
</View>
</View>
    )
};
export default App;

const styles =StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'grey'
  },
  boxGrey: {
    backgroundColor:'grey',
    flex:1, 
    margin:20,
    borderRadius:5,
    flexDirection:'row',
    
  },
  circleOrange:{
    backgroundColor:'#fea500',
    flex:2,
    borderRadius:600,
    height:90,
    marginHorizontal:50,
    justifyContent:'center',
    alignSelf:'center'
       
  },
  yellowBox:{
    backgroundColor:'yellow',
    flex:2,
    height:50,
    marginRight:50,
    borderRadius:20,
    justifyContent:'center',
    alignSelf:'center',
  },
  blackBox:{
      backgroundColor:'black',
      flex:3,
      height:470,
      margin:20,
      borderRadius:20,
      justifyContent:'center'
  },
  brownBox:{
      backgroundColor:'brown',
      flex:1,
      height:470,
      margin:20,
      borderRadius:60,
      width:40,
      justifyContent:'center'
      
  }
 
  
});
