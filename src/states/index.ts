import { AppState as FlexAppState } from '@twilio/flex-ui';
import workerHand from 'components/worker-hand/worker-hand';
import { combineReducers, Action as ReduxAction } from 'redux';

import { CustomTaskListState, reduce as CustomTaskListReducer } from './CustomTaskListState';
import { WorkerHandState, reduce as workerHandReducer } from './worker-hand';

// Register your redux store under a unique namespace
export const namespace = 'raise-hand';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  'raise-hand': {
    customTaskList: CustomTaskListState;
    workerHand: WorkerHandState;
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  customTaskList: CustomTaskListReducer,
  workerHand: workerHandReducer
});
