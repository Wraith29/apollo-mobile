import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Temporary for quick development.
const AUTH_TOKEN = "insert_auth_token_here";

function getBaseUrl(): string {
  const ipAddr = Constants.expoConfig?.hostUri?.split(":").at(0);
  return `http://${ipAddr}:1300`;
}

export default function App() {
  const baseUrl = getBaseUrl();

  const result = fetch(baseUrl + "/album/recommendation", {
    headers: {
      "Authorization": AUTH_TOKEN
    }
    }).then(res => res.json()).then(body => {
      console.log(body);
      return body;
    });

  console.log("Received Recommendation: ", result);

  return (
    <View style={styles.container}>
      <Text>Response:</Text>
      <Text>{JSON.stringify(result)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
