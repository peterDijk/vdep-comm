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
  LegendItemMediumLeft,
  LegendItemMarginBottom,
  LegendItemLargeLeft,
  ColumnItemLargeRight,
  ColumnItem,
  ColumnItemMedium,
  ColumnItemLarge,
  ColumnItemMarginBottom,
  CheckItem,
  ColumnTitleLeft,
  ColumnTitleRight,
  ItemEmpty,
  ChoiceItem,
  NoteItem,
  InterestedItem,
} from "../styles/PricingTable";
import { Checkbox } from "./Checkbox";
import { Inquiry } from "./Inquiry";

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
                    <LegendItemMediumLeft>
                      <p>{t("NUM_ATTENDEES", language)}</p>
                    </LegendItemMediumLeft>
                    <LegendItem>
                      <p>{t("SEM_ATTENDANCE", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("FREQUENCY", language)}</p>
                    </LegendItem>
                    <LegendItem>
                      <p>{t("SEM_SUBJECT", language)}</p>
                    </LegendItem>
                    <LegendItemMarginBottom>
                      <p>{t("SEM_CONTENT", language)}</p>
                    </LegendItemMarginBottom>
                    <LegendItem>
                      <p>{t("SEM_VENUE", language)}</p>
                    </LegendItem>
                    <LegendItemMarginBottom>
                      <p>{t("ACCOMODATION", language)}</p>
                    </LegendItemMarginBottom>
                    <LegendItemLargeLeft>
                      <p>{t("ATTENDANCE_FEE", language)}</p>
                    </LegendItemLargeLeft>
                    <NoteItem />
                    <InterestedItem>
                      <p>{t("INTERESTED_IN_ATTENDING", language)}</p>
                    </InterestedItem>
                  </ColumnContainer>
                </Grid>
              )}
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "organisation"}
                  onClick={() => this.select("organisation")}
                >
                  <ColumnTitleLeft>{optionOrg.data.title.text}</ColumnTitleLeft>
                  <ColumnItemMedium>
                    {ReactHtmlParser(optionOrg.data.number_of_attendees.html)}
                  </ColumnItemMedium>
                  <CheckItem>
                    <Check />
                  </CheckItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.frequency.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.seminar_subject.html)}
                  </ColumnItem>
                  <ColumnItemMarginBottom>
                    {ReactHtmlParser(optionOrg.data.seminar_content.html)}
                  </ColumnItemMarginBottom>
                  <ColumnItem>
                    {ReactHtmlParser(optionOrg.data.seminar_venue.html)}
                  </ColumnItem>
                  <ColumnItemMarginBottom>
                    {ReactHtmlParser(optionOrg.data.accomodation.html)}
                  </ColumnItemMarginBottom>
                  <ColumnItemLarge>
                    <span>
                      {ReactHtmlParser(optionOrg.data.attendance_fee_text)}
                    </span>
                    <h2>
                      {ReactHtmlParser(optionOrg.data.attendance_fee_price)}
                    </h2>
                  </ColumnItemLarge>
                  <NoteItem />
                  <ChoiceItem>
                    <Checkbox
                      checked={this.state.selected === "organisation"}
                      callbackFn={() => this.select("organisation")}
                    />
                    <p>{optionOrg.data.interested_text}</p>
                  </ChoiceItem>
                </ColumnContainer>
              </Grid>
              <Grid item xs={12} md={4}>
                <ColumnContainer
                  selected={this.state.selected === "individual"}
                  onClick={() => this.select("individual")}
                >
                  <ColumnTitleRight>
                    {optionInd.data.title.text}
                  </ColumnTitleRight>
                  <ColumnItemMedium>
                    {ReactHtmlParser(optionInd.data.number_of_attendees.html)}
                  </ColumnItemMedium>
                  <CheckItem>
                    <Check />
                  </CheckItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.frequency.html)}
                  </ColumnItem>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.seminar_subject.html)}
                  </ColumnItem>
                  <ColumnItemMarginBottom>
                    {ReactHtmlParser(optionInd.data.seminar_content.html)}
                  </ColumnItemMarginBottom>
                  <ColumnItem>
                    {ReactHtmlParser(optionInd.data.seminar_venue.html)}
                  </ColumnItem>
                  <ColumnItemMarginBottom>
                    {ReactHtmlParser(optionInd.data.accomodation.html)}
                  </ColumnItemMarginBottom>
                  <ColumnItemLargeRight>
                    <span>
                      {ReactHtmlParser(optionInd.data.attendance_fee_text)}
                    </span>
                    <h2>
                      {ReactHtmlParser(optionInd.data.attendance_fee_price)}
                    </h2>
                  </ColumnItemLargeRight>
                  <NoteItem>
                    {ReactHtmlParser(optionInd.data.note.html)}
                  </NoteItem>
                  <ChoiceItem>
                    <Checkbox
                      checked={this.state.selected === "individual"}
                      callbackFn={() => this.select("individual")}
                    />
                    <p>{optionInd.data.interested_text}</p>
                  </ChoiceItem>
                </ColumnContainer>
              </Grid>
            </Grid>
            <Inquiry language={language} interest={this.state.selected} />
          </TableContainer>
        </BenefitsOptions>
      </StyledBenefits>
    );
  }
}

export default withWidth()(PricingTable);
