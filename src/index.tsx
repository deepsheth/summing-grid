import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    col: [0, 0, 0],
    sum: 0
  };

  abbrNum(num: number) {
    const K = "K";
    const M = "M";
    let n = "";

    if (num >= 1000 && num < 1000000) {
      n = (num / 1000).toFixed(3) + K;
    } else if (num >= 1000000) {
      n = (num / 1000000).toFixed(3) + M;
    } else {
      return num;
    }

    console.log(n);
    return n;
  }

  sum(arr: number[]) {
    const sum = arr.reduce((total, num) => {
      return parseInt(total.toString(), 10) + parseInt(num.toString(), 10);
    });

    return this.abbrNum(sum);
  }

  handleChange(value, idx) {
    const updatedCol = this.state.col.slice();
    updatedCol[idx] = value;
    this.sum(updatedCol);
    this.setState({ col: updatedCol });
  }

  render() {
    return (
      <div className="App">
        {this.state.col.map((col, idx) => (
          <div className="col">
            <input
              type="number"
              value={col}
              onChange={e => this.handleChange(e.target.value, idx)}
            />
          </div>
        ))}

        <div className="col">
          <input type="text" value={this.sum(this.state.col)} readOnly />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
