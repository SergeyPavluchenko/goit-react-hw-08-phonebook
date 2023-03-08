import styled from 'styled-components';

export const FormRegister = styled.form`
  width: 320px;
  font-weight: 700;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const FormButton = styled.button`
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 15px;
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

// import styled from 'styled-components';

// export const FormLogin = styled.form`
//   width: 320px;
//   margin: 0 auto;
//   padding: 50px;
// `;

// export const LabelForm = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
//   font-weight: 600;
// `;

// export const ButtonForm = styled.button`
//   font-weight: 700;
//   border-radius: 8px;
//   padding: 8px 15px;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);
//   background-color: white;

//   border: none;
//   font-size: 16px;
//   cursor: pointer;

//   &: hover {
//     background-color: blue;
//   }
// `;
