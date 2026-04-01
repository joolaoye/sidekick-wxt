import { useState } from 'react';
import { useWorkflow } from './hooks/useWorklow';
import { WorkflowState } from '@/lib/enums';
import { IdleDisplay } from './components/IdleDisplay';
import { RecordingDisplay } from './components/RecordingDisplay';


export default function App() {
  const { state, handleStart, handleConfirm, handleCancel } = useWorkflow();

  return (
    <div className="flex flex-col h-screen">
      {/* <StatusDisplay state={state} />
      <FeedbackDisplay state={state} /> */}
      {state === WorkflowState.IDLE && <IdleDisplay onStart={handleStart} />}
      {state === WorkflowState.RECORDING && <RecordingDisplay onCancel={handleCancel} onConfirm={handleConfirm} />}
      {/* {state === WorkflowState.PROCESSING && <Spinner />} */}
    </div>
  );
}
