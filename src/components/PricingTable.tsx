import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import Grid from "@material-ui/core/Grid";
import Check from "@material-ui/icons/Check";
import withWidth from "@material-ui/core/withWidth";
import { translate as t } from "../lib/i18n";
import {
  Benefits as StyledBenefits,
  CenteredParagraph,
  BenefitsOptions,
  TableContainer,
  ColumnContainer,
  LegendItem,
  ColumnItem,
  CheckItem,
  ColumnTitle,
  ItemEmpty,
} from "../styles/PricingTable";

class PricingTable extends React.Component<
  {
    benefits: any;
    benefitsOptions: any;
    width?: any;
    language: string;
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
    const { benefits, benefitsOptions, width, language } = this.props;
    const optionOrg = benefitsOptions.nodes.find(
      option => option.uid === "organisation"
    );
    const optionInd = benefitsOptions.nodes.find(
      option => option.uid === "individual"
    );
    return (
      <StyledBenefits>
        <h2>{benefits.data.title.text}</h2>
        <CenteredParagraph>
          {ReactHtmlParser(benefits.data.body.html)}
        </CenteredParagraph>
        <BenefitsOptions>
          <TableContainer>
            <Grid container spacing={0}>
              {!["sm", "xs"].includes(width) && (
                <Grid item xs={12} md={4}>
                  <ColumnContainer selected={false}>
                    <ItemEmpty>&nbsp;</ItemEmpty>
                    <LegendItem>
                      <p>{t("NUM_ATTENDEES", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("SEM_ATTENDANCE", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("FREQUENCY", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("SEM_SUBJECT", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("SEM_CONTENT", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("SEM_VENUE", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("ACCOMODATION", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("ATTENDANCE_FEE", language)}</p>
                    </LegendItem>
                  </ColumnContainer>
                </Grid>
              )}
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "organisation"}
                  onClick={() => this.select("organisation")}
                >
                  <ColumnTitle>{optionOrg.data.title.text}</ColumnTitle>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.number_of_attendees.html)}
                  </ColumnItem>
                  <CheckItem>
                    <Check />
                  </CheckItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.frequency.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.seminar_subject.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.seminar_content.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.seminar_venue.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.accomodation.html)}
                  </ColumnItem>
                  <ColumnItem>
                    <p>
                      {ReactHtmlParser(optionOrg.data.attendance_fee_text)}
                      {ReactHtmlParser(optionOrg.data.attendance_fee_price)}
                    </p>
                  </ColumnItem>
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
                  <ColumnTitle>{optionInd.data.title.text}</ColumnTitle>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.number_of_attendees.html)}
                  </ColumnItem>
                  <CheckItem>
                    <Check />
                  </CheckItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.frequency.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.seminar_subject.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.seminar_content.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.seminar_venue.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.accomodation.html)}
                  </ColumnItem>
                  <ColumnItem>
                    <p>
                      {ReactHtmlParser(optionInd.data.attendance_fee_text)}
                      {ReactHtmlParser(optionInd.data.attendance_fee_price)}
                    </p>
                  </ColumnItem>
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
