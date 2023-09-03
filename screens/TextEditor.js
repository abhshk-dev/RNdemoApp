import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MarkdownView } from "react-native-markdown-view";
import { useNavigation } from "@react-navigation/native";

const TextEditor = () => {
  const navigation = useNavigation();
  return (
    <MarkdownView>
      # MarkdownView{"\n"}
      {"\n"}
      **React Native** is even better with Markdown!{"\n"}
      {"\n"}
      ![RN Logo](https://facebook.github.io/react/img/logo_og.png =120x63){"\n"}
      {"\n"}
      `react-native-markdown-view` is:{"\n"}
      {"\n"}* Easy to use{"\n"}* Looks good by default{"\n"}* Is __extensible__
      {"\n"}
    </MarkdownView>
  );
};

export default TextEditor;

const styles = StyleSheet.create({});
