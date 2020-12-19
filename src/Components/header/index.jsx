import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
// alias for link to create sytled component
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Group,
  Link,
  Text,
  Feature,
  FeatureCallout,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Profile,
  Dropdown,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}> {children} </Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children} </Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}> {children} </ButtonLink>;
};
Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}> {children} </Link>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}> {children} </Feature>;
};

Header.FeatureCallout = function HeaderFeatureCallout({
  children,
  ...restProps
}) {
  return <FeatureCallout {...restProps}> {children} </FeatureCallout>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}> {children} </PlayButton>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={(event) => {
          setSearchActive(!searchActive);
        }}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children} </Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}> {children} </Dropdown>;
};
