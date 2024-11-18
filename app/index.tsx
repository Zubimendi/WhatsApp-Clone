import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import welcomeImage from "@/assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { openExternalLink } from "@/utils/openLink";
// Resolve the image URI
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headLine}>Welcome To WhatsApp Clone</Text>
      <Text style={styles.description}>
        Read our
        <Text style={styles.link} onPress={() => openExternalLink()}>
          {" "}
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link}>Terms of Service</Text>.
      </Text>
      <Link href="/otp" replace asChild>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null, // Highlight when pressed
          ]}
          onPress={() => console.log("Button tapped!")} // Optional debug
        >
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  headLine: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    paddingVertical: 15, // Vertical padding for touchable area
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: Colors.green, // Darker color when pressed
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary, // White text for contrast
    fontWeight: "bold",
  },
});

export default Page;
