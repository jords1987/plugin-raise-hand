import { AppState, namespace } from "../../states";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import workerHand from "./worker-hand";

import { Actions } from "../../states/worker-hand";

export interface StateToProps {}

export interface DispatchToProps {}

const mapStateToProps = (state: AppState): StateToProps => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(workerHand);
