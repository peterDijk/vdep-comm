import { Link } from 'gatsby';
import * as React from 'react';
import { translate as t } from '../lib/i18n';
import { Footer as StyledFooter } from '../styles/Main';

export const Footer = ({ language }) => (
  <StyledFooter>
    <p>{t('FOOTER_COG', language)}</p>
    <p>
      <Link to={`${language === 'en-gb' ? '/en' : ''}/privacy-statement`}>
        Privacy statement
      </Link>
    </p>
  </StyledFooter>
);
