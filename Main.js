'use strict';

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (((mins / 60) * 360) + 90);
  minsHand.style.transform = `rotate(${minsDegrees})deg`;

  const hour = now.getHours();
  const hourDegrees = (((hour / 12) * 360) + 90);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function removeTransition() {
  if (secondsDegrees === 0) {
    secondsHand.style.transition = `all 0s`;
  } else {
    secondsHand.style.transition = `all 0.05s`;
  }
}

setInterval(setDate, 1000);
secondHand.addEventListener('transitionend', removeTransition);