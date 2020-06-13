const express = require("express");
const bodyParser = require("body-parser");
const graphql = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

app.user = bodyParser.json();

app.use(
  "/graphql",
  graphql({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String): String 
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }    
    `),
    rootValue: {
      events: () => {
        return ["Cooking", "Sailing", "Rock Climbing", "All-night-coding"];
      },
      createEvent: (args) => {
        const eventName = args.name;
        return eventName;
      },
    },
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
