import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://i0.wp.com/www.campuzine.com/wp-content/uploads/2022/02/IMG_20210423_155654_239.jpg?fit=611%2C320&ssl=1",
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "skyblue",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          QUIZ RULES
        </Text>
        <View
          style={{
            padding: 10,
            backgroundColor: "#f88333",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text
              style={{ color: "#fff", fontWeight: "600", alignSelf: "center" }}
            >
              👆
            </Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722f3e",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text
              style={{ color: "#fff", fontWeight: "600", alignSelf: "center" }}
            >
              👆
            </Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722f3e",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text
              style={{ color: "#fff", fontWeight: "600", alignSelf: "center" }}
            >
              👆
            </Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722f3e",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text
              style={{ color: "#fff", fontWeight: "600", alignSelf: "center" }}
            >
              👆
            </Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722f3e",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "skyblue",
          padding: 14,
          width: 150,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Start Quiz
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Edit")}
        style={{
          backgroundColor: "skyblue",
          padding: 14,
          width: 150,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Go to Edit Page
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
