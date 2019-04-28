import * as React from "react";

type ProviderProps = {
  language: string;
  availableLanguages: string[];
  setLanguage: (language: string) => void;
};

type State = {
  language: string;
  availableLanguages: string[];
};

const Ctx = React.createContext({} as ProviderProps);

export const LanguageState = Ctx.Consumer;
const Provider = Ctx.Provider;

export class LanguageStateProvider extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      language: "nl",
      availableLanguages: ["nl", "en"],
    };
  }

  setLanguage = (language: string) => {
    this.setState({
      language,
    });
  };

  render() {
    console.log({ language: this.state.language });
    return (
      <Provider
        value={{
          language: this.state.language,
          setLanguage: this.setLanguage,
          availableLanguages: this.state.availableLanguages,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
