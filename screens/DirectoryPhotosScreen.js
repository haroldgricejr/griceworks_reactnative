import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { PROJECTS } from '../shared/ photoProjects';

const DirectoryScreen = ({ navigation }) => {
    const [photoProjects, setPhotoProjects] = useState(PROJECTS);

    const renderDirectoryItem = ({ item: photoProject }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('PhotoInfo', { photoProject })
                }
            >
                <Avatar source={photoProject.icon}  />
                <ListItem.Content>
                    <ListItem.Title>{photoProject.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {photoProject.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={photoProjects}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;