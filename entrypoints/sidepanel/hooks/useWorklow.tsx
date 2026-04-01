import { useState } from 'react';
import { useRecording } from './useRecording';
import { WorkflowState } from '@/lib/enums';
// import { uploadAudio } from '@/lib/objectStorage';
// import { submitAudio } from '@/lib/api';
// import { openSSEChannel } from '@/lib/sse';

export function useWorkflow() {
  const [state, setState] = useState<WorkflowState>(WorkflowState.IDLE);
  const [workflowId, setWorkflowId] = useState<string | null>(null);

  const {
    startRecording,
    stopRecording,
    cancelRecording,
    audioBlob,
  } = useRecording();

  async function handleStart() {
    await startRecording();
    setState(WorkflowState.RECORDING);
  }

  async function handleConfirm() {
    stopRecording();
    setState(WorkflowState.PROCESSING);

    // audioBlob is set asynchronously by MediaRecorder.onstop
    // so we wait for it via the upload step
  }

  function handleCancel() {
    cancelRecording();
    setState(WorkflowState.IDLE);
  }

//   async function runWorkflow(blob: Blob) {
//     const objectKey = await uploadAudio(blob);
//     const { workflowId } = await submitAudio(objectKey);
//     setWorkflowId(workflowId);
//     openSSEChannel(workflowId, onStatus);
//   }

//   function onStatus(status: string) {
//     if (status === 'AWAITING_DOM') {
//       sendMessage('captureAndSubmitDom', { workflowId });
//     }
//     if (status === 'DONE') {
//       setState(RecordingState.DONE);
//     }
//   }

  return {
    state,
    workflowId,
    handleStart,
    handleConfirm,
    handleCancel,
  };
}