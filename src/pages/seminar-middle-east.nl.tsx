import * as React from "react";
import { graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { translate as t } from "../lib/i18n";

import {
  SeminarHeader,
  SeminarTitleBar,
  MainQuote,
  QuoteBox,
  QuoteProfilePicture,
  ProgrammeContainer,
  ProgrammeTabs,
  DayHeading,
  ProgrammeEntries,
  EntryTime,
  EntryTitle,
  Entry,
} from "../styles/SeminarDetail";
import Image from "../components/image";
import { Button } from "../styles/buttons";

import { UpcomingEvents, PageType } from "../components/UpcomingEvents";
import { filterEvents } from "../lib/filterEvents";
import { LogoContainer, CoG, TitleThin, TitleThick } from "../styles/Header";
import { Grid } from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { COLOR } from "../styles/constants";
import { InquiryContainer } from "../components/InquiryContainer";

const SeminarInDepth = ({ data }) => {
  const language = "nl-nl";
  const eventEntities = data.events.nodes;
  const filteredEvents = filterEvents(eventEntities);
  console.log(data);
  const [activeTabIndex, setActive] = React.useState(0);
  return (
    <Layout lang={language} navBlue={true}>
      <SEO
        title="Bij Communicatie over Grenzen geloven wij in de kracht van duidelijke communicatie"
        keywords={[
          `communicatie`,
          `grenzen`,
          `cultuur`,
          `culturen`,
          `bert`,
          `dijk`,
        ]}
        description="Met onze Seminars helpen we organisaties en individuelen met effectief communiceren met andere culturen in hun zakelijke relaties"
        lang={language}
      />
      <SeminarHeader imgUrl={data.seminar.data.background_image.url}>
        <SeminarTitleBar>
          <LogoContainer>
            <CoG>
              <Image fileName={"190425_CoG_Logo_WO-title-Black.png"} />
            </CoG>
            <h1>
              <TitleThin>SEMINAR</TitleThin>
              <TitleThick>{data.seminar.data.subject.text}</TitleThick>
            </h1>
          </LogoContainer>
        </SeminarTitleBar>
        <UpcomingEvents
          events={filteredEvents.eventsMiddleEast}
          language={language}
          page={PageType.SEMINAR}
        />
        <MainQuote>
          <QuoteBox>
            {ReactHtmlParser(data.seminar.data.host_main_quote.html)}
            <QuoteProfilePicture
              profileUrl={data.seminar.data.host_profile_picture.url}
            />
          </QuoteBox>
        </MainQuote>
      </SeminarHeader>
      <ProgrammeContainer>
        <Grid container>
          {data.seminarOverview.nodes
            .filter((d, i) => i < 3)
            .map((day, i) => (
              <Grid item xs={12} md={4} key={day.id}>
                <a href={`#${i}`}>
                  <ProgrammeTabs
                    isActive={activeTabIndex === i}
                    onClick={() => setActive(i)}
                  >
                    {day.data.title.text}
                  </ProgrammeTabs>
                </a>
              </Grid>
            ))}
        </Grid>
        {/*  */}
        <DayHeading id="0" />
        <DayHeading>
          {data.seminarOverview.nodes[0].data.title.text}{" "}
          <a href="#inquiry">
            <Button>{t("MAKEINQ", language)}</Button>
          </a>
        </DayHeading>
        <MainQuote bgColor={COLOR.WHITE}>
          <QuoteBox bgColor={COLOR.VDEP_DARK_BLUE}>
            {ReactHtmlParser(data.seminar.data.day_1_quote.html)}
            <QuoteProfilePicture
              profileUrl={data.seminar.data.day_1_quote_profile_picture.url}
            />
          </QuoteBox>
        </MainQuote>
        <ProgrammeEntries>
          {data.seminar.data.programme_day_1.map(entry => {
            return entry.kind !== "break" ? (
              <Entry key={entry.title}>
                <EntryTime>
                  <ScheduleIcon />
                  {entry.time}
                </EntryTime>
                <EntryTitle>
                  {entry.title}
                  {ReactHtmlParser(entry.body.html)}
                </EntryTitle>
              </Entry>
            ) : (
              <Entry key={entry.title}>
                <EntryTime break={true}>
                  <ScheduleIcon />
                  {entry.time}
                  {entry.title}
                </EntryTime>
              </Entry>
            );
          })}
        </ProgrammeEntries>
        {/*  */}
        <DayHeading id="1" />
        <DayHeading>
          {data.seminarOverview.nodes[1].data.title.text}{" "}
          <a href="#inquiry">
            <Button>{t("MAKEINQ", language)}</Button>
          </a>
        </DayHeading>
        <MainQuote bgColor={COLOR.WHITE}>
          <QuoteBox bgColor={COLOR.VDEP_DARK_BLUE}>
            {ReactHtmlParser(data.seminar.data.day_2_quote.html)}
            <QuoteProfilePicture
              profileUrl={data.seminar.data.dag_2_quote_profile_picture.url}
            />
          </QuoteBox>
        </MainQuote>
        <ProgrammeEntries>
          {data.seminar.data.programme_day_2.map(entry => (
            <Entry key={entry.title}>
              <EntryTime break={entry.kind === "break"}>
                <ScheduleIcon />
                {entry.time}
              </EntryTime>
              <EntryTitle>
                {entry.title}
                {ReactHtmlParser(entry.body.html)}
              </EntryTitle>
            </Entry>
          ))}
        </ProgrammeEntries>
        {/*  */}
        <DayHeading id="2" />
        <DayHeading>
          {data.seminarOverview.nodes[2].data.title.text}{" "}
          <a href="#inquiry">
            <Button>{t("MAKEINQ", language)}</Button>
          </a>
        </DayHeading>
        <MainQuote bgColor={COLOR.WHITE}>
          <QuoteBox bgColor={COLOR.VDEP_DARK_BLUE}>
            {ReactHtmlParser(data.seminar.data.day_3_quote.html)}
            <QuoteProfilePicture
              profileUrl={data.seminar.data.day_3_quote_profile_picture.url}
            />
          </QuoteBox>
        </MainQuote>
        <ProgrammeEntries>
          {data.seminar.data.programme_day_3.map(entry => (
            <Entry key={entry.title}>
              <EntryTime>
                <ScheduleIcon />
                {entry.time}
              </EntryTime>
              <EntryTitle>
                {entry.title}
                {ReactHtmlParser(entry.body.html)}
              </EntryTitle>
            </Entry>
          ))}
        </ProgrammeEntries>
      </ProgrammeContainer>
      <InquiryContainer
        language={language}
        options={data.events.nodes.map(event => event)}
      />
    </Layout>
  );
};

export default SeminarInDepth;

export const query = graphql`
  {
    seminar: prismicSeminar(lang: { eq: "nl-nl" }, uid: { eq: "middle-east" }) {
      data {
        subject {
          text
        }
        country
        host_name
        host_profile_picture {
          url
        }
        background_image {
          url
        }
        host_name
        host_main_quote {
          html
        }
        day_1_quote {
          html
        }
        day_1_quote_profile_picture {
          url
        }
        programme_day_1 {
          time
          title
          body {
            html
          }
          kind
        }
        day_2_quote {
          html
        }
        dag_2_quote_profile_picture {
          url
        }
        programme_day_2 {
          time
          title
          body {
            html
          }
          kind
        }
        day_3_quote {
          html
        }
        day_3_quote_profile_picture {
          url
        }
        programme_day_3 {
          time
          title
          body {
            html
          }
          kind
        }
      }
    }
    events: allPrismicEvent(
      filter: {
        data: { seminar: { uid: { eq: "middle-east" } } }
        lang: { eq: "nl-nl" }
      }
    ) {
      nodes {
        id
        uid
        data {
          location_venue
          location_city
          location_image {
            url
          }
          starting_date
          dates_text
          seminar {
            id
            uid
            slug
            document {
              data {
                subject {
                  text
                }
              }
            }
          }
        }
      }
    }
    seminarOverview: allPrismicSeminarOverview(
      filter: { lang: { eq: "nl-nl" } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        id
        lang
        data {
          order
          title {
            text
          }
          body {
            html
          }
          image {
            url
          }
          muiicon
        }
      }
    }
  }
`;
