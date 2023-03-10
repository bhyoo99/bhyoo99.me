import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Linking, TouchableOpacity } from "react-native";

import { Text, View, ScrollView } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackScreenProps } from "../types/types";

export default function RootScreen({ navigation }: RootStackScreenProps<"Root">) {
  const colorScheme = useColorScheme();
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
            <Text>π</Text>
          </View>
        </View>
        <Text style={{ fontSize: 24, marginTop: 16, fontWeight: "500" }}>I craft experience</Text>
        <Text
          style={{ fontSize: 17, marginTop: 16, lineHeight: 26 }}
          lightColor="#666666"
          darkColor="#bfbfbf">
          μλνμΈμ! React-Native κ°λ°μ μ λ³νμλλ€{"\n"}
          μ λ μλΉμ€λ₯Ό μ¬μ©νλ κ³ κ°λ€κ³Ό μν΅ν  μ μλ€λ λ§€λ ₯μ UXλ₯Ό κ³΅λΆνμκ³ , μ€κ³ν UX
          λνμΌν λΆλΆκΉμ§ μ§μ  κ΅¬ννκ³ μ κ°λ°μμ κΈΈμ κ±·κ³  μμ΅λλ€
        </Text>
        <Text
          style={{ fontSize: 17, marginTop: 64, lineHeight: 26 }}
          lightColor="#666666"
          darkColor="#bfbfbf">
          κ·Ήνμ ν¨μ¨μ±μ μ’μν΄μ OSMU, μλνλ₯Ό κ°μ₯ κ΄μ¬μκ² λ³΄κ³  μμ΄μ{"\n"}λΉμ°ν μ¬κΈ° λμ€λ
          UXλ μΈν°λμμ <Text>λͺ¨λ React-Nativeλ‘</Text> κ΅¬ννμ΅λλ€ :)
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 16 }}
          onPress={() => {
            Linking.openURL("https://github.com/bhyoo99/bhyoo99.me");
          }}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 21,
              fontWeight: "500",
            }}>
            μ§μ  νμΈν΄λ³΄μΈμ!
          </Text>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={18}
            color={Colors[colorScheme].text}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
