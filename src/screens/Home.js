import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { clearError, setError } from '../redux/actions/errorActions';
import { showMessage } from 'react-native-flash-message';

const Home = ({ error, dispatch }) => {

    useEffect(() => {
        return () => {
          // Clear the error when the component is unmounted
          dispatch(clearError());
        };
      }, [dispatch]);

  return (
    <View>
     <Text>Welcome to the Home Screen!</Text>
     <Button title='hello' onPress={()=> dispatch(setError("error fhgrhgrhrh"))}/>
     <Button title='flash' onPress={()=> {
        showMessage({
  message: "My message title",
  description: "My message description",
  type: "default",
  backgroundColor: "purple", // background color
  color: "#606060", // text color
});
     }}/>
    {error && <Text>{error}</Text>} 
    </View>
  )
}

const mapStateToProps = (state) => ({
    error: state.error.error,
  });
  
  export default connect(mapStateToProps)(Home); 

const styles = StyleSheet.create({})