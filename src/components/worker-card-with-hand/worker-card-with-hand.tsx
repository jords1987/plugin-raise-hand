import React from "react";
import { UserCard, IWorker } from "@twilio/flex-ui";

interface OwnProps {
  worker: IWorker
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = OwnProps;

export default class WorkerCardWithHand extends React.Component<Props> {
  constructor(props: Props){
    super(props)
  }

  render() {
    return (
      <UserCard large imageUrl={this.props.worker.attributes.image_url ?? `https://eu.ui-avatars.com/api/?name=${this.props.worker.fullName.replace(' ','+')}&bold=true&background=random&size=500`} firstLine={this.props.worker.fullName ?? "this.props.worker.sid"} secondLine={`${this.props.worker.activityName} | ${this.props.worker.activityDuration}`} ></UserCard>
    );
  }
}