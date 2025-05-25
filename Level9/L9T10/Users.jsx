import React, { useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import useCachedFetch from "./useCatchedFetch";
const Users = () => {
  const { data: users, loading } = useCachedFetch("https://jsonplaceholder.typicode.com/users");

  const Row = useCallback(
    ({ index, style }) => (
      <div style={style}>
        {users[index] ? `${users[index].name} (${users[index].email})` : "Loading..."}
      </div>
    ),
    [users]
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <>
      <h2>User List (Virtualized)</h2>
      <List
        height={400}
        itemCount={users.length}
        itemSize={40}
        width={"100%"}
      >
        {Row}
      </List>
    </>
  );
};

export default React.memo(Users);