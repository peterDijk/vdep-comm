import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  Experience as StyledExperience,
  ExperienceText,
  SeminarDayTile,
  DayImage,
  DayText,
} from "../styles/SeminarOverview";
import Grid from "@material-ui/core/Grid";

export const Experience = ({ experience, seminarOverview }) => {
  return (
    <StyledExperience>
      <ExperienceText>
        <h2>{experience.data.title.text}</h2>
        {ReactHtmlParser(experience.data.body.html)}
      </ExperienceText>
      <Grid container spacing={40}>
        {seminarOverview.map(item => (
          <Grid item xs={12} md={6} lg={6}>
            <SeminarDayTile>
              <DayImage imgUrl={item.data.image.url}>
                <h2>{item.data.title.text}</h2>
              </DayImage>
              <DayText>{ReactHtmlParser(item.data.body.html)}</DayText>
            </SeminarDayTile>
          </Grid>
        ))}
      </Grid>
    </StyledExperience>
  );
};
