import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderProject = ({ project }) => {
    if (project) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={project.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {project.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{project.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderProject;