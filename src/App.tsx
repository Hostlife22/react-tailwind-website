import React from "react";
import tw from "twin.macro";
import "./App.css";
import { ExploreSection } from "./containers/ExploreSection";
import { TopSection } from "./containers/TopSection";

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
    </AppContainer>
  );
}

export default App;

const AppContainer = tw.div`
	flex
	flex-col
	w-full
	h-full
	overflow-hidden
`;
