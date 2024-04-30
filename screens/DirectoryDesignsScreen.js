import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { DESIGNPROJECTS } from '../shared/designProjects';

const DirectoryDesignScreen = ({ navigation }) => {
    const [designProjects, setDesignProjects] = useState(DESIGNPROJECTS);

    const renderDirectoryItem = ({ item: designProject }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('DesignInfo', { designProject })
                }
            >
                <Avatar source={designProject.icon} />
                <ListItem.Content>
                    <ListItem.Title>{designProject.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {designProject.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={designProjects}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryDesignScreen;