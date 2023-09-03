import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import questions from "../data/questions";

const QuizScreen = () => {
  const data = questions;
  const currentQues = data[0];

  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <Text style={{ paddingLeft: 7 }}>QUIZ SCREEN</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>Quiz Challenge</Text>
        <Text>Timer</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>Your Progress</Text>
        <Text>(0/5) questions answered</Text>
      </View>

      {/* [Progress bAR] */}
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#f0f8ff",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQues?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQues?.options.map((item, i) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  borderColor: "#00F",
                  textAlign: "center",
                }}
              >
                {item.options}
              </Text>
              <Text style={{ marginLeft: 5 }}>{item.answer}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
