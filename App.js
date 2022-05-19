import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import Roots from './navigation/Roots'
// import author from './database/FirebaseConnect'
const App = ()=>{
  return(
    <NavigationContainer>
      <Roots />
    </NavigationContainer>
  )
}
export default App