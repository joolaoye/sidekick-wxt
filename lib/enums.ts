export const WorkflowState = {
    IDLE: 'idle',
    RECORDING: 'recording',
    PROCESSING: 'processing',
    DONE: 'done',
  } as const;
  
  export type WorkflowState = typeof WorkflowState[keyof typeof WorkflowState];
