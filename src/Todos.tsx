import * as React from "react";
import { render } from "react-dom";

export class Todos extends React.Component<{todos: any},{todos: any}> {
  render() {
    console.log(this.props.todos)
    return (
      this.props.todos.map((todo) => {
        return <h3>{todo.title}</h3>
      })
    )
  }

}