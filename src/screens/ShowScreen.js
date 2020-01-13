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
    <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
        <Text>{blogPost.id}</Text>

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
const styles = StyleSheet.create({});

export default ShowScreen;