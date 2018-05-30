// @flow
import type {RootType as PeopleResponse} from '../../spec/support/schemas/people.json.flow.js'

const index = () => {
  return fetch('people.json')
    .then((response) => {
      return response.json();
    }).then((response: PeopleResponse) => {
      return response.people;
    });
};

export {
  index
};