import "./slider";
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';
import calc from './modules/calc.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let calcForm = {};
  modals();
  tabs();
  forms(calcForm);
  calc(calcForm);
});