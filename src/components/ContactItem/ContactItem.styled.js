import styled from 'styled-components';

export const ContactItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactItemBtn = styled.button`
  font-weight: 700;
  padding: 8px;
  height: 34px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),
    0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);
  background-color: white;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;

    &:hover {
        background-color: blue: 
    }
`;
