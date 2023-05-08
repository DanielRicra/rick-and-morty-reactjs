import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = ({ access }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  return (
    <div className="container">
      About
    </div>
  )
}

export default About;