import knex from "knex";
import { knexSnakeCaseMappers } from "objection";

const instance = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "",
    database: "dayone_todo_provided_server",
  },
  ...knexSnakeCaseMappers({
    underscoreBeforeDigits: true,
  }),
});

export default instance;
