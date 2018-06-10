import React from 'react';

export default (WrappedComponent) => {
  return class WithThisHoc extends React.Component {
    static async getInitialProps(ctx) {
      let props = {}

      if (WrappedComponent.getInitialProps) {
        props = await WrappedComponent.getInitialProps(ctx)
      }

      return {...props, val: 123}
    }

    render() {
      console.log('This should log a value of 123:', this.props.val);

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}
