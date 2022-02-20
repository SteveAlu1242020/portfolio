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
            "Thanks for visiting my Portfolio.",
            "I am Stephen, you can call me Steve :)",
            "Graduated in 2018 with a Bachelor's Degree in Computer Science.",
            "Started my career with projects in Drupal, Joomla, and WordPress.",
            "I could become a part of various web projects since the last 3 years, which helped me to enhance my knowledge on web development.",
            "During my spare time, I like to learn new technologies that can polish my skills on front-end development.",
            "You can find some of my recent projects in project sections.",
            "Have an exciting project that could use my help?",
            "Drop me a line, let's work together!",
          ]}
          multiTextDelay={1000}
          typeSpeed={80}
        />
      }
    </div>
  );
};

export default TypingText;
