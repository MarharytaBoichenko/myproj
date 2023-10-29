import React from "react";

interface Props {
  error: boolean;
}

class ErrorTest extends React.Component {
  state: Props;

  constructor(props: object) {
    super(props);
    this.state = { error: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error("Oops, something went wrong!");
    }
    return (
      <button onClick={this.handleClick} className="button search__button">
        Test Error
      </button>
    );
  }
}

export default ErrorTest;
