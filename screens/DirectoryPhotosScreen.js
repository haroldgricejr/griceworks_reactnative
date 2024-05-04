// Original working Directory code for list with avatar, title, and description layout

import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { PROJECTS } from '../shared/ photoProjects';

const DirectoryScreen = ({ navigation }) => {
    const [photoProjects, setPhotoProjects] = useState(PROJECTS);

    const renderDirectoryItem = ({ item: photoProject }) => {
        return (
            <ListItem
                // key={photoProject.id}
                onPress={() =>
                    navigation.navigate('PhotoInfo', { photoProject })
                }
            >
                <Avatar source={photoProject.image} rounded />
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





// import { useState } from 'react';
// import { FlatList } from 'react-native';
// import { Avatar, ListItem } from 'react-native-elements';
// import { PROJECTS } from '../shared/ photoProjects';
// import { Image } from 'react-native-elements';
// import { View } from 'react-native';
// import { StyleSheet } from 'react-native';

// const DirectoryScreen = ({ navigation }) => {
//     const [photoProjects, setPhotoProjects] = useState(PROJECTS);

//     const renderDirectoryItem = ({ item: photoProject }) => {
//         return (
//             <ListItem>
//                 <View>
//                     <Image 
//                         style={{ width: 250, height: 250 }}
//                         source={photoProject.icon}  
//                         />
//                 </View>
//             </ListItem>
//         );
//     };
//     return (
//         <FlatList
//             data={photoProjects}
//             renderItem={renderDirectoryItem}
//             keyExtractor={(item) => item.id.toString()}
//         />
//     );
// };

// export default DirectoryScreen;