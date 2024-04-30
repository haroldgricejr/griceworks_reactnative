import RenderDesignProject from "../features/projects/RenderDesignProject";

const DesignInfoScreen = ({ route }) => {
    const { designProject } = route.params;
    return <RenderDesignProject designProject={designProject} />;
};

export default DesignInfoScreen;