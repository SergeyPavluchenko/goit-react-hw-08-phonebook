import styled from 'styled-components';

export const FormStyle = styled.form`
  position: relative;
  padding: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LabelStyle = styled.label`
  display: block;
  text-align: start;
  margin-bottom: 10px;
  height: 24px;
`;

export const InputStyle = styled.input`
  position: absolute;
  width: 240px;
  left: 80px;
  border: none;
  outline-color: plum;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const BtnStyle = styled.button`
  font-weight: 700;
  padding: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),
    0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);
  background-color: white;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;
