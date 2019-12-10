import React from "react";
import { users } from "./users";
const isInTwenties = user => user.age >= 20 && user.age < 30;
const makeFullName = user => `${user.firstName} ${user.lastName}`;
const isAtLeastEightChars = fullName => fullName.length >= 8;
const withMapAndFilter = users => {
  console.time("withMapAndFilter");
  const t1 = performance.now();
  const res = users
    .filter(isInTwenties)
    .map(makeFullName)
    .filter(isAtLeastEightChars);
  const t2 = performance.now();
  console.timeEnd("withMapAndFilter");
  return [res, t2 - t1];
};

const withReducer = users => {
  const t1 = performance.now();
  console.time("withReducer");
  const res = users.reduce((accumulator, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    if (isInTwenties(user) && isAtLeastEightChars(fullName)) {
      accumulator.push(fullName);
    }
    return accumulator;
  }, []);
  console.timeEnd("withReducer");
  const t2 = performance.now();
  return [res, t2 - t1];
};

const TestReducer = () => {
  const withMapAndFilterArr = withMapAndFilter(users);
  const withReducerArr = withReducer(users);
  return (
    <>
      <h3>No of users: {users.length}</h3>
      <h3>withMapAndFilter: {withMapAndFilterArr[1]}</h3>
      {/* <ul>
        {withMapAndFilterArr[0].map(fullName => (
          <li>{fullName}</li>
        ))}
      </ul> */}
      <hr />
      <h3>withReducer: {withReducerArr[1]}</h3>
      {/* <ul>
        {withReducerArr[0].map(fullName => (
          <li>{fullName}</li>
        ))}
      </ul> */}
    </>
  );
};

export default TestReducer;
