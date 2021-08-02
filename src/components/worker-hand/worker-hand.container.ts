import { AppState, namespace } from "../../states";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import workerHand from "./worker-hand";

import { Actions } from '../../states/worker-hand';

export interface StateToProps {
    isRaised: boolean,
}

export interface DispatchToProps {
    raiseHand: () => void,
    lowerHand: () => void,
}

const mapStateToProps = (state: AppState): StateToProps => ({   
  isRaised: state[namespace].workerHand.isRaised,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  raiseHand: bindActionCreators(Actions.rasieHand, dispatch),
  lowerHand: bindActionCreators(Actions.lowerHand, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(workerHand);
