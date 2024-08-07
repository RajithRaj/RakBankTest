import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {MainQuestionScreen} from './screens/MainQuestionScreen';
import {RiskProfileScreen} from './screens/RiskProfileScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Question"
            component={MainQuestionScreen}
            options={{title: 'Risk Profile'}}
          />
          <Stack.Screen name="Risk Profile" component={RiskProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
