// @flow
import {index} from '../people_fetcher';

index().then((people) => {
  const names = people.map(person => `${person.firstName} ${person.lastName}`);

  console.log(names);
});


