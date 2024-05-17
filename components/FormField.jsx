import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

const FormField = ({
  text,
  value,
  otherStyle,
  handleChange,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={` space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{text}</Text>
      <View className="px-5 w-full h-16 bg-black-100 rounded-lg border-2 border-black-200 focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          value={value}
          onChangeText={handleChange}
          secureTextEntry={text === "Password" && !showPassword}
        />
        {text === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode="contain"/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
