import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 10px auto 30px auto;
  list-style: none;
  border-radius: 10%;
  background-color: #ffffff;
`;

export const ButtonItem = styled.li`
  width: 90px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 999px;
  background: rgb(34, 193, 195);
  background: #200122; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6f0000,
    #200122
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6f0000,
    #200122
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 1px solid transparent;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  color: #ffffff;
  font-family: Akshar;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
