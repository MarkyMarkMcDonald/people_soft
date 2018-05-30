# Avoiding complex selenium tests with contracts

This is an example of using json schemas to validate endpoints and create flow types.

The goal of a setup like this is to maintain high confidence in the test suite without bloating feature tests.

This was inspired by a Sarah Mei tweet in a chain about avoiding selenium:
https://twitter.com/sarahmei/status/929240592348884992

Right now the types need to be regenerated with `npm run regenerate-flow-types-from-schemas`.
If I was setting this up in a real project, I would have a check/test that makes sure the flow types are up to date.

If you'd like to play around with the project locally:

Setup:

```
bundle install
npm install
```

Validating the contract:

```
rake
./node_modules/.bin/flow
```

