import { Card, Button } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <div className="text-center pt-5">
        <h1 className="pb-3 display-4">Hi, I am Arunkumar.</h1>
        <p
          className="mx-auto w-75"
          style={{ fontSize: "1.7rem", fontWeight: "200" }}
        >
          I am a Software Developer and also a DevOps expert. I am passionate
          about coding. I can build APIs, scalable React and NodeJs production
          grade applications.
        </p>
        <p
          className="mx-auto w-75"
          style={{ fontSize: "1.7rem", fontWeight: "200" }}
        >
          Also i have experience in Scaling, Load Balancing and Containerization. In addition to that i have also worked on AWS and Digital
          Ocean cloud and their APIs.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
