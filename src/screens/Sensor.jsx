import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "../themes/theme";
import { TextInput } from "react-native-paper";

initialState = {
  nombre: "",
  descripcion: "",
};

const Sensor = () => {
  const [datos, setDatos] = useState(initialState);
  const { nombre, descripcion } = datos;
  const handleChange = (nom, value) => {
    setDatos({
      ...datos,
      [nom]: value,
    });
  };
  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.sensorLabel}>Ingresa datos del sensor</Text>
      <Text style={styles.sensorLabel}>Nombre: </Text>
      <TextInput
        placeholder="nombre"
        //style = {}
        value={nombre}
        onChangeText={(valor) => handleChange("nombre", valor)}
        // placeholderTextColor={colores.creamyWhite}
      ></TextInput>
      <Text style={styles.sensorLabel}>Descripcion: </Text>
      <TextInput
        placeholder="descripcion"
        // placeholderTextColor={}
        //style = {}
        multiline
        numberOfLines={4}
        maxLength={200}
        value={descripcion}
        onChangeText={(valor) => handleChange("descripcion", valor)}
      />
      <TouchableOpacity
        //style= {}
        onPress={handleSubmit}
      >
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sensor;
