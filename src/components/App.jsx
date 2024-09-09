import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

import { Profile } from './social-profile/Profile';
import { StatisticsCard } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';

export const App = () => {
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsCard stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </>
  );
};
