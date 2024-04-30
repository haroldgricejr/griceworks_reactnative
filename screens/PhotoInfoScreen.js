// import RenderPhotoProject from "../features/projects/RenderPhotoProject";

// const PhotoInfoScreen = ({ route }) => {
//     const { photoProject } = route.params;
//     return <RenderPhotoProject photoProject={photoProject} />;
// };

// export default PhotoInfoScreen;



import RenderPhotoProject from "../features/projects/RenderPhotoProject";

const PhotoInfoScreen = ({ route }) => {
    const { photoProject } = route.params;
    return <RenderPhotoProject photoProject={photoProject} />;
};

export default PhotoInfoScreen;