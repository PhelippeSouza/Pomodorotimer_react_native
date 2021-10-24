import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const TimePicker = () => {
  const [selecatividade, setSelectAtividade] = useState(false);

  const navigation: any = useNavigation();

  const handleActivity = () => {
    if (!selecatividade) {
      navigation.navigate("ActivityTimer");
      setSelectAtividade(true);
    } else{
      navigation.navigate("BreakPage");
      
    }
  };

  return (
    <View>
      <Text style={styles.pickerContainer}> Escolha a modalidade </Text>

      {!selecatividade ? (
        <Picker onValueChange={() => handleActivity()}>
          <Picker.Item label="Descanso" value="descanso" />
          <Picker.Item label="Atividade" value="atividade" />
        </Picker>
      ) : selecatividade ? (
        <Picker onValueChange={() => handleActivity()}>
          <Picker.Item label="Atividade" value="atividade" />
          <Picker.Item label="Descanso" value="descanso" />
        </Picker>
      ) : null}
    </View>
  );
};

export default TimePicker;
