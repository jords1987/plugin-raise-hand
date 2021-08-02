import React from "react";
import PanTool from "@material-ui/icons/PanTool";
import PanToolOutlined from "@material-ui/icons/PanToolOutlined";
import { StateToProps, DispatchToProps } from "./worker-hand.container";
import { WorkerHandStyles, StyledIconButton } from "./worker.hand.styles";

interface OwnProps {}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

export default class workerHand extends React.Component<Props> {
  render() {
    return (
      <WorkerHandStyles>
        {this.props.isRaised ? (
          <StyledIconButton
            onClick={this.props.lowerHand}
            aria-label="raisedHand"
          >
            <PanTool />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            onClick={this.props.raiseHand}
            aria-label="loweredHand"
          >
            <PanToolOutlined />
          </StyledIconButton>
        )}
      </WorkerHandStyles>
    );
  }
}
