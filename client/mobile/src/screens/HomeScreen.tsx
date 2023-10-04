// HomeScreen.tsx
import React from 'react';
import {View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './NavigationTypes';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme(); // Get the current theme

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
          color: theme.colors.onBackground,
        }}>
        Home Screen
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{width: 200}}
        color={theme.colors.primary} // Use theme color for the button
      >
        Go to Login
      </Button>
    </View>
  );
};

export default HomeScreen;
