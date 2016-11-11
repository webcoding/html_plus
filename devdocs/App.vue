
// views 根

<template>
  <header class="_header" role="banner">
    <button type="button" class="_mobile-btn _back-btn">Back</button>
    <button type="button" class="_mobile-btn _forward-btn">Forward</button>
    <button type="button" class="_mobile-btn _menu-btn">Menu</button>
    <button type="button" class="_mobile-btn _home-btn">Home</button>
    <form class="_search" role="search">
      <input type="search" class="_search-input" placeholder="Search…" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="30" aria-label="Search">
      <button type="reset" class="_search-clear" title="Clear search">Clear search</button>
      <div class="_search-tag"></div>
    </form>
    <h1 class="_logo">
      <a href="/" class="_nav-link" title="Offline API Documentation Browser">DevDocs</a>
    </h1>
    <nav class="_nav" role="navigation">
      <a href="/offline" class="_nav-link">Offline</a>
      <a href="/about" class="_nav-link">About</a>
      <a href="/news" class="_nav-link">News</a>
      <a href="/help" class="_nav-link">Tips</a>
    </nav>
  </header>
  <section class="_sidebar" tabindex="-1">
    <div class="_list" role="navigation">
      <a href="/angular~2.0_typescript/" class="_list-item"><span class="_list-arrow"></span>Angular 2.0 TypeScript</a>
      <a href="/angularjs~1.5/" class="_list-item"><span class="_list-arrow"></span>Angular.js 1.5</a>
      <a href="/angularjs~1.4/" class="_list-item"><span class="_list-arrow"></span>Angular.js 1.4</a>
      <a href="/angularjs~1.3/" class="_list-item"><span class="_list-arrow"></span>Angular.js 1.3</a>
      <a href="/angularjs~1.2/" class="_list-item"><span class="_list-arrow"></span>Angular.js 1.2</a>
      <a href="/ansible/" class="_list-item"><span class="_list-arrow"></span>Ansible</a>
      <a href="/apache_http_server/" class="_list-item"><span class="_list-arrow"></span>Apache HTTP Server</a>
      <a href="/apache_pig~0.16/" class="_list-item"><span class="_list-arrow"></span>Apache Pig 0.16</a>
      <a href="/apache_pig~0.15/" class="_list-item"><span class="_list-arrow"></span>Apache Pig 0.15</a>
      <a href="/apache_pig~0.14/" class="_list-item"><span class="_list-arrow"></span>Apache Pig 0.14</a>
      <a href="/apache_pig~0.13/" class="_list-item"><span class="_list-arrow"></span>Apache Pig 0.13</a>
      <a href="/backbone/" class="_list-item"><span class="_list-arrow"></span>Backbone.js</a>
      <a href="/bootstrap~4/" class="_list-item"><span class="_list-arrow"></span>Bootstrap 4</a>
      <a href="/bootstrap~3/" class="_list-item"><span class="_list-arrow"></span>Bootstrap 3</a>
      <a href="/bower/" class="_list-item"><span class="_list-arrow"></span>Bower</a>
      <a href="/c/" class="_list-item"><span class="_list-arrow"></span>C</a>
      <a href="/cakephp~3.2/" class="_list-item"><span class="_list-arrow"></span>CakePHP 3.2</a>
      <a href="/cakephp~3.1/" class="_list-item"><span class="_list-arrow"></span>CakePHP 3.1</a>
      <a href="/cakephp~2.8/" class="_list-item"><span class="_list-arrow"></span>CakePHP 2.8</a>
      <a href="/cakephp~2.7/" class="_list-item"><span class="_list-arrow"></span>CakePHP 2.7</a>
      <a href="/chai/" class="_list-item"><span class="_list-arrow"></span>Chai</a>
      <a href="/chef~12/" class="_list-item"><span class="_list-arrow"></span>Chef 12</a>
      <a href="/chef~11/" class="_list-item"><span class="_list-arrow"></span>Chef 11</a>
      <a href="/clojure~1.8/" class="_list-item"><span class="_list-arrow"></span>Clojure 1.8</a>
      <a href="/clojure~1.7/" class="_list-item"><span class="_list-arrow"></span>Clojure 1.7</a>
      <a href="/cmake~3.6/" class="_list-item"><span class="_list-arrow"></span>CMake 3.6</a>
      <a href="/cmake~3.5/" class="_list-item"><span class="_list-arrow"></span>CMake 3.5</a>
      <a href="/codeigniter~3/" class="_list-item"><span class="_list-arrow"></span>CodeIgniter 3</a>
      <a href="/coffeescript/" class="_list-item"><span class="_list-arrow"></span>CoffeeScript</a>
      <a href="/cordova/" class="_list-item"><span class="_list-arrow"></span>Cordova</a>
      <a href="/cpp/" class="_list-item"><span class="_list-arrow"></span>C++</a>
      <a href="/crystal/" class="_list-item"><span class="_list-arrow"></span>Crystal</a>
      <a href="/css/" class="_list-item"><span class="_list-arrow"></span>CSS</a>
      <a href="/d3/" class="_list-item"><span class="_list-arrow"></span>D3.js</a>
      <a href="/django~1.9/" class="_list-item"><span class="_list-arrow"></span>Django 1.9</a>
      <a href="/django~1.8/" class="_list-item"><span class="_list-arrow"></span>Django 1.8</a>
      <a href="/dojo/" class="_list-item"><span class="_list-arrow"></span>Dojo</a>
      <a href="/dom/" class="_list-item"><span class="_list-arrow"></span>DOM</a>
      <a href="/dom_events/" class="_list-item"><span class="_list-arrow"></span>DOM Events</a>
      <a href="/drupal~8/" class="_list-item"><span class="_list-arrow"></span>Drupal 8</a>
      <a href="/drupal~7/" class="_list-item"><span class="_list-arrow"></span>Drupal 7</a>
      <a href="/elixir/" class="_list-item"><span class="_list-arrow"></span>Elixir</a>
      <a href="/ember/" class="_list-item"><span class="_list-arrow"></span>Ember.js</a>
      <a href="/erlang~19/" class="_list-item"><span class="_list-arrow"></span>Erlang 19</a>
      <a href="/erlang~18/" class="_list-item"><span class="_list-arrow"></span>Erlang 18</a>
      <a href="/express/" class="_list-item"><span class="_list-arrow"></span>Express</a>
      <a href="/flow/" class="_list-item"><span class="_list-arrow"></span>Flow</a>
      <a href="/gcc~5/" class="_list-item"><span class="_list-arrow"></span>GCC 5</a>
      <a href="/gcc~5_cpp/" class="_list-item"><span class="_list-arrow"></span>GCC 5 CPP</a>
      <a href="/gcc~4/" class="_list-item"><span class="_list-arrow"></span>GCC 4</a>
      <a href="/gcc~4_cpp/" class="_list-item"><span class="_list-arrow"></span>GCC 4 CPP</a>
      <a href="/git/" class="_list-item"><span class="_list-arrow"></span>Git</a>
      <a href="/gnu_fortran~6/" class="_list-item"><span class="_list-arrow"></span>GNU Fortran 6</a>
      <a href="/gnu_fortran~5/" class="_list-item"><span class="_list-arrow"></span>GNU Fortran 5</a>
      <a href="/gnu_fortran~4/" class="_list-item"><span class="_list-arrow"></span>GNU Fortran 4</a>
      <a href="/go/" class="_list-item"><span class="_list-arrow"></span>Go</a>
      <a href="/grunt/" class="_list-item"><span class="_list-arrow"></span>Grunt</a>
      <a href="/haskell/" class="_list-item"><span class="_list-arrow"></span>Haskell</a>
      <a href="/haxe/" class="_list-item"><span class="_list-arrow"></span>Haxe </a>
      <a href="/haxe~cpp/" class="_list-item"><span class="_list-arrow"></span>Haxe C++</a>
      <a href="/haxe~cs/" class="_list-item"><span class="_list-arrow"></span>Haxe C#</a>
      <a href="/haxe~flash/" class="_list-item"><span class="_list-arrow"></span>Haxe Flash</a>
      <a href="/haxe~java/" class="_list-item"><span class="_list-arrow"></span>Haxe Java</a>
      <a href="/haxe~javascript/" class="_list-item"><span class="_list-arrow"></span>Haxe JavaScript</a>
      <a href="/haxe~neko/" class="_list-item"><span class="_list-arrow"></span>Haxe Neko</a>
      <a href="/haxe~php/" class="_list-item"><span class="_list-arrow"></span>Haxe PHP</a>
      <a href="/haxe~python/" class="_list-item"><span class="_list-arrow"></span>Haxe Python</a>
      <a href="/html/" class="_list-item"><span class="_list-arrow"></span>HTML</a>
      <a href="/http/" class="_list-item"><span class="_list-arrow"></span>HTTP</a>
      <a href="/influxdata/" class="_list-item"><span class="_list-arrow"></span>InfluxData</a>
      <a href="/javascript/" class="_list-item"><span class="_list-arrow"></span>JavaScript</a>
      <a href="/jquery/" class="_list-item"><span class="_list-arrow"></span>jQuery</a>
      <a href="/jquerymobile/" class="_list-item"><span class="_list-arrow"></span>jQuery Mobile</a>
      <a href="/jqueryui/" class="_list-item"><span class="_list-arrow"></span>jQuery UI</a>
      <a href="/julia/" class="_list-item"><span class="_list-arrow"></span>Julia</a>
      <a href="/knockout/" class="_list-item"><span class="_list-arrow"></span>Knockout.js</a>
      <a href="/kotlin/" class="_list-item"><span class="_list-arrow"></span>Kotlin</a>
      <a href="/laravel~5.2/" class="_list-item"><span class="_list-arrow"></span>Laravel 5.2</a>
      <a href="/laravel~5.1/" class="_list-item"><span class="_list-arrow"></span>Laravel 5.1</a>
      <a href="/less/" class="_list-item"><span class="_list-arrow"></span>Less</a>
      <a href="/lodash~4/" class="_list-item"><span class="_list-arrow"></span>lodash 4</a>
      <a href="/lodash~3/" class="_list-item"><span class="_list-arrow"></span>lodash 3</a>
      <a href="/love/" class="_list-item"><span class="_list-arrow"></span>LÖVE</a>
      <a href="/lua~5.3/" class="_list-item"><span class="_list-arrow"></span>Lua 5.3</a>
      <a href="/lua~5.2/" class="_list-item"><span class="_list-arrow"></span>Lua 5.2</a>
      <a href="/lua~5.1/" class="_list-item"><span class="_list-arrow"></span>Lua 5.1</a>
      <a href="/marionette/" class="_list-item"><span class="_list-arrow"></span>Marionette.js</a>
      <a href="/markdown/" class="_list-item"><span class="_list-arrow"></span>Markdown</a>
      <a href="/matplotlib~1.5/" class="_list-item"><span class="_list-arrow"></span>Matplotlib 1.5</a>
      <a href="/meteor/" class="_list-item"><span class="_list-arrow"></span>Meteor</a>
      <a href="/minitest/" class="_list-item"><span class="_list-arrow"></span>Ruby / Minitest</a>
      <a href="/mocha/" class="_list-item"><span class="_list-arrow"></span>Mocha</a>
      <a href="/modernizr/" class="_list-item"><span class="_list-arrow"></span>Modernizr</a>
      <a href="/moment/" class="_list-item"><span class="_list-arrow"></span>Moment.js</a>
      <a href="/mongoose/" class="_list-item"><span class="_list-arrow"></span>Mongoose</a>
      <a href="/nginx/" class="_list-item"><span class="_list-arrow"></span>nginx</a>
      <a href="/nginx_lua_module/" class="_list-item"><span class="_list-arrow"></span>nginx / Lua Module</a>
      <a href="/node/" class="_list-item"><span class="_list-arrow"></span>Node.js </a>
      <a href="/node~4_lts/" class="_list-item"><span class="_list-arrow"></span>Node.js 4 LTS</a>
      <a href="/nokogiri/" class="_list-item"><span class="_list-arrow"></span>Nokogiri</a>
      <a href="/npm/" class="_list-item"><span class="_list-arrow"></span>npm</a>
      <a href="/numpy~1.11/" class="_list-item"><span class="_list-arrow"></span>NumPy 1.11</a>
      <a href="/numpy~1.10/" class="_list-item"><span class="_list-arrow"></span>NumPy 1.10</a>
      <a href="/opentsdb/" class="_list-item"><span class="_list-arrow"></span>OpenTSDB</a>
      <a href="/padrino/" class="_list-item"><span class="_list-arrow"></span>Padrino</a>
      <a href="/perl~5.24/" class="_list-item"><span class="_list-arrow"></span>Perl 5.24</a>
      <a href="/perl~5.22/" class="_list-item"><span class="_list-arrow"></span>Perl 5.22</a>
      <a href="/perl~5.20/" class="_list-item"><span class="_list-arrow"></span>Perl 5.20</a>
      <a href="/phalcon/" class="_list-item"><span class="_list-arrow"></span>Phalcon</a>
      <a href="/phaser/" class="_list-item"><span class="_list-arrow"></span>Phaser</a>
      <a href="/phoenix/" class="_list-item"><span class="_list-arrow"></span>Phoenix</a>
      <a href="/php/" class="_list-item"><span class="_list-arrow"></span>PHP</a>
      <a href="/phpunit~5/" class="_list-item"><span class="_list-arrow"></span>PHPUnit 5</a>
      <a href="/phpunit~4/" class="_list-item"><span class="_list-arrow"></span>PHPUnit 4</a>
      <a href="/postgresql~9.5/" class="_list-item"><span class="_list-arrow"></span>PostgreSQL 9.5</a>
      <a href="/postgresql~9.4/" class="_list-item"><span class="_list-arrow"></span>PostgreSQL 9.4</a>
      <a href="/python~3.5/" class="_list-item"><span class="_list-arrow"></span>Python 3.5</a>
      <a href="/python~2.7/" class="_list-item"><span class="_list-arrow"></span>Python 2.7</a>
      <a href="/q/" class="_list-item"><span class="_list-arrow"></span>Q</a>
      <a href="/rails~5.0/" class="_list-item"><span class="_list-arrow"></span>Ruby on Rails 5.0</a>
      <a href="/rails~4.2/" class="_list-item"><span class="_list-arrow"></span>Ruby on Rails 4.2</a>
      <a href="/rails~4.1/" class="_list-item"><span class="_list-arrow"></span>Ruby on Rails 4.1</a>
      <a href="/ramda/" class="_list-item"><span class="_list-arrow"></span>Ramda</a>
      <a href="/react/" class="_list-item"><span class="_list-arrow"></span>React</a>
      <a href="/react_native/" class="_list-item"><span class="_list-arrow"></span>React Native</a>
      <a href="/redis/" class="_list-item"><span class="_list-arrow"></span>Redis</a>
      <a href="/redux/" class="_list-item"><span class="_list-arrow"></span>Redux</a>
      <a href="/relay/" class="_list-item"><span class="_list-arrow"></span>Relay</a>
      <a href="/requirejs/" class="_list-item"><span class="_list-arrow"></span>RequireJS</a>
      <a href="/rethinkdb~javascript/" class="_list-item"><span class="_list-arrow"></span>RethinkDB JavaScript</a>
      <a href="/rethinkdb~ruby/" class="_list-item"><span class="_list-arrow"></span>RethinkDB Ruby</a>
      <a href="/rethinkdb~python/" class="_list-item"><span class="_list-arrow"></span>RethinkDB Python</a>
      <a href="/rethinkdb~java/" class="_list-item"><span class="_list-arrow"></span>RethinkDB Java</a>
      <a href="/ruby~2.3/" class="_list-item"><span class="_list-arrow"></span>Ruby 2.3</a>
      <a href="/ruby~2.2/" class="_list-item"><span class="_list-arrow"></span>Ruby 2.2</a>
      <a href="/rust/" class="_list-item"><span class="_list-arrow"></span>Rust</a>
      <a href="/sass/" class="_list-item"><span class="_list-arrow"></span>Sass</a>
      <a href="/sinon/" class="_list-item"><span class="_list-arrow"></span>Sinon</a>
      <a href="/socketio/" class="_list-item"><span class="_list-arrow"></span>Socket.IO</a>
      <a href="/browser_support_tables/" class="_list-item"><span class="_list-arrow"></span>Support Tables</a>
      <a href="/svg/" class="_list-item"><span class="_list-arrow"></span>SVG</a>
      <a href="/symfony~3.1/" class="_list-item"><span class="_list-arrow"></span>Symfony 3.1</a>
      <a href="/symfony~3.0/" class="_list-item"><span class="_list-arrow"></span>Symfony 3.0</a>
      <a href="/symfony~2.8/" class="_list-item"><span class="_list-arrow"></span>Symfony 2.8</a>
      <a href="/symfony~2.7/" class="_list-item"><span class="_list-arrow"></span>Symfony 2.7</a>
      <a href="/tcl_tk/" class="_list-item"><span class="_list-arrow"></span>Tcl/Tk</a>
      <a href="/tensorflow~python/" class="_list-item"><span class="_list-arrow"></span>TensorFlow Python</a>
      <a href="/tensorflow~cpp/" class="_list-item"><span class="_list-arrow"></span>TensorFlow C++</a>
      <a href="/typescript/" class="_list-item"><span class="_list-arrow"></span>TypeScript</a>
      <a href="/underscore/" class="_list-item"><span class="_list-arrow"></span>Underscore.js</a>
      <a href="/vagrant/" class="_list-item"><span class="_list-arrow"></span>Vagrant</a>
      <a href="/vue/" class="_list-item"><span class="_list-arrow"></span>Vue.js</a>
      <a href="/webpack/" class="_list-item"><span class="_list-arrow"></span>webpack</a>
      <a href="/xslt_xpath/" class="_list-item"><span class="_list-arrow"></span>XSLT & XPath</a>
      <a href="/yii~2.0/" class="_list-item"><span class="_list-arrow"></span>Yii 2.0</a>
      <a href="/yii~1.1/" class="_list-item"><span class="_list-arrow"></span>Yii 1.1</a>
    </div>
  </section>
  <div class="_container" role="document">
    <main class="_content _content-loading" role="main" tabindex="1">
      <router-view
        class="view"
        keep-alive
        transition="slide">
      </router-view>
    </main>
  </div>
  <!-- <plus-debug></plus-debug> --> -->
