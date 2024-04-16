exports.up = (knex) => {
  return knex.raw(`        
      CREATE TABLE IF NOT EXISTS users(
          id UUID NOT NULL DEFAULT uuid_generate_v4(),
          name TEXT NOT NULL,
          email VARCHAR(75) NOT NULL,
          stripe_customer_id VARCHAR(75),
          avatar VARCHAR(255),
          bio VARCHAR(511),
          onsched_customer_id varchar(255),
          verified BOOLEAN NOT NULL DEFAULT false,
          deleted BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT pk_user_id PRIMARY KEY (id)
      )
      WITH (
          OIDS=FALSE
      );

      CREATE INDEX idx_updated_at_users
      ON users
      USING BTREE (updated_at);
  `);
};

exports.down = (knex) => {
  return knex.raw(`
      DROP TABLE IF EXISTS users;
      DROP INDEX IF EXISTS idx_updated_at_users;
  `);
};
