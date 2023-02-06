import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 340px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid lightslategrey;
    transition: all 0.5s ease-out;
  }
`;

export const Button = styled.button`
  padding: 4px 12px;
  border: 1px solid lightslategrey;
  border-radius: 8px;
  color: #fff;
  background-color: lightslategrey;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    color: lightslategrey;
    border-color: lightslategrey;
    background-color: #fff;
  }
`;
