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
          darkColor="rgba(128, 128, 128, 0.05)">
          <Image
            source={require("../assets/images/profile.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={{ fontSize: 24, marginTop: 16, fontWeight: "500" }}>OSMU는 세상을 구한다</Text>
        <Text
          style={{ fontSize: 17, marginTop: 16, lineHeight: 24 }}
          lightColor="rgba(0, 0, 0, 0.6)"
          darkColor="rgba(255, 255, 255, 0.7)">
          안녕하세요👋 React-Native 개발자 유병훈입니다.{"\n"}
          학창시절 서비스를 통해 사람들과 소통할 수 있다는 매력에 UX를 전공하고, 설계한 UX를 더
          심도있게 구현하고자 개발자의 길로 걷게 되었습니다.
        </Text>
      </View>
    </ScrollView>
  );
}
