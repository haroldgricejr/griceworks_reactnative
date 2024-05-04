import RenderPhotoProject from "../features/projects/RenderPhotoProject";

const PhotoInfoScreen = ({ route }) => {
    const { photoProject } = route.params;
    return <RenderPhotoProject 
        // key={photoProject.id}
        photoProject={photoProject} 
        />;
};

export default PhotoInfoScreen;