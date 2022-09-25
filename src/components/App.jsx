import user from "components/Profile/user.json";
import data from "components/Statistics/data.json";
import friends from "components/FriendsList/friends.json";
import transactions from "components/TransactionHistory/transactions.json";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Box } from "./Box";

export const App = () => {
  return (
    <Box pt={3} pb={3}>
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      </Box>
  );
  
};

