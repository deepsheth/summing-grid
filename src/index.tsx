import * as React from "react";
import { render } from "react-dom";
import { Grid, Input, SumInput } from "./index.styles";
import "./styles.css";

const APP_CONFIG = {
  defaultNumColumns: 4,
  isGridSingleRow: false
};

class App extends React.Component {
  state = {
    inputValues: ["0", "0", "0"]
  };

  isValidNumber(value: string) {
    return isNaN(+value);
  }

  /**
   * TODO: Implement logic for decimals, K, M, B, T
   * @param num
   */
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
    return n;
  }

  sum() {
    const sum = this.state.inputValues.reduce(
      (total: number, value: string): number => {
        return parseInt(total.toString(), 10) + (parseInt(value, 10) || 0);
      },
      0
    );

    return this.abbrNum(sum);
  }

  handleChange = (value, idx) => {
    const updatedInputValues = [...this.state.inputValues];
    updatedInputValues[idx] = value;
    this.setState({ inputValues: updatedInputValues });
  };

  render() {
    return (
      <div className="App">
        <Grid
          maxColumns={
            APP_CONFIG.isGridSingleRow
              ? this.state.inputValues.length + 1
              : APP_CONFIG.defaultNumColumns
          }
        >
          {this.state.inputValues.map((currentValue, idx) => (
            <Input
              key={`input-${idx}`}
              type="text"
              value={currentValue}
              hasError={this.isValidNumber(currentValue)}
              onChange={e => this.handleChange(e.target.value, idx)}
            />
          ))}

          <SumInput type="text" value={this.sum()} readOnly />
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
