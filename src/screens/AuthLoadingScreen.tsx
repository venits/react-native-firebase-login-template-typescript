import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import Background from "../components/Background";
import { Navigation } from "../types";
import { theme } from "../core/theme";
import { FIREBASE_CONFIG } from "../core/config";

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

type Props = {
  navigation: Navigation;
};

const AuthLoadingScreen = ({ navigation }: Props) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
