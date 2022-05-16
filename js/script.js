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
  var answer = 0 
  var remainder = 0
  var currentAnswer = 0

  while (currentAnswer > 0 ) {
    currentAnswer = integer1 - integer2
    answer++
  } 
   while (currentAnswer < 0 ) {
    currentAnswer++
    remainder = remainder + currentAnswer
  }

  document.getElementById("output").innerHTML = "Your answer is: " + answer + "The remainder is " + remainder
}


