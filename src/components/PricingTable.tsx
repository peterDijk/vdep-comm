import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import Grid from "@material-ui/core/Grid";
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

export class PricingTable extends React.Component<
  {
    benefits;
    benefitsOptions;
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
    const { benefits, benefitsOptions } = this.props;
    return (
      <StyledBenefits>
        <h2>{benefits.data.title.text}</h2>
        <CenteredParagraph>
          {ReactHtmlParser(benefits.data.body.html)}
        </CenteredParagraph>
        <BenefitsOptions>
          <TableContainer>
            <Grid container spacing={0}>
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
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "organisation"}
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
