Modernizr.load({
  load: [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"
  ],
  complete: function() {
    (function($) {
      // $('#loader').fadeOut(300);
      setTimeout("$('html').removeClass('loading');", 1000)
    })(jQuery);
  },
  // callback: function(url, result, key) {
  //   console.log(key);
  // }
});

// Routing
// var HomeView = Backbone.View.extend({
//   template: '<h1>Home</h1>',
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     this.$el.html(this.template);
//   }
// });

// var AboutView = Backbone.View.extend({
//   template: '<h1>About</h1>',
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     this.$el.html(this.template);
//   }
// });

// var AppRouter = Backbone.Router.extend({
//   routes: {
//     '': 'homeRoute',
//     'home': 'homeRoute',
//     'about': 'aboutRoute',
//   },
//   homeRoute: function() {
//     var homeView = new HomeView();
//     $("#content").html(homeView.el);
//   },
//   aboutRoute: function() {
//     var aboutView = new AboutView();
//     $("#content").html(aboutView.el);
//   }
// });
// var appRouter = new AppRouter();
// Backbone.history.start();

// Data binding
// var MessageView = Backbone.View.extend({
//   template: _.template($('#message-template').html()),
//   events: {
//     'keyup #name': 'updateModel'
//   },
//   updateModel: function(event) {
//     this.model.set({
//       name: $("#name").val()
//     });
//   },
//   initialize: function() {
//     this.listenTo(this.model, "change", this.render);
//     this.render();
//   },
//   render: function() {
//     this.$('#message').html(this.template(this.model.toJSON()));
//     return this;
//   }
// });

// var person = new Backbone.Model({
//   name: ''
// });
// messageView = new MessageView({
//   el: $('#message-container'),
//   model: person
// });

// Templating
// var HomeView = Backbone.View.extend({
//   template: _.template($("#home-template").html()),
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     this.$el.html(this.template({
//       greeting: "Welcome to Backbone!"
//     }));
//   }
// });


// var AboutView = Backbone.View.extend({
//   template: _.template($("#about-template").html()),
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     this.$el.html(this.template({
//       content: "As a software developer, I've always loved to build things..."
//     }));
//   }
// });

// var AppRouter = Backbone.Router.extend({
//   routes: {
//     '': 'homeRoute',
//     'home': 'homeRoute',
//     'about': 'aboutRoute',
//   },
//   homeRoute: function() {
//     var homeView = new HomeView();
//     $("#content").html(homeView.el);
//   },
//   aboutRoute: function() {
//     var aboutView = new AboutView();
//     $("#content").html(aboutView.el);
//   }
// });

// var appRouter = new AppRouter();
// Backbone.history.start();

// Log

// var Entity = Backbone.Model.extend({
//   // urlRoot: 'http://localhost:1337/user',
//   defaults: {
//     startDate: '',
//     endDate: '',
//     source: '',
//     format: '',
//     subjects: '',
//     title: '',
//     author: '',
//     titleOriginal: '',
//     rating: '',
//     duration: '',
//     year: '',
//     description: '',
//     review: '',
//     link: '',
//     language: '',
//     tags: []
//   }
// });

// var EntityList = Backbone.Collection.extend({
//   url: 'http://localhost:1337/user',
//   model: Entity
// });

// var entityList = new EntityList();

// entityList.fetch();

// var EntityView = Backbone.View.extend({})

// var EntityListView = Backbone.View.extend({

//   tagName: 'li',

//   render: function() {
//     this.collection.forEach(this.addOne, this);
//   },

//   addOne: function(entity) {
//     var entityView = new EntityView({
//       model: entity
//     });
//     this.$el.append(entityView.render().el);
//   }
// })
// var entityListView = new EntityListView({
//   collection: entityList
// });
// entityListView.render();
// console.log(entityList);
