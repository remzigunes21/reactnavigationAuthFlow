import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar} from 'react-native';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {UserContext} from './src/contexts/UserContext';
import {MainStackNavigator} from './src/navigators/MainStackNavigator';
import {SplashScreen} from './src/screens/SplashScreen';
import {ThemeContext} from './src/contexts/ThemeContext';
import {useAuth} from './src/hooks/useAuth';
import {AuthContext} from './src/contexts/AuthContext';
import {darkTheme} from './src/theme/dark';
import {lightTheme} from './src/theme/light';
// import {useDarkMode} from 'react-native-dark-mode';

const RootStack = createStackNavigator();

export default function () {
  const {auth, state} = useAuth();
  // const isDarkMode = useDarkMode();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }

  return (
    <ThemeContext.Provider value={switchTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContext.Provider value={auth}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
