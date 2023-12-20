import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { clearError, setError } from '../redux/actions/errorActions';
import { hideMessage, showMessage } from 'react-native-flash-message';

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
     <Button title='flash Top' onPress={()=> {
        showMessage({
          hideOnPress:true,
          hideStatusBar:true,
          position:"top",
          floating:true,
  message: "My message title",
  description: "My message description",
  type: "default",
  backgroundColor: "lightblue", 
  color: "#606060", 
});
     }}/>
     <Button title='flash Center' onPress={()=> {
        showMessage({hideOnPress:true,
          hideStatusBar:true,
          floating:true,
       position:"center",
  message: "My message title",
  description: "My message description",
  type: "default",
  backgroundColor: "lightblue", 
  color: "#606060", 
});
     }}/>
     <Button title='flash Bottom' onPress={()=> {
        showMessage({
          hideOnPress:true,
          floating:true,
          hideStatusBar:true,
          style:{backgroundColor:"white",borderColor:"blue",borderRadius:5},
          renderBeforeContent: () => <View>
<Button title=' befor ajay'/>
          </View>,
          renderCustomContent: () => <View>
<Button title='ajay' onPress={hideMessage}/>
          </View>,
          renderBeforeContent: () => <View>
<Button title=' after ajay'/>
          </View>,
          position:"bottom",
  message: "My message title",
  description: "My message description",
  type: "default",
  backgroundColor: "white",
  color: "#606060", 
});
     }}/>
    </View>
  )
}

const mapStateToProps = (state) => ({
    error: state.error.error,
  });
  
  export default connect(mapStateToProps)(Home); 

const styles = StyleSheet.create({})