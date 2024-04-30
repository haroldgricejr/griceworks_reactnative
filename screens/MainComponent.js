import { Platform, View } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PhotoInfoScreen from './PhotoInfoScreen';
import DirectoryPhotosScreen from './DirectoryPhotosScreen';
import HomeScreen from './HomeScreen';
import DirectoryDesignsScreen from './DirectoryDesignsScreen';
import DesignInfoScreen from './DesignInfoScreen';
import AboutScreen from './AboutScreen';


//HomeScreen Implementation - Adds top title bar as part of Drawer navigator
const Drawer = createDrawerNavigator();



const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';



const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#000000' },
    backgroundColor: '#fff',
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={screenOptions}
            theme={navTheme}
            >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Grice.Works',
                headerBackTitle: 'Back',
             }}
            />
            <Stack.Screen
                    name='DirectoryPhotos'
                    component={DirectoryPhotosScreen}
                    options={{ 
                        title: '',
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name='PhotoInfo'
                    component={PhotoInfoScreen}
                    options={({ route }) => ({
                        title: route.params.photoProject.name, 
                        headerBackTitle: 'Back',
                    })
                    }
                />
                <Stack.Screen
                    name='DirectoryDesigns'
                    component={DirectoryDesignsScreen}
                    options={{ 
                        title: '',
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name='DesignInfo'
                    component={DesignInfoScreen}
                    options={({ route }) => ({
                        title: route.params.designProject.name, 
                        headerBackTitle: 'Back',
                    })
                    }
                />
                <Stack.Screen
                    name='AboutPage'
                    component={AboutScreen}
                    options={{ 
                        title: '',
                        headerBackTitle: 'Back',
                    }}
                />
        </Stack.Navigator>
    );
};
//HomeScreen Implementation - Adds top title bar as part of Drawer navigator




// const DirectoryNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
        
//             <Stack.Navigator
//                 initialRouteName='Directory'
//                 screenOptions={{
//                     headerStyle: {
//                         backgroundColor: '#5637DD'
//                     },
//                     headerTintColor: '#fff'
//                 }}
//             >
//                 <Stack.Screen
//                     name='Directory'
//                     component={DirectoryPhotosScreen}
//                     options={{ title: 'Project Directory' }}
//                 />
//                 <Stack.Screen
//                     name='ProjectInfo'
//                     component={PhotoInfoScreen}
//                     options={({ route }) => ({
//                         title: route.params.project.name
//                     })}
//                 />
//             </Stack.Navigator>
        
//     );
// };

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <HomeNavigator />
        </View>
    );
};


// const Main = () => {
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 paddingTop:
//                     Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
//             }}
//         >
//             <Drawer.Navigator
//                 initialRouteName='HomeDrawer'
//                 screenOptions={{ drawerStyle: { backgroundColor: '#CEC8FF' }}}
//             >
//                 <Drawer.Screen
//                     name='Home'
//                     component={HomeNavigator}
//                     options={{ title: 'Home' }}
//                 />
//                 <Drawer.Screen
//                     name='Directory'
//                     component={DirectoryNavigator}
//                     options={{ title: 'Directory' }}
//                 />
//             </Drawer.Navigator>
//         </View>
//     );
// };


export default Main;