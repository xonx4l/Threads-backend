import { ApolloServer } from "@apollo/server";

async function createApolloSraphqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs:`
                type Query {

                }
                type Mutation {

                }
         `, // Schema
         resolvers : {
            Query:{},
            Mutation:{},
         },
    });

    //Start the gql server
    await gqlServer.start();

    return gqlServer;
}

export default createApolloSraphqlServer;