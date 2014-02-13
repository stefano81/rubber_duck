// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.duck.App = (function() {

    function App() {
      this.beak = new duck.Beak(this);
      this.brain = new duck.Brain(this);
    }

    return App;

  })();

  $(function() {
    return window.duck = new App;
  });

  duck.Conversation = (function() {

    function Conversation() {
      this.conversation = [];
    }

    Conversation.prototype.add = function(question, answer) {
      return this.conversation.push({
        question: question,
        answer: answer
      });
    };

    return Conversation;

  })();

  window.duck.Navigation = (function() {

    function Navigation(duck) {
      this.duck = duck;
      this.go = __bind(this.go, this);

      this.bindUI = __bind(this.bindUI, this);

      this.bindUI();
    }

    Navigation.prototype.bindUI = function() {
      return $('nav a').click(this.go);
    };

    Navigation.prototype.go = function(event) {
      var link, target;
      event.preventDefault();
      link = $(event.currentTarget);
      target = $(link.attr('href'));
      return $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000);
    };

    return Navigation;

  })();

  window.duck.Success = (function() {

    function Success(duck) {
      this.duck = duck;
      this.done = __bind(this.done, this);

      this.bindUI = __bind(this.bindUI, this);

      this.bindUI();
    }

    Success.prototype.bindUI = function() {
      return $('.done').click(this.done);
    };

    Success.prototype.done = function(event) {
      event.preventDefault();
      return $('.congratulations').slideUp();
    };

    return Success;

  })();

}).call(this);
