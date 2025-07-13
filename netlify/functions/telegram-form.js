const https = require('https');
const querystring = require('querystring');

exports.handler = async (event, context) => {
    // Разрешаем только POST запросы
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { phone, name, url } = JSON.parse(event.body);
        
        // Получаем переменные окружения
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        
        if (!BOT_TOKEN || !CHAT_ID) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Missing environment variables' })
            };
        }
        
        // Формируем сообщение для отправки в Telegram
        const message = `🔔 Новая заявка с сайта
📱 Телефон: ${phone}
👤 Имя: ${name}
🌐 Страница: ${url}

#новая_заявка`;

        // Параметры для отправки в Telegram
        const params = querystring.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        });

        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: `/bot${BOT_TOKEN}/sendMessage`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(params)
            }
        };

        // Отправляем запрос в Telegram
        const telegramResponse = await new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            
            req.on('error', reject);
            req.write(params);
            req.end();
        });

        if (telegramResponse.ok) {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Сообщение отправлено в Telegram' 
                })
            };
        } else {
            throw new Error('Telegram API error: ' + JSON.stringify(telegramResponse));
        }

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                error: 'Internal server error',
                details: error.message 
            })
        };
    }
};
