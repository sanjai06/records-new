import React from "react";
import "./learningContent.css";
import { IoIosArrowBack, IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import LearningContentCard from "../../components/learningContentCard/LearningContentCard";
import LearningContentSection from "../../components/learningContentSection2/LearningContentSection";

const LearningContent = () => {
  return (
    <div className="learningContent">
      <div className="learningContent__wrapper">
        <div className="learningContent__section">
          <div className="learningContent__container1">
            <div className="learningContent__title">
              <p>
                My Learnings <IoIosArrowBack /> Web Developmet Masterclas
              </p>
              <p className="learningContent__udemy">
                Enrolled on <span>Udemy</span>
              </p>
            </div>

            <div className="learningContent__video">
              <div className="learningContent__video_icon">
                <FaPlay fontSize={50} />
              </div>
              <h1>Web Development</h1>
              <h2>MasterClass</h2>
            </div>
          </div>
          <div className="learningContent__notes">
            <div className="learningContent__notes_title">
              <h5>Notes</h5>
              <p>
                Sort by Latest <IoIosArrowDown />
              </p>
            </div>
            <div className="learningContent__inputs">
              <div className="learningContent__input_wrapper">
                <input type="text" placeholder="Add new note at 3:12" />
                <IoMdAdd />
              </div>

              <div className="learningContent__time">
                <LearningContentCard
                  time={"2:30"}
                  content={"Proxy is a Bridge between two connection."}
                />
                <LearningContentCard
                  time={"1:08"}
                  content={
                    "Outbound mail delivery is essential for delivering mail from a source and it enables"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="learningContent__section2">
          <LearningContentSection />
        </div>
      </div>
    </div>
  );
};

export default LearningContent;
