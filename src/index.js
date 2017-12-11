import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

require('dotenv').config();

const app = new Koa();
const router = new KoaRouter();
const PORT = process.env.PORT || 8080;

const SCHEMA = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema: SCHEMA }));
router.get('/graphql', graphqlKoa({ schema: SCHEMA }));

router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql',
}));

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on http://localhost:${PORT}/graphql`);
console.log(`GraphiQL on http://localhost:${PORT}/graphiql`);
app.listen(PORT);
