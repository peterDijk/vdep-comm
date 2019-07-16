import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { CoG, LogoContainer, TitleThin } from '../styles/Header';
import { HtmlText, SimplePageBody } from '../styles/PrivacyStatement';
import { SeminarTitleBar } from '../styles/SeminarDetail';
import { InquiryContainer } from './InquiryContainer';

export const PrivacyStatement = ({ data, language }) => (
  <Layout
    lang={language}
    navBlue={false}
    slug={'privacy-statement'}
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
    <SimplePageBody>
      <SeminarTitleBar>
        <LogoContainer>
          <CoG>
            <Image fileName={'190425_CoG_Logo_WO-title-Black.png'} />
          </CoG>
          <h1>
            <TitleThin>PRIVACY</TitleThin>
            <TitleThin>STATEMENT</TitleThin>
          </h1>
        </LogoContainer>
      </SeminarTitleBar>
      <HtmlText>{ReactHtmlParser(data.privacy.data.body.html)}</HtmlText>
    </SimplePageBody>
    <InquiryContainer language={language} otherInterest={'Privacy statement'} />
  </Layout>
);
