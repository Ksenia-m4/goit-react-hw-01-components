import styled from 'styled-components';

const List = styled.ul`
  width: 220px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 14px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 12px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export { List, Avatar, Name, Item, Status };
