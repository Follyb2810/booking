import { useParams } from "react-router-dom";

const About = () => {
    const { service } = useParams();
    return (
        <div>
            About {service}
        </div>
    )
}

export default About
