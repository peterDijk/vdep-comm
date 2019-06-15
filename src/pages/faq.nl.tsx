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
import { FaqItem, Question, Answer } from "../styles/Faq";

const FaqPage = ({ data }) => {
  const language = "nl-nl";

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
              <TitleThin>{t("FREQ", language)}</TitleThin>
              <TitleThin>{t("QUESTIONS", language)}</TitleThin>
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
    </Layout>
  );
};

export const query = graphql`
  {
    faq: prismicFaq(lang: { eq: "nl-nl" }) {
      data {
        q_a {
          answer {
            html
          }
          question {
            html
          }
        }
      }
    }
  }
`;

export default FaqPage;
