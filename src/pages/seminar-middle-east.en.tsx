import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SeminarInDepth = ({ data }) => {
  const language = "en-gb";

  return (
    <Layout lang={language}>
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
      testing in english
    </Layout>
  );
};

export default SeminarInDepth;
