import React from "react";

const isInTwenties = user => user.age >= 20 && user.age < 30;
const makeFullName = user => `${user.firstName} ${user.lastName}`;
const isAtLeastEightChars = fullName => fullName.length >= 8;
const withMapAndFilter = users => {
  return users
    .filter(isInTwenties)
    .map(makeFullName)
    .filter(isAtLeastEightChars);
};

const withReducer = users => {
  return users.reduce((accumulator, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    if (isInTwenties(user) && isAtLeastEightChars(fullName)) {
      accumulator.push(fullName);
    }
    return accumulator;
  }, []);
};

const TestReducer = () => {
  const users = [
    {
      firstName: "Bob",
      lastName: "Doe",
      age: 37
    },
    {
      firstName: "Rita",
      lastName: "Smith",
      age: 21
    },
    {
      firstName: "Rick",
      lastName: "Fish",
      age: 28
    },
    {
      firstName: "Betty",
      lastName: "Bird",
      age: 44
    },
    {
      firstName: "Joe",
      lastName: "Grover",
      age: 22
    },
    {
      firstName: "Jill",
      lastName: "Pill",
      age: 19
    },
    {
      firstName: "Sam",
      lastName: "Smith",
      age: 22
    }
  ];
  return (
    <>
      <ul>
        {users.map(user => (
          <li>
            {user.firstName} {user.lastName} -{user.age}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {withMapAndFilter(users).map(fullName => (
          <li>{fullName}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {withReducer(users).map(fullName => (
          <li>{fullName}</li>
        ))}
      </ul>
    </>
  );
};

export default TestReducer;
