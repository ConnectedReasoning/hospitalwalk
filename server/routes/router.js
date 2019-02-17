'use strict';
const path = require('path');
const express = require('express');
const heyWillaDal = require('../data/hwMongoDal');


const router = express.Router();
router.get('/api/v1/variables', (req, res, next) =>{
  console.log('in get variables');
  return res.status(202).json(
  {
    message:'Hello Client'
  });
});

router.post('/api/v1/email', (req, res, next) => {
  console.log('post email req.body is ', req.body);
  const guid = uuidv4();
  const reqbody = req.body;
  reqbody.id = guid;
  const addEmailPromise = heyWillaDal.addEmail(reqbody);
  addEmailPromise.then(result =>{
    console.log('addEmail success', result);
    emailer.SendConfirmationEmail(reqbody);
    res.status(200).json({'confirmation_id':reqbody.id});
  }).catch(error =>{
    //console.log('post addEmail error. error is ', error);
    console.log('an internal error occured');
    next(error); 
  });
});

router.get('/referral/:id', (req, res, next) => {
  console.log('hit /referral');
  console.log('you called ref with id = ', req.params.id);
  const referral = {id:req.params.id}
  const referralPromise = heyWillaDal.addReferral(referral);
  referralPromise.then(result =>{
    console.log('addReferral success', result);
  }).catch(error =>{
    //console.log('post addEmail error. error is ', error);
    console.log('an internal error occured');
    next(error); 
  });
  res.sendFile(path.join(
    __dirname, '..', '..', 'public', 'index.html'));
});
router.get('/', (req, res, next) => {
  console.log('hit /');
  res.sendFile(path.join(
    __dirname, '..', '..', 'public', 'index.html'));
});

router.get('*', (req, res, next) => {
  console.log('hit *');
  res.sendFile(path.join(
    __dirname, '..', '..', 'public', 'index.html'));
});

module.exports = router;