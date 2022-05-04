import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {

     
    // console.log('Repos', repositories);

    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={()=><Text> <br /></Text>}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo} />
            )}
        ></FlatList>
    )
}

export default RepositoryList;