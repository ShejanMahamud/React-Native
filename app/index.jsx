import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from "nativewind";
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-blue-500">Hello React Native</Text>
      <StatusBar style="auto" />
      <Link className=' my-5 bg-blue-500 px-4 py-3 rounded-lg text-white font-medium' href="/profile">Go To</Link>
    </View>
  );
}
NativeWindStyleSheet.setOutput({
    default: "native",
  });