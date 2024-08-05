class DatabaseConnection {
    constructor(builder) {
        this.host = builder.host;
        this.port = builder.port;
        this.username = builder.username;
        this.passwrod = builder.passwrod;
        this.database = builder.database;
        this.poolSize = builder.poolSize;
    }

    connect() {
        console.log(`Connecting to ${this.database} at ${this.host}:${this.port} as ${this.username} with poolsize ${this.poolSize}`);
    }
}


class DatabaseConnectionBuilder {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }

    setUsername(username) {
        this.username = username;
        return this;
    }
    setPassword(password) {
        this.passwrod = password;
        return this;
    }
    setDatabase(database) {
        this.database = database;
        return this;
    }
    setPoolsize(poolSize) {
        this.poolSize = poolSize;
        return this;
    }
    build() {
        return new DatabaseConnection(this);
    } 
}

const dbConnection = new DatabaseConnectionBuilder('localhost', 5432)
  .setUsername('DBuser')
  .setPassword('secretpassword')
  .setDatabase('mydatabase')
  .setPoolsize(10)
  .build();

  dbConnection.connect();