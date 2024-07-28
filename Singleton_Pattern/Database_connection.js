class DatabaseConnectionPool {
    constructor() {
        if (DatabaseConnectionPool.instance) {
            return DatabaseConnectionPool.instance;
        }
        this.connections = [];
        this.initializePool();
        DatabaseConnectionPool.instance = this;
        return this;
    }
    initializePool() {
        for (let i = 1 ; i <= 15; i++) {
            this.connections.push(`Connection ${i}`);
        }
        console.log(`Database connection pool initialized with connections:`, this.connections);
    }
    getConnection() {
        if (this.connections.length === 0) {
            throw new Error('No available connections.');
        }
        return this.connections.pop();
    }
    releaseConnection(connection) {
        this.connections.push(connection);
        console.log(`Connection ${connection} released back to the pool.`);
    }

}

const dbPool1 = new DatabaseConnectionPool();
const dbPool2 = new DatabaseConnectionPool();

const conn1 = dbPool1.getConnection();
console.log('Acquired:', conn1);

dbPool2.releaseConnection(conn1);
console.log('Connection pool after release:', dbPool1.connections);