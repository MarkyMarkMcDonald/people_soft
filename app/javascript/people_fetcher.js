const index = () => {
  return fetch('people.json')
    .then((response) => {
      return response.json();
    }).then((response) => {
      return response.people;
    });
};

export {
  index
};