import * as React from "react";
import Grid from "@material-ui/core/Grid";
import ReactHtmlParser from "react-html-parser";
import { SeminarTile } from "../styles/Seminars";

export const Seminars = ({ seminars, language }) => {
  console.log(seminars);
  return (
    <Grid container>
      {seminars.map(seminar => (
        <Grid item key={seminar.id} xs={12} md={4}>
          <SeminarTile imgUrl={seminar.data.image_day.url}>
            {seminar.data.subject.text}
          </SeminarTile>
        </Grid>
      ))}
    </Grid>
  );
};
