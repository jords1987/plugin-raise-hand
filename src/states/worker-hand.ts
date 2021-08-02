import { Action } from "./index";

export interface WorkerHandState {}

const initialState: WorkerHandState = {};

export class Actions {}

export function reduce(state: WorkerHandState = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
