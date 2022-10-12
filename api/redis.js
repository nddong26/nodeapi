const redis = require("ioredis");
const Redis = require("ioredis");

const redisClient = new Redis.Cluster([
    {
        port: 6379,
        host: "192.168.56.101",
        password: "123456"
    },
    {
        port: 6379,
        host: "192.168.56.122",
        password: "123456"
    },
    {
        port: 6379,
        host: "192.168.56.123",
        password: "123456"
    },
]);
redisClient.on('error', err => {
    console.log('Error ' + err);
});

module.exports = redisClient