</template>

<script type="text/babel">
  export default {
    replace: false, //默认自定义标签的作用只是作为一个挂载点，如不替换原位置元素，使用 false
    components: {
      'plus-debug': require('./debug.vue'),
    }
  };
</script>

<style lang="sass">
@import "../src/_style/theme/default/smacss";
@import "./pages/app.css";
// @import "./styles/application.css.scss";

small{
  color: gray;
}
.content-padded{
  /*line-height: 1.8;*/
}
.content-padded {
  &>h1,
  &>h2,
  &>h3{
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  &>h4,
  &>h5,
  &>h6{
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

}
.example{
  margin-top: 1rem;
}


// @import "../../src/style/base/reset";
//
// html, body {
//     height: 100%;
//     -webkit-tap-highlight-color: transparent;
// }
//
// body, .page {
//     background-color: #FBF9FE;
// }
//
// .container {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     overflow: hidden;
// }
//
// .page {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;
// }
//
// .hd {
//     padding: 2em 0;
// }
//
// .page_desc {
//     text-align: center;
//     color: #888;
//     font-size: 14px;
// }
//
// .bd.spacing {
//     padding: 0 15px;
// }
//
// .page_title {
//     text-align: center;
//     font-size: 34px;
//     color: #3CC51F;
//     font-weight: 400;
//     margin: 0 15%;
// }
//
// // index
// .global_navs {
//     background-color: transparent;
//     &:before, &:after {
//         border-color: #D9DBDA;
//     }
//     .cell {
//         padding-top: .5em;
//         padding-bottom: .5em;
//         &:before {
//             border-color: #D9DBDA;
//         }
//
//     }
//     .icon_nav {
//         width: 28px;
//         height: 28px;
//         display: block;
//         margin-right: .7em;
//     }
// }
//
// // button
// .page {
//     &.button {
//         .page_title {
//             color: #225FBA;
//         }
//         .bd {
//             padding: 0 15px;
//         }
//         .button_sp_area {
//             padding: 10px 0;
//             width: 60%;
//             margin: 0 auto;
//             text-align: justify;
//             text-justify: distribute-all-lines; /*ie6-9*/
//             //text-align-last:justify;/* ie9*/
//             //-moz-text-align-last:justify;/*ff*/
//             //-webkit-text-align-last:justify;/*chrome 20+*/
//
//             font-size: 0;
//             &:after {
//                 display: inline-block;
//                 width: 100%;
//                 height: 0;
//                 font-size: 0;
//                 margin: 0;
//                 padding: 0;
//                 overflow: hidden;
//                 content: ".";
//             }
//         }
//     }
// }
//
// // table view
// .page {
//     &.cell {
//         .page_title {
//             color: #225FBA;
//         }
//         .bd {
//             padding-bottom: 30px;
//         }
//     }
// }
//
// // toast
// .page {
//     &.toast {
//         background-color: #FFFFFF;
//         .bd {
//             padding: 120px 15px 0;
//         }
//     }
// }
//
// // dialog
// .page {
//     &.dialog {
//         background-color: #FFFFFF;
//         .bd {
//             padding: 120px 15px 0;
//         }
//     }
// }
//
// // msg page
// .page {
//     &.msg {
//         background-color: #FFFFFF;
//     }
// }
//
// // article page
// .page {
//     &.article {
//         background-color: #FFFFFF;
//         .page_title {
//             color: #DE7C23;
//         }
//     }
// }
//
// // icons
// .page {
//     &.icons {
//         background-color: #FFFFFF;
//         text-align: center;
//         .page_title {
//             color: #3E24BD;
//         }
//         .bd {
//             padding: 30px 0;
//             text-align: center;
//         }
//         .icon_sp_area {
//             padding: 10px 20px;
//             text-align: left;
//         }
//         i {
//             margin: 0 5px 10px;
//         }
//     }
// }
//
// @keyframes slideIn {
//     from {
//         transform: translate3d(100%, 0, 0);
//     }
//     to {
//         transform: translate3d(0, 0, 0);
//     }
// }
//
// @keyframes slideOut {
//     from {
//         transform: translate3d(0, 0, 0);
//     }
//     to {
//         transform: translate3d(100%, 0, 0);
//     }
// }
//
// .page.slideIn {
//     animation: slideIn .2s forwards;
// }
//
// .page.slideOut {
//     animation: slideOut .2s forwards;
// }
//
//
//
// body {
//   overflow-x: hidden;
// }
//
// .slide-transition {
//   transition: left 0.3s ease;
//   width: 100%;
// }
//
// .slide-enter, .slide-leave {
//   left: 100%;
// }
//
// .slide-leave {
//   left: 100%;
// }
//
// .app-transition {
//   transition: opacity 0.3s ease;
// }
//
// .app-enter, .app-leave {
//   opacity: 0;
// }

</style>
