import * as React from 'react';
import { OrganisationCTA as StyledOrganisationCTA } from '../styles/Main';

export const OrganisationCTA = ({ organisationCta, language }) => {
  return (
    <StyledOrganisationCTA imgUrl={organisationCta.data.image.url}>
      <h3>{organisationCta.data.title}</h3>
      <h2>{organisationCta.data.organisation_cta}</h2>
    </StyledOrganisationCTA>
  );
};
