import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { UserContext } from "../contexts/UserContext";
import { LanguageContext } from "../contexts/LanguageContext";
import localeSelect from "../services/localeSelect";
import { title } from "../data/locales";
import * as RootNavigation from "../RootNavigation.js";

function Header() {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" />
      {!user && (
        <>
          <Appbar.Content
            title={localeSelect(language, title)}
            color="#ffffff"
          />
          <Appbar.Action
            icon="login"
            color="#ffffff"
            onPress={() => RootNavigation.navigate("Login")}
          />
          <Appbar.Action icon="account-plus" color="#ffffff" />
        </>
      )}
      {user && (
        <>
          <Appbar.Content
            title={localeSelect(language, title)}
            color="#ffffff"
          />
        </>
      )}
    </Appbar.Header>
  );
}

export default Header;
