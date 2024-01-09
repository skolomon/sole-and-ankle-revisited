/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
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
      <Wrapper aria-label="menu">
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
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: rgba(96, 100, 108, 0.80);
`;

const Wrapper = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 300px;
  padding: 20px 32px 28px;
  z-index: 999;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.phone} {
    padding-right: 16px;
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  color: ${COLORS.gray[700]};
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
