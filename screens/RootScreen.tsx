import { Image, StyleSheet } from "react-native";

import { Text, View, ScrollView } from "../components/Themed";
import { RootStackScreenProps } from "../types/types";

export default function RootScreen({ navigation }: RootStackScreenProps<"Root">) {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View style={{ marginTop: 112, paddingHorizontal: 24 }}>
        <View
          style={{ width: 80, height: 80, borderRadius: 40 }}
          lightColor="#F5F5F5"
          darkColor="#2e2e2e">
          <Image
            source={require("../assets/images/profile.png")}
            style={{ width: "100%", height: "100%" }}
          />
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: "#ffffff",
              position: "absolute",
              bottom: -4,
              right: -4,
              borderRadius: 16,
              elevation: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 16,
              },
              shadowOpacity: 0.12,
              shadowRadius: 24,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text>🎉</Text>
          </View>
        </View>
        <Text style={{ fontSize: 24, marginTop: 16, fontWeight: "500" }}>OSMU는 세상을 구한다</Text>
        <Text
          style={{ fontSize: 17, marginTop: 16, lineHeight: 26 }}
          lightColor="#666666"
          darkColor="#bfbfbf">
          안녕하세요👋 React-Native 개발자 유병훈입니다.{"\n"}
          UX라는 용어가 익숙치 않았던 시절부터 UX를 공부하고, 설계한 UX를 더 심도있게 구현하고자
          개발자의 길을 걷고 있습니다.
        </Text>
        <Text
          style={{ fontSize: 17, marginTop: 64, lineHeight: 26 }}
          lightColor="#666666"
          darkColor="#bfbfbf">
          극한의 효율성을 좋아해서 OSMU, 자동화에 👀눈이 돌아갑니다.{"\n"}당연히 여기 나오는 UX나
          인터랙션은 모두 React-Native로만 구현했습니다!
        </Text>
      </View>
    </ScrollView>
  );
}
