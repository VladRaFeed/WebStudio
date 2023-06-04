import Joi from 'joi';
import throttle from 'lodash.throttle';

const userName = document.querySelector('#user-name');
const userPhone = document.querySelector('#user-phone');
const userMail = document.querySelector('#user-mail');
const textArea = document.querySelector('#comment');
const form = document.querySelector('.modal');

const userNameSchema = Joi.string().min(2).max(12).alphanum().required();

userName.addEventListener('input', throttle(checkName, 2000));
form.addEventListener('submit', formCheck);

function formCheck(e) {
  e.preventDefault();
}

function checkName(e) {
  if (userNameSchema.validate(e)) {
    console.log(123);
  }
}
