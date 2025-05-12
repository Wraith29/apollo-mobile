import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcG9sbG8tc2VydmVyIiwic3ViIjoiYzc4MTMxNmM5ZmY0YmVhYSIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjUwMDAiXSwiZXhwIjoxNzQ3NjU4Mzc3LCJpYXQiOjE3NDcwNTM1Nzd9.MwyZtCL6_q_NVC2qufUnt_3pTrzCJZyBM1tYBugnt3Y";

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
