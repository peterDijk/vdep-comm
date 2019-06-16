import * as React from "react";
import Layout from "../components/layout";
import ReactHtmlParser from "react-html-parser";
import SEO from "../components/seo";
import { SeminarTitleBar } from "../styles/SeminarDetail";
import { LogoContainer, CoG, TitleThin, TitleThick } from "../styles/Header";
import Image from "../components/image";
import { graphql } from "gatsby";
import { SimplePageBody, HtmlText } from "../styles/PrivacyStatement";

export const PrivacyStatement = ({ data, language }) => (
  <Layout lang={language} navBlue={false} slug={"privacy-statement"}>
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
            <TitleThin>PRIVACY</TitleThin>
            <TitleThin>STATEMENT</TitleThin>
          </h1>
        </LogoContainer>
      </SeminarTitleBar>
      <HtmlText>{ReactHtmlParser(data.privacy.data.body.html)}</HtmlText>
    </SimplePageBody>
  </Layout>
);
