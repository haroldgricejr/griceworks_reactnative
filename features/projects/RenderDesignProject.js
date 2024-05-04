import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Image } from 'react-native-elements';

const RenderDesignProject = ({ designProject }) => {
    if (designProject) {
        return (
            <ScrollView>
                <Card containerStyle={{ padding: 0, marginBottom: 20 }}>
                    <Card.Image source={designProject.image}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            {/* <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 20
                                }}
                            >
                                {designProject.name}
                            </Text> */}
                        </View>
                    </Card.Image>
                    <Card.Title style={{ margin: 20 }}>Company Description</Card.Title>
                    <Card.Divider />
                    <Text style={{ margin: 20 }}>{designProject.overview}</Text>
                </Card>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {designProject.creatives.map(creative => (
                        <Image 
                            key={creative}
                            style={{ width: 360, height: 300 }}
                            source={creative}
                        />
                    ))}
                </View>
            </ScrollView>

        );
    }
    return <View />;
};

export default RenderDesignProject;