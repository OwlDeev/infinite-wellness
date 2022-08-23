import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { makeStyles, Button, Image, Text } from "@rneui/themed";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGoogle, mdiApple } from "@mdi/js";

export default function App() {
  const styles = useStyles();

  return (
    <ImageBackground
      source={require("../assets/imgs/fondoLogin3.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/imgs/logo2.png")}
          resizeMode="contain"
          style={{ width: 300, height: 200, marginBottom: 40 }}
        ></Image>
        <View>
          <Button
            titleStyle={{ fontWeight: "700", color: "black" }}
            buttonStyle={{
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 30,
            }}
            containerStyle={{
              width: "100%",
              marginVertical: 10,
            }}
          >
            <Icon
              path={mdiGoogle}
              title="google"
              size={1}
              color="red"
              style={{ marginRight: 5 }}
            />
            CONTINUAR CON GOOGLE
          </Button>
          <Button
            titleStyle={{ fontWeight: "700", color: "white" }}
            buttonStyle={{
              backgroundColor: "#3b5998",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 30,
            }}
            containerStyle={{
              width: "100%",
              marginVertical: 10,
            }}
          >
            <Icon
              path={mdiFacebook}
              title="google"
              size={1.2}
              color="white"
              style={{ marginRight: 5 }}
            />
            CONTINUAR CON FACEBOOK
          </Button>
          <Button
            titleStyle={{ fontWeight: "700", color: "white" }}
            buttonStyle={{
              backgroundColor: "black",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 30,
            }}
            containerStyle={{
              width: "100%",
              marginVertical: 10,
            }}
          >
            <Icon
              path={mdiApple}
              title="google"
              size={1.2}
              color="white"
              style={{ marginRight: 5 }}
            />
            CONTINUAR CON APPLE
          </Button>
          {/* texto para el registro */}
          <View style={styles.viewTextSign}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "black",
                marginRight: 10,
              }}
            />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                O REGISTRATE CON
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "black",
                marginLeft: 10,
              }}
            />
          </View>
          {/* iconos de registro */}
          <View style={styles.viewSign}>
            <TouchableOpacity style={styles.roundButtonGoogle}>
              <Image
                source={require("../assets/imgs/buttonGoogle.png")}
                style={styles.imgButtonSign}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButtonFacebook}>
              <Image
                source={require("../assets/imgs/buttonFacebook.png")}
                style={styles.imgButtonSign}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButtonFacebook}>
              <Image
                source={require("../assets/imgs/buttonFacebook.png")}
                style={styles.imgButtonSign}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: "50px",
    width: "30%",
    height: "80%",
    borderRadius: "40px",
    boxShadow: "2px 2px 2px",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 204, 0, 0.5)",
  },
  buttonLoggin: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
  },
  iconButtonLogin: {
    marginRight: 10,
  },
  roundButtonGoogle: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
    boxShadow: "2px 2px 2px",
    marginHorizontal: 10,
  },
  roundButtonFacebook: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#3b5998",
    boxShadow: "2px 2px 2px",
    marginHorizontal: 10,
  },
  imgButtonSign: {
    width: 30,
    height: 30,
  },
  viewSign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  viewTextSign: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
}));
