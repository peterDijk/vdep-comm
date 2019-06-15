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

const AboutPage = ({ data }) => {
  const language = "en-gb";

  return (
    <Layout lang={language} navBlue={false}>
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
};

export const query = graphql`
  {
    about: prismicAboutUs(lang: { eq: "en-gb" }) {
      data {
        body {
          html
        }
      }
    }
  }
`;

export default AboutPage;
