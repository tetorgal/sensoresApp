import { StyleSheet } from "react-native";
export const colores = {
  "creamyWhite": "#edf2f4",
  "jungle-green": "#264653",
  "aqua-green": "#2a9d8f",
  "bee-yellow": "#e9c46a",
  "fruit-orange": "#f4a261",
  "tangerine-orange": "#e76f51",
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f4",
    padding: 10,
    alignItems: "center",
  },
  sensorTitle: {
    color: "#264653",
    fontSize: 20,
    marginBottom: 20,
  },
  sensorLabel: {
    color: "#264653",
    fontSize: 18,
  },
  sensorInput: {
    width: "100px",
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#e76f51",
    color: "#edf2f4",
  },
  sensorInputText: {
    width: "100px",
    height: 100,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#e76f51",
    color: "#edf2f4",
  },
});
