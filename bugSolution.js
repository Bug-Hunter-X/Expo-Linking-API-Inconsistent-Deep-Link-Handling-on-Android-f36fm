/* bugSolution.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = async (url) => {
      console.log('Deep Link Received:', url);
    };
    Linking.addEventListener('url', handleUrlChange);

    // Check Initial URL 
    const checkInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
        handleUrlChange(url); // handle initial link
      }
    };
    checkInitialUrl();

    return () => Linking.removeEventListener('url', handleUrlChange);
  }, []);

  // Additional handling for initial URL if needed
  useEffect(()=>{
    if(initialUrl){
      console.log('Initial URL:', initialUrl);
    }
  }, [initialUrl])
  
  return (
    <View>
      {/* Your app content here */}
    </View>
  );
}

export default App;