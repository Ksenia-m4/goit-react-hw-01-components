import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
`;

export const ProfileDescription = styled.div`
  padding: 40px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 24px;
`;

export const UserName = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const UserTag = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
`;

export const UserLocation = styled.p`
  font-size: 14px;
  color: #777;
`;

export const ProfileStats = styled.ul`
  display: flex;
  padding: 0px;
  list-style: none;
  margin: 0;
  background-color: #f3f6f9;
  border-top: 1.5px solid #e7ecf2;
`;

export const StatsItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 20px;
  &:not(:last-child) {
    border-right: 1.5px solid #e7ecf2;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
