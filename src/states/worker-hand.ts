import { Action } from "./index";

const ACTION_LOWER_HAND = 'LOWER_HAND';
const ACTION_RAISE_HAND = 'RAISE_HAND';

export interface WorkerHandState {
  isRaised: boolean,
}

const initialState: WorkerHandState = {
  isRaised: false,
};

export class Actions {
  public static lowerHand = (): Action => ({ type: ACTION_LOWER_HAND });
  public static rasieHand = (): Action => ({ type: ACTION_RAISE_HAND });
}

export function reduce(state: WorkerHandState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_LOWER_HAND: {
      return {
        ...state,
        isRaised: false,
      };
    }
    case ACTION_RAISE_HAND: {
      return {
        ...state,
        isRaised: true,
      };
    }
    default:
      return state;
  }
}
