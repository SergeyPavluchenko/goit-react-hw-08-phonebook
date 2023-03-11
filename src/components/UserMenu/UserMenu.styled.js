import styled from 'styled-components';

export const UserMenuBlok = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const WelcomeText = styled.p`
  font-weight: 700;
`;

export const UserMenuButton = styled.button`
  font-weight: 700;
  border-radius: 15px;
  padding: 5px 10px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),
    0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);
  background-color: white;

  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;
