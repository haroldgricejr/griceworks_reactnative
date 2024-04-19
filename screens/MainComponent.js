import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import ProjectInfoScreen from './ProjectInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Directory'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff'
                }}
            >
                <Stack.Screen
                    name='Directory'
                    component={DirectoryScreen}
                    options={{ title: 'Project Directory' }}
                />
                <Stack.Screen
                    name='ProjectInfo'
                    component={ProjectInfoScreen}
                    options={({ route }) => ({
                        title: route.params.project.name
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <DirectoryNavigator />
        </View>
    );
};

export default Main;