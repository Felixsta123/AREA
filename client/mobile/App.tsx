import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import {PaperProvider, Title, Surface, Button} from 'react-native-paper';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header title="AREA" />
        <Surface
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Title>Welcome to The AREA</Title>
          <Button
            mode="contained"
            onPress={() => console.log('Button Pressed')}>
            Press me
          </Button>
        </Surface>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;