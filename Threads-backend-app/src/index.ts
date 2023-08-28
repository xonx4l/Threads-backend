import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';


async function init () {
const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use (express.json());

//Create Graphql Server 
const gqlServer = new ApolloServer({
    typeDefs: `
    type Query{
        hello: String
        say(name: String): String 
    }`, // Schema
    resolvers: {
        Query: {
            hello: () => ` Sexy sex you konw!!`,
            say: (_, {name}: {name: string}) => `Hey ${name}, How are you?`
        },
    },

});

// Start the gqlServer
await gqlServer.start()

app.get("/", (req, res) => {
    res.json({ message: "The party's on!!!" });
});

app.use('/graphql', expressMiddleware(gqlServer));

app.listen(PORT,() => console.log(` Party started at PORT: ${PORT}`));
}

init ();