import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import "./style";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../../selectors/counter";

import { Audio } from "expo-av";
import ProgressBarTimer from "../../components/ProgressBarTimer/ProgressBarTimer";
import ActivityPicker from "../../components/ActivityPicker/ActivityPicker";

const ActivityTimer = () => {
  const activity = useSelector(selectors.getActivity);

  const [seconds, setSeconds] = useState(activity);

  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound }:any = await Audio.Sound.createAsync(
      require("../../assets/bell-ring-01.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(activity);
    setIsActive(false);
  };

  var progress = seconds / 25;

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      playSound();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View style={styles.container}>
      {seconds > 9 ? (
        <>
          <Text style={styles.timer}> 00:{seconds}</Text>
          <ProgressBarTimer progress={progress} />
        </>
      ) : seconds > 0 ? (
        <>
          <Text style={styles.timer}> 00:0{seconds}</Text>
          <ProgressBarTimer progress={progress} />
        </>
      ) : seconds <= 0 ? (
        <Text style={styles.breakText}> Descanse um Pouco!! </Text>
      ) : null}
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

export default ActivityTimer;
