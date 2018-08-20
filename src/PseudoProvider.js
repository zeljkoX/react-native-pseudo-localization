/**
 * PseudoLocalizationProvider
 */

import React from "react";
import { init } from "./PseudoText";

export const PseudoContext = React.createContext(
  "react-native-pseudo-localization"
);

const PseudoProvider = ({ children, enabled = true }) => {
  init();
  return (
    <PseudoContext.Provider value={enabled}>{children}</PseudoContext.Provider>
  );
};

export default PseudoProvider;
