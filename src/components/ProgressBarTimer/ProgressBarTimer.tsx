import React, { Component } from "react";
import { Text, View } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

interface progressProps {
  progress: number;
  color:string
}

const ProgressBarTimer = ({ progress, color }: progressProps) => {
  return (
    <View>
      <ProgressBar
        style={{ marginTop: 10, marginBottom: 10, height: 3, width: 300 }}
        color={color}
        progress={progress}
    
      />
    </View>
  );
};

export default ProgressBarTimer;
