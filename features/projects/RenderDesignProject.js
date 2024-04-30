import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderDesignProject = ({ designProject }) => {
    if (designProject) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={designProject.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {designProject.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{designProject.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderDesignProject;