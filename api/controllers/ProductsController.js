

'use strict'
const redisClient = require('./../redis');

function makeRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkRedisExist(key) {
    return new Promise((resolve, reject) => {
        redisClient.exists(key, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}


module.exports = {
    readString512: async (req, res) => {
        await sleep(10);
        res.json(makeRandomString(512));
    },
    putToRedis: async (req, res) => {
        for(let i = 0; i < 200000; i++) {
            redisClient.set("MYKEY" + i, makeRandomString(512));
            // if(i %1000 === 0) {
            //     console.log("done " + i);
            // }
        }
        res.json("done");
    },

    checkKeyExist: async (req, res) => {
        let key = getRandomInt(0, 200000);
        const result = await checkRedisExist("MYKEY" + key);
        res.json(result);
    }

}