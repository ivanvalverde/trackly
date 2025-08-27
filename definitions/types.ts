export type TrainingRoutine = {
  id: string;
  title: string;
  duration: number;
  steps: TrainingBlock[];
};

export type TrainingBlock = {
  id: string;
  title: string;
  duration: number;
  simple: boolean;
};
