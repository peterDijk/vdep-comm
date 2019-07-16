import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { translate as t } from '../lib/i18n';
import { Answer, FaqItem, Question } from '../styles/Faq';
import { CoG, LogoContainer, TitleThin } from '../styles/Header';
import { SimplePageBody } from '../styles/PrivacyStatement';
import { SeminarTitleBar } from '../styles/SeminarDetail';
import { InquiryContainer } from './InquiryContainer';

export const Faq = ({ data, language }) => (
  <Layout
    lang={language}
    navBlue={false}
    seminars={data.seminars.nodes}
    slug={'faq'}
  >
    <SEO
      title="Communicatie over Grenzen - Leer effectief communiceren met andere culturen"
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
    <SimplePageBody>
      <SeminarTitleBar>
        <LogoContainer>
          <CoG>
            <Image fileName={'190425_CoG_Logo_WO-title-Black.png'} />
          </CoG>
          <h1>
            <TitleThin>{t('FREQ', language)}</TitleThin>
            <TitleThin>{t('QUESTIONS', language)}</TitleThin>
          </h1>
        </LogoContainer>
      </SeminarTitleBar>
      {data.faq.data.q_a.map(qa => (
        <FaqItem>
          <Question>{ReactHtmlParser(qa.question.html)}</Question>
          <Answer>{ReactHtmlParser(qa.answer.html)}</Answer>
        </FaqItem>
      ))}
    </SimplePageBody>
    <InquiryContainer language={language} otherInterest={'FAQ'} />
  </Layout>
);
