import Grid from '@material-ui/core/Grid';
import Fingerprint from '@material-ui/icons/Fingerprint';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  ArrowContainer,
  DayImage,
  DayText,
  Experience as StyledExperience,
  ExperienceText,
  SeminarDayTile,
} from '../styles/SeminarOverview';

export const Experience = ({ experience, seminarOverview }) => {
  return (
    <StyledExperience>
      <ExperienceText>
        <h2>{experience.data.title.text}</h2>
        {ReactHtmlParser(experience.data.body.html)}
      </ExperienceText>
      <Grid container spacing={0}>
        {seminarOverview.map(item => {
          const { muiicon } = item.data;
          return (
            <Grid item key={item.id} xs={12} sm={6} md={3} lg={3}>
              <SeminarDayTile>
                <DayImage>
                  {muiicon === 'SupervisedUserCircle' && (
                    <SupervisedUserCircle />
                  )}
                  {muiicon === 'fingerprint' && <Fingerprint />}
                  {muiicon === 'question_answer' && <QuestionAnswer />}
                  {muiicon === 'swap_horiz' && <SwapHoriz />}
                  <h2>{item.data.title.text}</h2>
                </DayImage>
                <DayText>{ReactHtmlParser(item.data.body.html)}</DayText>
              </SeminarDayTile>
            </Grid>
          );
        })}
      </Grid>
      <ArrowContainer>
        <ArrowDown />
      </ArrowContainer>
    </StyledExperience>
  );
};
