import { Stack } from "expo-router";

export default function HiddenStack() {
  return (
    <Stack screenOptions={{ headerShown: true, headerTitle: "New training routine" }} />
  );
}
