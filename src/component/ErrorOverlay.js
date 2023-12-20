// ErrorOverlay.js
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearError } from '../redux/actions/errorActions';

const ErrorOverlay = ({ error, clearError }) => {
  if (!error) {
     return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.overlayContent}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Close" onPress={clearError} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position:"relative",
    zIndex: 999, // Ensure it's rendered on top of other components
  },
  overlayContent: {
    position:"absolute",
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width as needed
  },
  errorText: {
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  error: state.error.error,
});

const mapDispatchToProps = {
  clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorOverlay);
