import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import { Expertise as StyledExpertise } from "../styles/Main";

export const Expertise = ({ expertise }) => {
  return (
    <StyledExpertise>
      <div>
        <h2>{expertise.data.title.text}</h2>
        {ReactHtmlParser(expertise.data.body.html)}
      </div>
    </StyledExpertise>
  );
};
