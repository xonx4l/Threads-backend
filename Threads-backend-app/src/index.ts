import express from "express";
import createApolloSraphqlServer from "./graphql";
import { expressMiddleware } from "@apollo/server/express4";



async function init () {
const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use (express.json());

app.get("/", (req, res) => {
    res.json({ message: "The party's on!!!" });
});

app.use("/graphql", expressMiddleware(await createApolloGraphqlSever()));

app.listen(PORT,() => console.log(` Party started at PORT: ${PORT}`));
}

init ();