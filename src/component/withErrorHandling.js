// withErrorHandling.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearError } from '../redux/actions/errorActions';


const withErrorHandling = (WrappedComponent) => {
  class ErrorHandlingWrapper extends Component {
    componentDidCatch(error, errorInfo) {
console.log("eror",error)
console.log("errorInfo",errorInfo)
      // Log the error to your server or perform any additional actions
      // You can dispatch the error to Redux for global state management
      this.props.dispatch(clearError());
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    error: state.error.error,
  });

  return connect(mapStateToProps)(ErrorHandlingWrapper);
};

export default withErrorHandling;
