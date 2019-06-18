import * as React from "react";
import { translate as t } from "../lib/i18n";
import { InquiryWrapper, ChoicesWrapper } from "../styles/SeminarDetail";
import { Inquiry } from "./Inquiry";
import { ChoiceItem } from "../styles/PricingTable";
import { Checkbox } from "./Checkbox";

export const InquiryContainer = ({
  options,
  language,
  otherInterest,
}: {
  options?: any[];
  language: string;
  otherInterest?: string;
}) => {
  const [interest, setInterest] = React.useState(
    options
      ? `${options[0].data.seminar.document[0].data.subject.text} - ${
          options[0].data.dates_text
        } - ${options[0].data.location_city}`
      : otherInterest
  );

  return (
    <InquiryWrapper>
      <h1>{t("INTERESTED_IN_ATTENDING", language)}</h1>
      {options && (
        <ChoicesWrapper>
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
                <span>
                  {option.data.dates_text} - {option.data.location_city}
                </span>
              </ChoiceItem>
            );
          })}
        </ChoicesWrapper>
      )}
      <Inquiry language={language} interest={interest} />
    </InquiryWrapper>
  );
};
