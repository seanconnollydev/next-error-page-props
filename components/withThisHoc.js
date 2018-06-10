import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const enhance = (WrappedComponent) => {
  class WithThisHoc extends React.Component {
    static getInitialProps() {
      return { val: 123 };
    }

    render() {
      console.log('This should log a value of 123:', this.props.val);

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return WithThisHoc;
};

export default enhance;
