import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderPhotoProject = ({ photoProject }) => {
    if (photoProject) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={photoProject.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {photoProject.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{photoProject.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderPhotoProject;


// Code below is in-progress attempt to iterate through array of images by project...using RenderPhotoProject function 

// import { View, Image } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { useState } from 'react';
// import { PROJECTS } from '../../shared/ photoProjects';

// const RenderPhotoProject = ({ photoProject }) => {
//     const [photoProjects, setPhotoProjects] = useState(PROJECTS);

//     if (photoProject) {
//         return (
//             <View>
//                 <Image 
//                     source={photoProject.image}
//                 />
//             </View>
//         )
//     }
//     return (
//         <FlatList
//             data={photoProjects}
//             renderItem={RenderPhotoProject}
//             keyExtractor={(item) => item.id.toString()}
//         />
//     );
// };

// export default RenderPhotoProject;