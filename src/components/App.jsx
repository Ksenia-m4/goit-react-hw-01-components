import user from './../Data/user.json';
import data from './../Data/data.json';
import friends from './../Data/friends.json';
import transactions from './../Data/transactions.json';

import { Profile } from './Social-profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend-list/FriendList';
import { TransactionHistory } from './Transaction-history/TransactionHistory';

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
