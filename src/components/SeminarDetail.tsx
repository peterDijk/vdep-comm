import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { translate as t } from '../lib/i18n';

import Image from '../components/image';
import { Button } from '../styles/buttons';
import {
  DayHeading,
  Entry,
  EntryTime,
  EntryTitle,
  MainQuote,
  ProgrammeContainer,
  ProgrammeEntries,
  ProgrammeTabs,
  QuoteBox,
  QuoteProfilePicture,
  SeminarHeader,
  SeminarTitleBar,
} from '../styles/SeminarDetail';

import { Grid } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { InquiryContainer } from '../components/InquiryContainer';
import { PageType, UpcomingEvents } from '../components/UpcomingEvents';
import { filterEvents } from '../lib/filterEvents';
import { COLOR } from '../styles/constants';
import { CoG, LogoContainer, TitleThick, TitleThin } from '../styles/Header';

export const SeminarDetail = ({ data, language }) => {
  const eventEntities = data.events.nodes;
  const filteredEvents = filterEvents(eventEntities);
  const [activeTabIndex, setActive] = React.useState(0);
  const semEvents =
    data.seminar.uid === 'middle-east'
      ? filteredEvents.eventsMiddleEast
      : data.seminar.uid === 'russia'
      ? filteredEvents.eventsRussia
      : data.seminar.uid === 'west-africa' && filteredEvents.eventsWestAfrica;
  return (
    <Layout
      lang={language}
      navBlue={true}
      slug={data.seminar.data.slug}
      seminars={data.seminars.nodes}
    >
      <SEO
        title="Leer effectief communiceren met andere culturen"
        keywords={[
          `communicatie`,
          `grenzen`,
          `cultuur`,
          `culturen`,
          `bert`,
          `dijk`,
        ]}
        description="Is uw zakelijke project vastgelopen omdat u elkaar niet begreep? Met onze seminars helpen wij organisaties en individuen om effectiever te communiceren over de cultuurgrenzen heen."
        lang={language}
      />
      <SeminarHeader imgUrl={data.seminar.data.background_image.url}>
        <SeminarTitleBar>
          <LogoContainer>
            <CoG>
              <Image fileName={'190425_CoG_Logo_WO-title-Black.png'} />
            </CoG>
            <h1>
              <TitleThin>SEMINAR</TitleThin>
              <TitleThick>{data.seminar.data.subject.text}</TitleThick>
            </h1>
          </LogoContainer>
        </SeminarTitleBar>
        <UpcomingEvents
          events={semEvents}
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
          {data.seminarOverview.nodes[0].data.title.text}{' '}
          <a href="#inquiry">
            <Button>{t('MAKEINQ', language)}</Button>
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
            return entry.kind !== 'break' ? (
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
          {data.seminarOverview.nodes[1].data.title.text}{' '}
          <a href="#inquiry">
            <Button>{t('MAKEINQ', language)}</Button>
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
              <EntryTime break={entry.kind === 'break'}>
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
          {data.seminarOverview.nodes[2].data.title.text}{' '}
          <a href="#inquiry">
            <Button>{t('MAKEINQ', language)}</Button>
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
