export const funThatThrows = name => {
  if (!name) {
    throw new Error('You need the name');
  }

  return `hello ${name}!`;
};

export const funThatThrowsAsync = async name => {
  if (!name) {
    throw new Error('You need the name');
  }
  return Promise.resolve(`hello ${name}`);
};
