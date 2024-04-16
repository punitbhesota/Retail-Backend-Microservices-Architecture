exports.up = (knex) => {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS user_details (
      id UUID NOT NULL DEFAULT uuid_generate_v4(),
      user_id UUID NOT NULL,
      address TEXT,
      city TEXT,
      state TEXT,
      zip NUMERIC(5),
      phone_number VARCHAR(20),
      deleted BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT pk_user_details_id PRIMARY KEY (id),
      CONSTRAINT fk_user_details_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
    WITH (
        OIDS=FALSE
    );

    CREATE INDEX idx_updated_at_user_details
    ON user_details
    USING BTREE (updated_at);
  `);
};

exports.down = (knex) => {
  return knex.raw(`
    DROP TABLE IF EXISTS user_details;
    DROP INDEX IF EXISTS idx_updated_at_user_details;
  `);
};
