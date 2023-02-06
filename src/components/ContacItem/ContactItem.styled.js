import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 350px;
`;

export const Button = styled.button`
  padding: 4px 12px;
  border: 1px solid lightslategrey;
  border-radius: 8px;
  color: #fff;
  background-color: lightslategrey;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    color: lightslategrey;
    border-color: lightslategrey;
    background-color: #fff;
  }
`;
