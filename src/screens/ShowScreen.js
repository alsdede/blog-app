import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);    
    const  blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
    console.log(navigation.getParam('id'));
    console.log(blogPost.id);
    return(
    <View style={styles.container}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
        

    </View>

    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id: navigation.getParam('id')})}>
                        <Feather name="edit-2" size={30}/>
                     </TouchableOpacity>
    };
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10,       
        
    },
    title:{
        marginTop:20,
        fontSize:25,
    },
    content:{
        marginTop:40,
    }
});

export default ShowScreen;