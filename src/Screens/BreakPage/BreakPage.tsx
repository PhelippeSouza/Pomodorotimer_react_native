import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import "./style";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../../selectors/counter";

import { Audio } from "expo-av";
import ProgressBarTimer from "../../components/ProgressBarTimer/ProgressBarTimer";
import ActivityPicker from "../../components/ActivityPicker/ActivityPicker";

const PomodoroTimer = () => {
  const counter = useSelector(selectors.getCounter);
  const [sound, setSound] = React.useState();

  const [seconds, setSeconds] = useState(counter);

  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  async function playSound() {
    const { sound }:any = await Audio.Sound.createAsync(
      require("../../assets/bell-ring-01.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  var progress = seconds / 5;

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(counter);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 1) {
      playSound();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View style={styles.container}>
      {seconds > 0 ? (
        <Text style={styles.timer}> 00:0{seconds}</Text>
      ) : seconds <= 0 ? (
        <Text style={styles.breakText}> Let's Go!!</Text>
      ) : null}
      <ProgressBarTimer progress={progress} />
      <View style={styles.buttoncontainer}>
        {isActive && seconds > 0 ? (
          <TouchableOpacity
            onPress={toggle}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutilineText}> Stop </Text>
          </TouchableOpacity>
        ) : !isActive && seconds > 0 ? (
          <TouchableOpacity
            onPress={toggle}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutilineText}> Start </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={reset}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutilineText}> Reset </Text>
      </TouchableOpacity>

      <ActivityPicker />
    </View>
  );
};

export default PomodoroTimer;
