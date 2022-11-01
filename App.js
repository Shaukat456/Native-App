// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View  , FlatList} from 'react-native';

// export default function App() {
//   const users=[
//     {
//       name:"shaukat"
//     },
//     {
//       name:"taha"
//     },
//   ]
//   return (
    
//     <View style={styles.container}>
//       <FlatList  data={ users} renderItem={({item, index, separators})=>{
//         console.log(separators)
//         console.log(index)
//         return (
//       <>
//         <div style={styles.container }> {item.name}  </div>
//          {/* <div> {index} </div> */}
//        </>
//       )
//       }}/>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     fontSize:55,
//     justifyContent: 'center',
//   },
// });
















import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'

export default function App() {

  const users=[
        {
          name:"shaukat"
        },
        {
          name:"taha"
        },
      ]
  return (
    <View  style={styles}>

      <Text>App</Text>
      <Home Name={54} />
    
     
    </View>
  )
}


const styles = StyleSheet.create({

  MainContainer:{
    flex : 1,  
  }
})