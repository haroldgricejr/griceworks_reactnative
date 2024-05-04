import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image 
                    source={require('../assets/images/photoThumb.png')} 
                    onPress={() => navigation.navigate('DirectoryPhotos')}
                >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                    </View>
                </Card.Image>
                <Text style={styles.cardText}>{'Photography'}</Text>
            </Card>

            <Card containerStyle={{ padding: 0 }}>
                <Card.Image 
                    source={require('../assets/images/designThumb.png')} 
                    onPress={() => navigation.navigate('DirectoryDesigns')}
                >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                    </View>
                </Card.Image>
                <Text style={styles.cardText}>{'Design'}</Text>
            </Card>

            <Card containerStyle={{ padding: 0 }}>
                <Card.Image 
                source={require('../assets/images/aboutThumb.png')} 
                onPress={() => navigation.navigate('AboutPage')}
                >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                    </View>
                </Card.Image>
                <Text style={styles.cardText}>{'About'}</Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 18,
    },
})

export default HomeScreen;