import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Item = { key: string; label: string };
const teste = [
  {
    key: "1",
    label: "bloco 1",
  },
  {
    key: "2",
    label: "bloco 2",
  },
  {
    key: "3",
    label: "bloco 3",
  },
  {
    key: "4",
    label: "bloco 4",
  },
  {
    key: "5",
    label: "bloco 5",
  },
];

export default function HomeScreen() {
  const [data, setData] = useState<Item[]>(teste);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => (
    <ScaleDecorator>
      <Pressable
        onLongPress={drag}
        delayLongPress={250}
        disabled={isActive}
        style={({ pressed }) => ({
          opacity: pressed ? 0.9 : 1,
        })}
      >
        <Card
          mode="elevated"
          style={{ borderRadius: 0 }}
          needsOffscreenAlphaCompositing={true}
        >
          <Card.Content>
            <Text variant="titleMedium">{item.label}</Text>
          </Card.Content>
        </Card>
      </Pressable>
    </ScaleDecorator>
  );

  return (
    <SafeAreaView>
      <Button
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "dashed",
          marginHorizontal: 24,
          marginBottom: 16
        }}
        onPress={() => {}}
        icon={() => <MaterialIcons name="add" size={22} />}
      >
        <Text style={{ color: "black" }}>Create simple block</Text>
      </Button>
      <Button
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "dashed",
          marginHorizontal: 24,
        }}
        onPress={() => {}}
        icon={() => <MaterialIcons name="add" size={22} />}
      >
        <Text style={{ color: "black" }}>Add custom block</Text>
      </Button>
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingHorizontal: 24 }}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
// });
