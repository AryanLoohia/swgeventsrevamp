import React, { useState, useEffect } from 'react';
import "./Details.css";
import imgdepc1 from "./images/img2.jpg";
import imgdepc2 from "./images/img3.jpg";
import imgdepc3 from "./images/img4.jpg";
import imgcos1 from "./images/Career Orientation Session Photos/IMG-20240617-WA0027.jpg";
import imgcos2 from "./images/Career Orientation Session Photos/IMG-20240617-WA0043.jpg";
import imgcos3 from "./images/Career Orientation Session Photos/IMG-20240617-WA0024.jpg";
import imgex1 from "./images/Examania Photos/397120462_721461143352848_5776989755791528180_n.jpg";
import imgex2 from "./images/Examania Photos/397204062_721461153352847_1552787017123122556_n.jpg";
import imgex3 from "./images/Examania Photos/397234679_721461146686181_8646735522117274094_n.jpg";
import imgfr1 from "./images/Foresight Photos/Screenshot 2024-06-17 212543.png";
import imgfr2 from "./images/Foresight Photos/Screenshot 2024-06-17 230243.png";
import imgfr3 from "./images/Foresight Photos/Screenshot 2024-06-17 230517.png";
import imgel1 from "./images/ELAT Photos/313425621_492922282873403_8584215068995168928_n (1).jpg";
import imgel2 from "./images/ELAT Photos/315196840_492922229540075_482110438460206506_n.jpg";
import imgel3 from "./images/ELAT Photos/Screenshot 2024-06-17 210935.png";
import imgrg1 from "./images/Research Guidance Webinar Photos/Screenshot 2024-06-17 202330.jpg";
import imgrg2 from "./images/Research Guidance Webinar Photos/Screenshot 2024-06-17 204810.png";
import imgrg3 from "./images/Research Guidance Webinar Photos/Screenshot 2024-06-17 204854.png";
import sta1 from "./images/WhatsApp Image 2024-06-17 at 9.42.07 PM.jpeg";
import sta2 from "./images/Study Abraod 101 Photos/IMG_1387.jpg";
import sta3 from "./images/Study Abraod 101 Photos/IMG_1370.jpg";
import off1 from "./images/Off Campus Talks Photos/Screenshot 2024-06-17 202003.jpg";
import off2 from "./images/Off Campus Talks Photos/Screenshot 2024-06-17 201507.jpg";
import off3 from "./images/Off Campus Talks Photos/Screenshot 2024-06-17 201714.jpg";
import pds1 from "./images/PDS Doubt Session Photos/IMG-20240617-WA0110.jpg";
import pds2 from "./images/PDS Doubt Session Photos/IMG-20240617-WA0111.jpg";
import pds3 from "./images/PDS Doubt Session Photos/IMG-20240617-WA0105.jpg";
import cp1 from "./images/Campus Tour Photos/Screenshot 2024-06-17 210801.png";
import cp2 from "./images/Campus Tour Photos/313971936_492921729540125_2117024833820664398_n.jpg";
import cp3 from "./images/Campus Tour Photos/WhatsApp Image 2024-06-17 at 21.05.30_46804099.jpg";
import sf1 from "./images/WhatsApp Image 2024-06-17 at 19.06.51_2e03d655.jpg";
import sf2 from "./images/SF Stall photos/20240128_044505000_iOS.jpg";
import sf3 from "./images/SF Stall photos/20240128_044513000_iOS.jpg";
import aow1 from "./images/AOW/Image_Editor.png";
import aow2 from "./images/AOW/Screenshot 2024-06-19 at 11.31.02 AM.png";
import aow3 from "./images/AOW/Screenshot 2024-06-19 at 11.31.49 AM.png";
import swa1 from "./images/SWG app/Image_Editor (1).png";
import swa2 from "./images/SWG app/Screenshot 2024-06-19 at 11.21.51 AM.png";
import swa3 from "./images/SWG app/Screenshot 2024-06-19 at 11.22.22 AM.png";
import smp1 from "./images/SMP/WhatsApp Image 2024-06-19 at 10.53.13 AM.jpeg";
import smp2 from "./images/SMP/WhatsApp Image 2024-06-19 at 10.53.11 AM.jpeg";
import smp3 from "./images/SMP/WhatsApp Image 2024-06-19 at 10.53.10 AM.jpeg";
import upsc1 from "./images/UPSC/Image_Editor.png";
import upsc2 from "./images/UPSC/Screenshot 2024-06-19 at 11.27.22 AM.png";
import upsc3 from "./images/UPSC/Screenshot 2024-06-19 at 11.27.44 AM.png";

