import { ScrollView, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { Image } from 'react-native-elements';

const AboutScreen = () => {
    
    return (
        <ScrollView>
            
            <Card>
                <Card.Title>About</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 10 }}>
                Welcome to Grice.Works. I am a passionate developer with a keen eye for aesthetis and a flair for creativity. I take pride in creating stunning and user-friendly websites that leave a lasting impression. I'm always up for challenges and love staying updated with the latest design trends and technologies.
                </Text>
            </Card>

            <Card>
                <Card.Title>Skills</Card.Title>
                <Card.Divider />

                <ListItem>
                        <Avatar
                            rounded
                            source={require('../assets/images/skills_javascript_logo.png')}  
                        />
                        <ListItem.Content>
                            <ListItem.Title>Javascript</ListItem.Title>
                                <ListItem.Subtitle>
                                Experience: 1 Year 
                                </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    
                    <ListItem>
                        <Avatar
                            // rounded
                            source={require('../assets/images/skills_html5_logo.png')}  
                        />
                        <ListItem.Content>
                            <ListItem.Title>HTML5</ListItem.Title>
                                <ListItem.Subtitle>
                                    Experience: 3 Years 
                                </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>

                    <ListItem>
                        <Avatar
                            rounded
                            source={require('../assets/images/skills_bootstrap_logo.png')}  
                        />
                        <ListItem.Content>
                            <ListItem.Title>CSS3 + Bootstrap</ListItem.Title>
                                <ListItem.Subtitle>
                                Experience: 3 Years 
                                </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>

                    <ListItem>
                        <Avatar
                            rounded
                            source={require('../assets/images/skills_figma_logo.png')}  
                        />
                        <ListItem.Content>
                            <ListItem.Title>Figma</ListItem.Title>
                                <ListItem.Subtitle>
                                    Experience: 3 Years 
                                </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>

                    <ListItem>
                        <Avatar
                            rounded
                            source={require('../assets/images/skills_photoshop_logo.png')}  
                        />
                        <ListItem.Content>
                            <ListItem.Title>Photoshop</ListItem.Title>
                                <ListItem.Subtitle>
                                    Experience: 8 Years 
                                </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>

            </Card>
       
        </ScrollView>
    );
};

export default AboutScreen;