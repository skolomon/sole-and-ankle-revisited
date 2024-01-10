/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS, QUERIES } from '../../constants';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={1} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: hsl(
    var(--color-overlay-angle) 
    var(--color-overlay-intensity) / 
    var(--color-overlay-opacity)
  );
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 300px;
  padding: 20px 32px 28px;
  z-index: 999;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.phone} {
    padding-inline: 16px;
  }
`;

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  color: var(--color-gray-700);
  font-size: calc(14rem / 16);
  gap: 8px;
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default MobileMenu;
