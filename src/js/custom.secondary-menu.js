/*!
 * File: dismiss.js
 *
 * Desc: js for dismissing elements from the dom via close button
 */

//Drupal.behaviors.customSecondaryMenu = {
//  attach: function (context, settings) {
  let activelink = document.querySelector('#block-kraken-secondary-menu .is-active').textContent;
  let target = document.querySelector('#ubc7-unit-navigation-secondary .current-menu-link');
  if(typeof activelink !== 'undefined' || activelink !== null) {
    target.textContent = activelink;
  }

//  }
//};
