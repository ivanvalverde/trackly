export type TrainingRoutine = {
  title: string;
  duration: number;
  steps: TrainingStep[];
};

export type TrainingStep = {
  title: string;
  duration: number;
};
