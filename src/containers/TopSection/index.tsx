import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/logo/NavBar";

export const TopSection: React.FC = () => {
  return (
    <TopSectionContainer>
      <NavBar />
    </TopSectionContainer>
  );
};

const TopSectionContainer = styled.div`
  ${tw`
	w-full
	flex
	h-screen
	relative
`}
`;
