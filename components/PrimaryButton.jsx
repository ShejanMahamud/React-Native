import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const PrimaryButton = ({text,containerStyle,isLoading,handlePress, textStyle}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress} className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}>
      <Text className={`text-lg font-psemibold ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton