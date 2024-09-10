import user from './../Data/user.json';
import data from './../Data/data.json';
import friends from './../Data/friends.json';
import transactions from './../Data/transactions.json';

import { Profile } from './SocialProfile/Profile.jsx';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
