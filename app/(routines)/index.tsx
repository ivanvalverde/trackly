import { TrainingRoutineCard } from "@/components/TrainingRoutineCard";
import { DataContext } from "@/contexts/data";
import { TrainingRoutine } from "@/definitions/types";
import { MaterialIcons } from "@expo/vector-icons";
import * as Crypto from 'expo-crypto';
import { router } from "expo-router";
import { useContext } from "react";
import { FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Routines() {
  const { routines, setRoutines } = useContext(DataContext);

  const addRoutine = () => {
    router.push({
      pathname: `/(routines)/[id]`,
      params: { id: Crypto.randomUUID() },
    });
    // setRoutines((prevState) => [
    //   ...prevState,
    //   { title: "nova", duration: 2, steps: [] },
    // ]);
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
      <Button
        style={{ borderWidth: 1, borderColor: "black", borderStyle: "dashed" }}
        onPress={addRoutine}
        icon={() => <MaterialIcons name="add" size={22} />}
      >
        <Text>Create Routine</Text>
      </Button>
      <FlatList<TrainingRoutine>
        data={routines}
        renderItem={({ item }) => (
          <TrainingRoutineCard title={item.title} duration={item.duration} />
        )}
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
