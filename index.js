var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1556012053,
  channelSecret: 3a70dde3e90c9feca19b79b68ed63212,
  channelAccessToken: 20gDnqxjSvvwaglT5bkj4hFma3ZQ0rtPbyETaiP/Qoy/R13WEy6xvxtxDBluA47R2wA8TJ/NU1+nAea97bDxO55K4G1pf6L9dDIwGOmUaC+y70J4mZwB+6uFQEzGYulw2cJ7yRdjfizAutyM6E4bZgdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
