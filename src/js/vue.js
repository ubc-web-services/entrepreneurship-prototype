/*!
 * File: vue.js
 *
 * Desc: primary entry point for vue.js functionality.
 */

 /* Import Vue */
import Vue from 'vue';

/* Import libraries */
import ClickoutEvent from 'clickout-event';
import VueScrollto from 'vue-scrollto';
import SlideUpDown from 'vue-slide-up-down';
import VueTinySlider from 'vue-tiny-slider';

/* Import custom components globally */
import Accordion from './components/accordion';
import Disclose from './components/disclose';
import Discloseclf from './components/discloseclf';
import Disclosebutton from './components/disclosebutton';
import Dropdown from './components/dropdown';
import Message from './components/message';
import Stickynav from './components/stickynav';
import Tab from './components/tab';
//import Tabcordion from './components/tabcordion';
import Tabs from './components/tabs';

/* Declare global components */
Vue.component('slide-up-down', SlideUpDown);
Vue.component('accordion', Accordion);
Vue.component('disclose', Disclose);
Vue.component('discloseclf', Discloseclf);
Vue.component('disclosebutton', Disclosebutton);
Vue.component('dropdown', Dropdown);
Vue.component('message', Message);
Vue.component('stickynav', Stickynav);
Vue.component('tab', Tab);
//Vue.component('tabcordion', Tabcordion);
Vue.component('tabs', Tabs);
Vue.component('tiny-slider', VueTinySlider);

/* Declare plugins */
Vue.use(VueScrollto, {
  container: "body",
  duration: 150,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

/* Adjust Vue settings */
Vue.config.productionTip = false;

/* Add global filters */
Vue.filter('round', function(value) {
  value = Math.round( value * 10 ) / 10;
  return value;
});

Vue.filter('dashSeparated', function (value) {
  if (value) {
    return value.replace(/\s+/g, '-');
  }
});

Vue.filter('lowercase', function (value) {
  return value.toLowerCase();
});

/* Declare main Vue instance */
var maincontent = new Vue({
  el: '#main-content',
  delimiters: ['<%','%>'],
  data() {
    return {
      copyButton: false,
      copyLink: 'copy link',
      showSearch: false,
      showMobileNav: false,
      showMobileSecNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    toggleMobileSecNav() {
      this.showMobileSecNav = !this.showMobileSecNav;
    },
    /* copy current url to clipboard and update button text */
    copyUrl() {
      const el = document.createElement('textarea');
      el.value = window.location.href;;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.copyLink = 'link copied';
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
});
