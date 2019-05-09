import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import { StoryTelling as StyledStory } from "../styles/Main";

export const Story = ({ story, language }) => {
  return (
    <StyledStory>
      <h2>{story.data.title.text}</h2>
      {ReactHtmlParser(story.data.body.html)}
    </StyledStory>
  );
};
