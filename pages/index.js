import React from 'react';

class Index extends React.Component {
  state = {
    something: 'something',
  }

  setSomethingToUndefined = () => {
    this.setState({
      something: undefined,
    });
  }

  render() {
    console.log(this.state.something.length);
    return (
      <div>
        <p>Click the button below to trigger an error</p>
        <button onClick={this.setSomethingToUndefined}>Trigger Error</button>
      </div>
    );
  }
}


export default Index;
