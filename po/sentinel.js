var Redis = require('ioredis');
var redis = new Redis();

redis.set('foo', 'bar');
redis.get('foo', function (err, result) {
  console.log(result);
});
/*var Redis = require('ioredis');
var redis = new Redis({
  sentinels: [{ host: '192.168.101.128', port: 26379 }],
  name: 'mymaster'
});

redis.set('xiaoming', '123');
console.log(redis.get("xiaoming"));*/