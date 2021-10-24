import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(76, 145, 149)",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    color: "white",
    fontSize: 78,
    fontWeight: "bold",
  },
  buttoncontainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  startbutton: {
    backgroundColor: "white",
    height: 30,
    width: 60,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#435786",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  buttonOutilineText: {
    color: "rgb(76, 145, 149)",
    fontWeight: "700",
    fontSize: 16,
  },
  breakText: {
    fontSize: 16,
    color: "white",
    marginBottom: 15,
  },
});

export default styles;
