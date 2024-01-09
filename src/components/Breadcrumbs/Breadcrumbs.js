import React from 'react';
import styled from 'styled-components/macro';

const Breadcrumbs = ({ children, show }) => {
  return <Wrapper show={show}>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: var(--color-gray-300);
    }
  }
`;

const CrumbLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900);
  }
`;

const Wrapper = styled.nav`
  display: ${(props) => props.show===1 ? 'flex' : 'none'};
  font-size: 0.875rem;
`;
export default Breadcrumbs;
