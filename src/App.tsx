import React from "react";
import tw from "twin.macro";
import "./App.css";
import { TopSection } from "./containers/TopSection";

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
}

export default App;

const AppContainer = tw.div`
	flex
	w-full
	h-full
`;
