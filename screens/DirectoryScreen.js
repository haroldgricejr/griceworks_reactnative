import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { PROJECTS } from '../shared/projects';

const DirectoryScreen = ({ navigation }) => {
    const [projects, setProjects] = useState(PROJECTS);

    const renderDirectoryItem = ({ item: project }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('ProjectInfo', { project })
                }
            >
                <Avatar source={project.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{project.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {project.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={projects}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;