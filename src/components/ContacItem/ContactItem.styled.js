import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow: hidden;

  &:hover {
    color: lightslategrey;
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
