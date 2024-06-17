import { Component } from "react";
import withCounter from "./withCounter";

class ClassBasedCounter extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-3xl capitalize">{this.props.name}</h1>
          <h1 className="text-2xl">{this.props.count}</h1>
          <div>
            <button
              className="px-4 py-2 bg-blue-600 rounded text-white capitalize "
              onClick={this.props.increase}
            >
              increament
            </button>
            <button
              className="px-4 py-2 bg-blue-600 rounded text-white capitalize ml-4"
              onClick={this.props.reset}
            >
              reset
            </button>
            <button
              className="px-4 py-2 bg-blue-600 rounded text-white capitalize ml-4"
              onClick={this.props.decrease}
            >
              decreament
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withCounter(ClassBasedCounter);
