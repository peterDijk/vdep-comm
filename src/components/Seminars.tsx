import * as React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import { translate as t } from "../lib/i18n";
import {
  SeminarTile,
  SeminarInfoBox,
  ViewProgramButton,
} from "../styles/Seminars";

export const Seminars = ({ seminars, language }) => {
  console.log(seminars);
  return (
    <Grid container>
      {seminars.map(seminar => (
        <Grid item key={seminar.id} xs={12} sm={4} md={4}>
          <SeminarTile imgUrl={seminar.data.image_day.url}>
            <SeminarInfoBox>
              <h4>{seminar.data.country}</h4>
              <h2>{seminar.data.subject.text}</h2>
              <Link
                to={`/${language === "en-gb" ? "en/" : ""}${seminar.data.slug}`}
              >
                <ViewProgramButton>
                  {t("VIEWPROGRAM", language)}
                </ViewProgramButton>
              </Link>
            </SeminarInfoBox>
          </SeminarTile>
        </Grid>
      ))}
    </Grid>
  );
};
