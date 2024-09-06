import PropTypes from 'prop-types';

import {
  ProfileContainer,
  ProfileDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  ProfileStats,
  StatsItem,
  Statslabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescription>

      <ProfileStats>
        <StatsItem>
          <Statslabel>Followers</Statslabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Statslabel>Views</Statslabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Statslabel>Likes</Statslabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
