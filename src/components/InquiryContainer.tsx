import * as React from "react";
import { translate as t } from "../lib/i18n";
import { InquiryWrapper } from "../styles/SeminarDetail";
import { Inquiry } from "./Inquiry";
import { ChoiceItem } from "../styles/PricingTable";
import { Checkbox } from "./Checkbox";

export const InquiryContainer = ({
  options,
  language,
}: {
  options: any[];
  language: string;
}) => {
  const [interest, setInterest] = React.useState(
    `${options[0].data.seminar.document[0].data.subject.text} - ${
      options[0].data.dates_text
    } - ${options[0].data.location_city}`
  );
  return (
    <InquiryWrapper>
      <h1>{t("INTERESTED_IN_ATTENDING", language)}</h1>
      <Inquiry language={language} interest={interest} />
      {options.map(option => {
        const date_string = `${
          options[0].data.seminar.document[0].data.subject.text
        } - ${option.data.dates_text} - ${option.data.location_city}`;
        return (
          <ChoiceItem key={option.id}>
            <Checkbox
              checked={interest === date_string}
              callbackFn={() => setInterest(date_string)}
            />
            <p>
              {option.data.dates_text} - {option.data.location_city}
            </p>
          </ChoiceItem>
        );
      })}
    </InquiryWrapper>
  );
};