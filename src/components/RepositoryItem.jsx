import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Text style={styles.strong}>id: {props.id}</Text>
            <Text>Name: {props.fullName}</Text>
            <Text>Description: {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Forks: {props.forksCount}</Text>
            <Text>Rating: {props.ratingAvverage}</Text>
            <Text>Reviews: {props.reviewCount}</Text>
            <Text>Stargazer: {props.stargazersCount}</Text>
            <Text>Avatar Url: {props.ownerAvatarUrl}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom:5,
        paddingTop: 5
    },
    strong: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'blue'
    }
})

export default RepositoryItem;