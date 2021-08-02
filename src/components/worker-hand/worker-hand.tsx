import React from "react";
import PanTool from "@material-ui/icons/PanTool";
import PanToolOutlined from "@material-ui/icons/PanToolOutlined";
import { StateToProps, DispatchToProps } from "./worker-hand.container";
import { WorkerHandStyles, StyledIconButton } from "./worker.hand.styles";
import { Worker } from "twilio-taskrouter";
import { SyncClient } from "twilio-sync";

interface OwnProps {
  worker: Worker;
  syncClient: SyncClient;
  canInteract: boolean;
}

interface WorkerHandState {
  isRaised: boolean;
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

export default class workerHand extends React.Component<
  Props,
  WorkerHandState
> {
  constructor(props: Props) {
    super(props);
  }

  readonly state: WorkerHandState = {
    isRaised: false,
  };

  readonly workerHandStateDocName = `${this.props.worker.sid}-HandState`;

  async componentDidMount() {
    var syncDoc = await this.props.syncClient.document(
      this.workerHandStateDocName
    );
    var docState = syncDoc.value as WorkerHandState;

    await this.handleDocUpdate(docState);

    syncDoc.on("updated", async (event) => {
      await this.handleDocUpdate(event.value as WorkerHandState);
    });
  }

  handleDocUpdate = async (state: WorkerHandState) => {
    await this.setState({
      ...this.state,
      isRaised: state.isRaised,
    });
  };

  handleRaiseHand = async () => {
    if (!this.props.canInteract) return;

    var syncDoc = await this.props.syncClient.document(
      this.workerHandStateDocName
    );
    var docState = syncDoc.value as WorkerHandState;
    docState.isRaised = true;
    
    syncDoc.update(docState);
  };

  handleLowerHand = async () => {
    if (!this.props.canInteract) return;

    var syncDoc = await this.props.syncClient.document(
      this.workerHandStateDocName
    );
    var docState = syncDoc.value as WorkerHandState;

    docState.isRaised = false;

    syncDoc.update(docState);
  };

  render() {
    return (
      <WorkerHandStyles>
        {this.state.isRaised ? (
          <StyledIconButton
            onClick={this.handleLowerHand}
            aria-label="lowereddHand"
          >
            <PanTool />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            onClick={this.handleRaiseHand}
            aria-label="raisedHand"
          >
            <PanToolOutlined />
          </StyledIconButton>
        )}
      </WorkerHandStyles>
    );
  }
}
