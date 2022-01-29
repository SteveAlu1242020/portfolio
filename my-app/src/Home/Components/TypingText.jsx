import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypingText = () => {
  return (
    <div className="text-xs leading-7 flex items-center flex-col justify-between gap-2 ">
      {
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#3F3D56",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={[
            "Hi,",
            "Thanks For Visiting My Portfolio.",
            "I Am Steven, You Can Call Me 'Steve'.",
            "Graduated In 2018 With A Bachelor's Degree In Computer Science.",
            "Started My Career With Projects In Drupal, Joomla and WordPress",
            "Could Become A Part Of Various Web Projects Since Last 3 Years",
            "Nowdays, I Am Really Focused Into Polishing My Skills In Some Awesome Front-end Technologies",
            "You Can Find Some Of My Recent Projects In The Project Section.",
            "Having An Amazing Project, Were You Need Some Help?",
            "Come, Let's Work Together!!",
          ]}
          multiTextDelay={1000}
          typeSpeed={80}
        />
      }
    </div>
  );
};

export default TypingText;
