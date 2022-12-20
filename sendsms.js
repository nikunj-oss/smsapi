// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'hello lakshi',
     from: '+13614590873',
     to: '+918287018835'
   })
  .then((res)=>console.log("this message has been sent"))
  .catch((err)=>{
    console.log(err);
  });
