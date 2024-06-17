import { Component } from "react";
import counter from "./counter";

// higherOrder component

export default function withCounter(Com) {
  return class WithCounter extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
      this.increase = () => {
        this.setState({ count: this.state.count + 1 });
      };
      this.decrease = () => {
        this.setState({ count: this.state.count - 1 });
      };
      this.reset = () => {
        this.setState({ count: 0 });
      };
    }

    render() {
      return (
        <Com
          name={this.props.name}
          count={this.state.count}
          increase={this.increase}
          decrease={this.decrease}
          reset={this.reset}
        />
      );
    }
  };
}
