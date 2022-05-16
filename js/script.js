/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-08-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-08-HTML/",
  })
}

/**
 * Input.
 */

 function buttonClicked() {

  var integer1 = parseInt(document.getElementById('integer1').value)
  var integer2 = parseInt(document.getElementById('integer2').value)
  var currentAnswer = parseInt(document.getElementById('integer1').value)
  var answer = 0 
  var remainder = 0

  if ((integer1 > 0 && integer2 > 0) || (integer1 < 0 && integer2 < 0)) {
    while (Math.abs(currentAnswer) > 0 ) {
      currentAnswer = Math.abs(currentAnswer) - Math.abs(integer2)
      if (currentAnswer > 0) {
        answer++
      }
    } 
     while (Math.abs(currentAnswer) < 0 ) {
      currentAnswer++
      remainder++
    }
  document.getElementById("output").innerHTML = " The answer is: " + answer + " The remainder is: " + remainder    
 }
  if ((integer1 > 0 && integer2 < 0) || (integer1 > 0 && integer2 < 0)) {
    while (Math.abs(currentAnswer) > 0 ) {
      currentAnswer = Math.abs(currentAnswer) - Math.abs(integer2)
      if (currentAnswer > 0) {
        answer++
      }
    } 
     while (currentAnswer < 0 ) {
      currentAnswer++
      remainder++
    }
 }
  document.getElementById("output").innerHTML = " The answer is: " + answer + " The remainder is: " + remainder
}