const items = [
  {
    title: "Career Orientation Session",
    description: "Student Welfare Group conducts the Career Orientation Session for 2nd and 3rd year students to resolve all their doubts regarding the different career opportunities based on different profiles like SDE,Data, Finance,Quant, Core, etc. and how to prepare to pursue them",
    images: [
      imgcos1,
      imgcos2,
      imgcos3,
    ],
  },
  {
    title: "Research Guidance Webinar",
    description: "In this program we organize a panel discussion on the research domain as a career realm. It will disclose a roadmap to kickstart a journey in R&D as a career stream.Students who are oriented towards core field or they want to research upon some subjects which are in their department courses. In this panel discussion, we preferably invite students who are or have done projects under a professor or will be pursuing higher education for research.",
    images: [
      imgrg1,
      imgrg2,
      imgrg3,
    ],
  },
  {
    title: "Study Abroad 101",
    description: "An exclusive event where experts discuss the scope of international studies and provide relevant guidance for exams such as GMAT and GRE.",
    images: [
      sta1,
      sta2,
      sta3,
    ],
  },
  {
    title: "Off Campus Talks",
    description: "There are a lot of opportunities present for internships and placements off-campus, but a lot of us are not aware of it. To clarify all the doubts and provide a better picture of these off-campus opportunities, SWG conducts Off-Campus Talks with the panel being of students who have bagged good off-campus placements or internships.",
    images: [
      off1,
      off2,
      off3,
    ],
  },
  {
    title: "PDS Doubt Session",
    description: "Student Welfare Group helps freshers in clearing all their doubts in the PDS course and help them out from the obstacles faced by them in learning programming through PDS doubt sessions. Seniors mentor them in these PDS sessions and tutorials will be provided to them to get even more clarity and practice.",
    images: [
      pds1,
      pds2,
      pds3,
    ],
  },
  {
    title: "Campus Tour",
    description: "Campus ride is being organized to acquaint freshers about the important places of the campus that a student needs to know.",
    images: [
      cp1,
      cp2,
      cp3,
    ],
  },
  {
    title: "SF Stall",
    description: "A lively spot where folks can gather and enjoy quality time playing fantastic games, amidst all the pomp and flair of the Spring Fest!",
    images: [
      sf1,
      sf2,
      sf3,
    ],
  },
  {
    title: "ELAT",
    description: "Student Welfare Group's ELAT initiative assesses your English proficiency, identifying improvement areas to help you achieve language mastery.",
    images: [
      imgel1,
      imgel2,
      imgel3,
    ],
  },
  {
    title: "Foresight",
    description: "In this series we ask our seniors about their CDC placements and Internships and release it as blogs. In these blogs we cover about their experiences on their selection procedure, some insights into the work culture and some advice for all those who are appearing for CDC placement or Internships.",
    images: [
      imgfr1,
      imgfr2,
      imgfr3,
    ],
  },
  {
    title: "Examania",
    description: "In this program, we ask the students who scored a good CGPA and have aced their Academics in previous years. We ask them about their preparation strategies for exams.So that they can share their experience of exams in IIT Kharagpur with the freshers to perform well in their exams",
    images: [
      imgex1,
      imgex2,
      imgex3,
    ],
  },
  {
    title: "DepC Talks",
    description: "Student Welfare Group conducts its DepC talks to clear the doubts and queries related to the different departments, interdisciplinary courses and majorly about the popular Department Change procedure raised by the student community.",
    images: [
      imgdepc1,
      imgdepc2,
      imgdepc3,
    ],
  },
  {
    title: "Academic Orientation Session",
    description: "Student Welfare Group organizes a session to resolve all doubts about breadth, Minor, and Micro specialization and make freshers acquainted with all they need to know about Subject Registration procedure in subsequent years.",
    images: [
      aow1,
      aow2,
      aow3,
    ],
  },
  {
    title: "SWG App",
    description: "One stop solution for all academic, non-academic and CDC doubts",
    images: [
      swa1,
      swa2,
      swa3,
    ],
  },
  {
    title: "Student Mentorship Program",
    description: "Under this program, every 1st-year student pairs with a 3rd or 4th-year mentor in their department for campus and academic guidance.",
    images: [
      smp1,
      smp2,
      smp3,
    ],
  },
  {
    title: "UPSC Talks",
    description: "Simplifying the toughest exam with insights from past aspirants.",
    images: [
      upsc1,
      upsc2,
      upsc3,
    ],
  },
];

function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      setCurrentIndex((currentIndex + 1) % items.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="Details">
      <div className="button-box-wrapper">
        <div className="button-box">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={index <= currentIndex ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
      <div className={`main-content ${currentIndex % 2 === 0 ? 'normal-layout' : 'alternate-layout'}`}>
        <div className="left-pane">
          <div className="title">{items[currentIndex].title}</div>
          <div className="description">{items[currentIndex].description}</div>
        </div>
        <div className="right-pane">
          {items[currentIndex].images.map((image, index) => (
            <img className="imgdetails"
              key={`${currentIndex}-${index}`}
              src={image}
              alt={`Item ${currentIndex + 1} - Image ${index + 1}`}
            /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
