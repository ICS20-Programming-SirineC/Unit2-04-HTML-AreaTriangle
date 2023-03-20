// Copyright (c) 2022 Sirine Cherkaoui All rights reserved
//
// Created by: Sirine Cherkaoui
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // input the base and height
  let height = parseFloat(document.getElementById('height-of-triangle').value);
  let base = parseFloat(document.getElementById('base-of-triangle').value);

  // carry out caculations
  let area = base * height * 0.5;

  // display calculations
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
