import React, { useState, useEffect } from "react";
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading.jsx";
import ScrollService from "../../../utilities/ScrollService.jsx";
import Animations from "../../../utilities/Animations.jsx";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-sub-heading2">
          <span>{props.subHeading2 ? props.subHeading2 : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "MySQL", ratingPercentage: 70 },
    { skill: "Axios", ratingPercentage: 80 },
    { skill: "Git", ratingPercentage: 80 },
    { skill: "AWS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Full Stack Engineer - Sound Crate",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Created audio based social media platform",
      subHeading: "Technologies Used: React | Express | Node.js | AWS | PostgreSQL | Jest",
    },
    {
      title: "Backend Engineer - GoldenFan Shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Designed back end for ecommerce web app & REST API",
      subHeading:
        "Technologies Used:  REST API | Express | Node.js | MongoDB | NGINX | AWS",
    },
    {
      title: "Frontend Engineer - Atelier",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Crafted online ecommerce website for showcasing and selling clothing",
      subHeading:
        "Technologies Used: React | Express | Node.js | MongoDB | Jest",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Hack Reactor Software Engineering Immersive"}
        subHeading={"Full stack software engineering practices and priciples"}
        subHeading2={"-Class President"}
        fromDate={"2022"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Arizona State University"}
        subHeading={"BACHELOR OF SCIENCE SUPPLY CHAIN MANAGEMENT"}
        subHeading2={"-Elected Senator for W.P. Carey School of Business - Undergraduate Student Government"}
        fromDate={"2014"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Chandler, AZ"}
        fromDate={"2010"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Aya Healthcare"}
          subHeading={"Payroll Representative"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {/* Currently working as a Payroll Representative for healthcare staffing firm */}
          </span>
        </div>
        </div>
        <div className="experience-container">
        <ResumeHeading
          heading={"Allied First Bank"}
          subHeading={"Mortgage Loan Originator"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {/* Currently working as a Payroll Representative for healthcare staffing firm */}
          </span>
        </div>
        </div>
        <div className="experience-container">
        <ResumeHeading
          heading={"Shea Homes"}
          subHeading={"National Purchasing Administrator"}
          fromDate={"2018"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {/* Currently working as a Payroll Representative for healthcare staffing firm */}
          </span>
        </div>
        </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel"
        description="I'm an avid traveler who loves exploring new cultures and meeting people from all walks of life. Whether I'm backpacking through the mountains or soaking up the local food and music scene, I'm always up for an adventure and eager to learn more about the world around me.
        "
      />
      <ResumeHeading
        heading="Music"
        description="I find great joy in exploring the world of sound and rhythm. I feel a deep connection to the power of music to move and inspire us. Current Obession: lofi"
      />
      <ResumeHeading
        heading="Film"
        description="All my life I have deeply enjoyed storytelling through cinema. I'm captivated by the power of film to transport us to different times and places, to connect us to new ideas and perspectives, and to inspire us with the beauty and complexity of the human experience."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        {/* <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        /> */}
        <a className="bullet-logo"></a>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
