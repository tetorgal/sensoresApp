import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../themes/theme";
import axios from "axios";
import Picker from "react-native-form-component";

const Lecturas = () => {
  useEffect(() => {
    traerSensores();
  }, []);

  const traerSesnores = async () => {
    await axios
      .get("http://10.0.2.2:5000/sensores")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.datos);
          setSensores(response.data.datos);
          ToastAndroid.show("Sensores cargados 😊", ToastAndroid.BOTTOM);
        }
        if (response.status === 101) {
          console.log(response.data);
          ToastAndroid.show("No se cargaron los sensores", ToastAndroid.BOTTOM);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  const [sensores, setSensores] = useState([]);
  //PARA EL PICKER PADRINO
  const [number, setNumber] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Lecturas</Text>
      <Picker
        items={[{ sensores }]}
        label="Selecciona un sensor"
        selectedValue={number}
        onSelection={(item) => setNumber(item.value)}
      />
    </View>
  );
};

export default Lecturas;
