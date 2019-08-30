import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const InputField = ({ 
  placeholder,
  placeholderTextColor,
  returnKeyType,
  onSubmiEditing,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
  ref 
}) => {
  return (
      <View style={styles.containerStyle}>
          <TextInput
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              returnKeyType={returnKeyType}
              onSubmiEditing={onSubmiEditing}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              autoCorrect={autoCorrect}
              secureTextEntry={secureTextEntry}
              ref={ref}
              style={styles.inputStyle}
            />
      </View>
  );
};

const styles = StyleSheet.create({
    inputStyle: {
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    containerStyle: {
      padding: 20,
    }
});

 export default InputField;