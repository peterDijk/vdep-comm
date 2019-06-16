import * as React from "react";
import Layout from "../components/layout";
import ReactHtmlParser from "react-html-parser";
import SEO from "../components/seo";
import { SeminarTitleBar } from "../styles/SeminarDetail";
import { LogoContainer, CoG, TitleThin, TitleThick } from "../styles/Header";
import Image from "../components/image";
import { graphql } from "gatsby";
import { SimplePageBody, HtmlText } from "../styles/PrivacyStatement";
import { translate as t } from "../lib/i18n";

export const About = ({ data, language }) => (
  <Layout
    lang={language}
    navBlue={false}
    slug={"about-us"}
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
            <Image fileName={"190425_CoG_Logo_WO-title-Black.png"} />
          </CoG>
          <h1>
            <TitleThin>{t("ABOUT", language)}</TitleThin>
            <TitleThin>{t("US", language)}</TitleThin>
          </h1>
        </LogoContainer>
      </SeminarTitleBar>
      <HtmlText>{ReactHtmlParser(data.about.data.body.html)}</HtmlText>
    </SimplePageBody>
  </Layout>
);
