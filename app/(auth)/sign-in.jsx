import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";
import { images } from "../../constants";
const SignIn = () => {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {

  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="flex items-start justify-center min-h-[100vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign In
          </Text>
          <FormField
            text="Email"
            value={form.email}
            handleChange={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyle="mt-7 w-full"
            keyboardType="email-address"
            placeholder='Enter Email'
          />

<FormField
            text="Password"
            value={form.password}
            handleChange={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyle="mt-7 w-full"
            placeholder='Enter Password'
          />
          <View className='mt-7 w-full flex items-end'>
          <Text className='text-gray-100 font-pregular text-sm'>Forget Password?</Text>
          </View>
          <PrimaryButton text={'Sign In'} containerStyle={'w-full mt-7'} handlePress={submit} isLoading={submitting}/>
          <View className='justify-center pt-5 flex-row gap-2 w-full'>
            <Text className='text-gray-100 font-pregular text-lg text-center'>Don’t have an account? <Link href={'sign-up'} className='text-secondary'>Signup</Link></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
