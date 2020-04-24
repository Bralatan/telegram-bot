var TelegramBot = require('node-telegram-bot-api');
var token = '1233644264:AAEzd39DNrwzOJlw7bHWVNQFwHS34xFfing';
var bot = new TelegramBot(token, { polling: true });


bot.onText(/\/help (.+)/, function (msg, match) {
    var fromId = msg.from.id; 
    var resp = match[1]; 
    bot.sendMessage(fromId, resp);
});

bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id; 
    var photo = '1-2.jpg';
    bot.sendPhoto(chatId, photo, { caption: ':)' });
});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var text = 'Da eto jestko' 
    bot.sendMessage(chatId,text);
});