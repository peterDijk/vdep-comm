import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import Grid from "@material-ui/core/Grid";
import {
  Benefits as StyledBenefits,
  CenteredParagraph,
  ColumnContainer,
  ColumnItem,
  ColumnTitle,
  ItemEmpty,
} from "../styles/PricingTable";

export const PricingTable = ({ benefits, benefitsOptions }) => {
  return (
    <StyledBenefits>
      <h2>{benefits.data.title.text}</h2>
      <CenteredParagraph>
        {ReactHtmlParser(benefits.data.body.html)}
      </CenteredParagraph>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <ColumnContainer>
            <ItemEmpty>&nbsp;</ItemEmpty>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
          </ColumnContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColumnContainer>
            <ColumnTitle>Organization</ColumnTitle>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
          </ColumnContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColumnContainer>
            <ColumnTitle>Individual</ColumnTitle>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
            <ColumnItem>Test</ColumnItem>
          </ColumnContainer>
        </Grid>
      </Grid>
    </StyledBenefits>
  );
};
