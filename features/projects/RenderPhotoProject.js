import React from 'react';
import { View, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

const RenderPhotoProject = ({ photoProject }) => {
    if (photoProject && photoProject.creatives && photoProject.creatives.length > 0) {
        return (
            <ScrollView>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {photoProject.creatives.map(creative => (
                        <Image 
                            key={creative}
                            style={{ width: 400, height: 525 }}
                            source={creative}
                        />
                    ))}
                </View>
            </ScrollView>
        );
    }
    return <View />;
};

export default RenderPhotoProject;

