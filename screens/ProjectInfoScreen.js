import RenderProject from "../features/projects/RenderProject";

const ProjectInfoScreen = ({ route }) => {
    const { project } = route.params;
    return <RenderProject project={project} />;
};

export default ProjectInfoScreen;