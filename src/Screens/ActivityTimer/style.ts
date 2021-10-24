import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(236, 223, 200)",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    color: "rgb(217, 85, 80)",
    fontSize: 78,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  startButton: {
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
  buttonOutlineStop: {
    backgroundColor: "rgb(76, 145, 149)",
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  buttonOutilineText: {
    color: "rgb(217, 85, 80)",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutilineTextStop: {
    color: "white",
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
