import { type ReactNode } from 'react';

export interface BaseLine {
  id: string;
  startMillisecond: number;
}

export interface BaseProps<Line extends BaseLine> {
  lineRenderer: ({
    index,
    active,
    line,
  }: {
    index: number;
    active: boolean;
    line: Line;
  }) => ReactNode;
  currentMillisecond?: number;
  verticalSpace?: boolean;
  onLineUpdate?: (line: { index: number; line: Line | null }) => void;
  recoverAutoScrollInterval?: number;
  recoverAutoScrollSingal?: boolean;
}

export const DEFAULT_PROPS = {
  currentMillisecond: -1,
  verticalSpace: false,
  recoverAutoScrollInterval: 5000,
  recoverAutoScrollSingal: false,
} as const;
