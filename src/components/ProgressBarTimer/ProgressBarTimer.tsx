import React, { Component } from "react";
import { Text, View } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

interface progressProps {
  progress: number;
}

const ProgressBarTimer = ({ progress }: progressProps) => {
  return (
    <View>
      <ProgressBar
        style={{ marginTop: 10, marginBottom: 10, height: 3, width: 300 }}
        color="white"
        progress={progress}
      />
    </View>
  );
};

export default ProgressBarTimer;
