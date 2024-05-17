import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from "../components/PrimaryButton";
import { images } from '../constants';

export default function App() {
  return (
   <SafeAreaView className='bg-primary h-full'>
    <ScrollView contentContainerStyle={{height: '100%'}}>
      <View className='w-full flex items-center justify-center min-h-[100vh] px-4'>
        <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode="contain"/>
        <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode="contain"/>
        <View className='relative mt-5'>
          <Text className='text-3xl text-white font-bold text-center font-pbold'>
          Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text>
          </Text>
          <Image resizeMode="contain" className='w-[70px] h-[15px] absolute -bottom-2 -right-0' source={images.path}/>
        </View>
        <Text className='text-sm text-gray-100 mt-7 text-center font-pregular'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
        <PrimaryButton handlePress={()=> router.push('/sign-in')} containerStyle={'w-full mt-7'} text={'Continue With Email'} textStyle={'text-primary'}/>
      </View>
    </ScrollView>
    <StatusBar backgroundColor="#161622" style="light"/>
   </SafeAreaView>
  );
}
NativeWindStyleSheet.setOutput({
    default: "native",
  });