import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import {
  Benefits as StyledBenefits,
  CenteredParagraph,
  BenefitsOptions,
  TableContainer,
  ColumnContainer,
  ColumnItem,
  ColumnTitle,
  ItemEmpty,
} from "../styles/PricingTable";

class PricingTable extends React.Component<
  {
    benefits: any;
    benefitsOptions: any;
    width?: any;
  },
  { selected: string }
> {
  state = {
    selected: "organisation",
  };

  select = (type: string) => {
    this.setState({ selected: type });
  };

  render() {
    const { benefits, benefitsOptions, width } = this.props;
    return (
      <StyledBenefits>
        <h2>{benefits.data.title.text}</h2>
        <CenteredParagraph>
          {ReactHtmlParser(benefits.data.body.html)}
        </CenteredParagraph>
        <BenefitsOptions>
          <TableContainer>
            <Grid container spacing={0}>
              {width !== "sm" && (
                <Grid item xs={12} md={4}>
                  <ColumnContainer selected={false}>
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
              )}
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "organisation"}
                  onClick={() => this.select("organisation")}
                >
                  <ColumnTitle>Organization</ColumnTitle>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ItemEmpty>
                    <input
                      type="checkbox"
                      onChange={() => this.select("organisation")}
                      checked={this.state.selected === "organisation"}
                    />
                  </ItemEmpty>
                </ColumnContainer>
              </Grid>
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "individual"}
                  onClick={() => this.select("individual")}
                >
                  <ColumnTitle>Individual</ColumnTitle>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ColumnItem>Test</ColumnItem>
                  <ItemEmpty>
                    <input
                      type="checkbox"
                      onChange={() => this.select("individual")}
                      checked={this.state.selected === "individual"}
                    />
                  </ItemEmpty>
                </ColumnContainer>
              </Grid>
            </Grid>
          </TableContainer>
        </BenefitsOptions>
      </StyledBenefits>
    );
  }
}

export default withWidth()(PricingTable);
