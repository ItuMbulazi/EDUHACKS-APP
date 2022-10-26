import React from 'react'
import All from './components/all'
import Maths from './components/maths'
import MathLit from './components/mathlit'
import Physics from './components/physics'
import Profile from './components/profileSingleAndGroup'
import BtmNav from './components/btmNav'
import Login from './components/login'
import Signup from './components/signup'
import All from './components/all'
import Maths from './components/maths'
import MathLit from './components/mathlit'
import Physics from './components/physics'
import Profile from './components/profileSingleAndGroup'
import BtmNav from './components/btmNav'
import Login from './components/login'
import Signup from './components/signup'

// You can import from local files
import AssetExample from './components/AssetExample';
import  Settings  from './components/SettingsPage'
import Explore from './components/VideosHome'
import SelectVideo from './components/SelectVideo'

// You can import from local files
import AssetExample from './components/AssetExample';
import  Settings  from './components/SettingsPage'
import Explore from './components/VideosHome'
import SelectVideo from './components/SelectVideo'

function Home() {
  return (
    <Stack.Navigator >  
       <Stack.Screen
        name="all"
        component={All}
      />
      <Stack.Screen
        name="NestedScreen1"
        component={NestedScreen}
      />
    </Stack.Navigator>
  )
}

export {Home}
function Math() {
    return (
      <Stack.Navigator >  
         <Stack.Screen
          name="maths"
          component={Maths}
        />
        <Stack.Screen
          name="NestedScreen1"
          component={NestedScreen}
        />
      </Stack.Navigator>
    )
  }
  
  export {Math}
  function MathLit() {
    return (
      <Stack.Navigator >  
         <Stack.Screen
          name="mathlit"
          component={MathLit}
        />
        <Stack.Screen
          name="NestedScreen1"
          component={NestedScreen}
        />
      </Stack.Navigator>
    )
  }
  
  export {MathLit}
  function Math() {
    return (
      <Stack.Navigator >  
         <Stack.Screen
          name="physics"
          component={Physics}
        />
        <Stack.Screen
          name="NestedScreen1"
          component={NestedScreen}
        />
      </Stack.Navigator>
    )
  }
  
  export {Physics}

  
  export {Math}