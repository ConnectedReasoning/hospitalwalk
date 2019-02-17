const MongoClient = require('mongodb').MongoClient;


const mongoHost = process.env.HEYWILLA_MONGO_URL || 'mongodb://localhost:27017';
const mongoDB = process.env.HEYWILLA_DB_NAME || 'hospital_walk';

console.log('mongo host is ', mongoHost);
console.log('mongoDB is ', mongoDB);

const hwMongoDal = {};

hwMongoDal.addEmail = function(addEmailRequest){

  return new Promise((resolve, reject) =>{
    const mongoConnect = MongoClient.connect(mongoHost, {useNewUrlParser: true });
    mongoConnect.then( client => {
      const db = client.db(mongoDB);
      const payload = {id:addEmailRequest.id, emailAddress: addEmailRequest.emailAddress,ref_id:addEmailRequest.ref_id, timestamp:moment().format('MM/DD/YYYY hh:mm')};
      console.log('inserting emailAddress ', payload);
      db.collection('emails').insertOne(payload)
        .then(response => {
          resolve(response.result);
        })
        .then(client.close())
        .catch(error => {
          console.log( ' hwMongoDal.createAccount insertOne account fail', error);
          reject(error);
        });
    }).catch(error =>{
      console.log('hwMongoDal.createAccount error in MongoClient.connect', error);
      reject(error);
    });
  });
}

hwMongoDal.addReferral = function(addReferralRequest){

  return new Promise((resolve, reject) =>{
    const mongoConnect = MongoClient.connect(mongoHost, {useNewUrlParser: true });
    mongoConnect.then( client => {
      const db = client.db(mongoDB);
      const payload = {id:addReferralRequest.id, timestamp:moment().format('MM/DD/YYYY hh:mm')};
      console.log('inserting referral ', payload);
      db.collection('referrals').insertOne(payload)
        .then(response => {
          resolve(response.result);
        })
        .then(client.close())
        .catch(error => {
          console.log( ' hwMongoDal.createAccount insertOne account fail', error);
          reject(error);
        });
    }).catch(error =>{
      console.log('hwMongoDal.createAccount error in MongoClient.connect', error);
      reject(error);
    });
  });
}
module.exports = hwMongoDal;