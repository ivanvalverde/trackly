import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

interface ITrainingRoutineCard {
  title: string;
  duration: number;
}

export const TrainingRoutineCard = ({
  title,
  duration,
}: ITrainingRoutineCard) => {
  return (
    <Card
      mode="outlined"
      style={{ backgroundColor: "transparent", marginVertical: 20, borderColor: "black" }}
    >
      <Card.Title
        title={title}
        // subtitle="Card Subtitle"
        left={() => <Text>{String(duration)}</Text>}
        right={(props) => <TrainingRoutineActions />}
      />
    </Card>
  );
};

const TrainingRoutineActions = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <IconButton icon={() => <MaterialIcons name="edit" size={22} />} />
      <IconButton icon={() => <MaterialIcons name="delete" size={22} />} />
    </View>
  );
};
