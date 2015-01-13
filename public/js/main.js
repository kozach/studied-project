(function($) {
  // $('#loader').fadeOut(300);
  setTimeout("$('html').removeClass('loading');", 1000)

  // var Sources = Backbone.Collection.extend({
  //   url: "/api/sources"
  // });
  // var Source = Backbone.Model.extend({
  //   defaults: {
  //     source: "",
  //     format: "",
  //     subject: "",
  //     title: "",
  //     titleOriginal: "",
  //     rating: "",
  //     duration: "",
  //     year: "",
  //     description: "",
  //     review: "",
  //     link: "",
  //     language: ""
  //   },
  //   urlRoot: "/api/sources",
  //   idAttribute: "_id"
  // });
  // var SourcesListView = Backbone.View.extend({
  //   el: '#main',
  //   render: function() {
  //     var sources = new Sources();
  //     var that = this;
  //     sources.fetch({
  //       success: function(data) {
  //         var template = _.template($('#sources-list-template').html(), {
  //           data: data.models
  //         });
  //         that.$el.html(template);
  //       }
  //     });
  //   }
  // });

  // var sourcesListView = new SourcesListView();

  // var SourcesEditView = Backbone.View.extend({
  //   el: '#main',
  //   events: {
  //     'submit .sources-edit-form': 'saveItem',
  //     'click .delete': 'deleteItem',
  //     'click .cancel': 'cancelItem'
  //   },
  //   item: null,
  //   cancelItem: function(e) {
  //     router.navigate('', {
  //       trigger: true
  //     });
  //   },
  //   deleteItem: function(e) {
  //     this.item.destroy({
  //       success: function() {
  //         router.navigate('', {
  //           trigger: true
  //         });
  //       }
  //     })
  //   },
  //   render: function(options) {
  //     var that = this;
  //     if (options.id) {
  //       this.item = new Source({
  //         id: options.id
  //       });
  //       this.item.fetch({
  //         success: function(data) {
  //           var template = _.template($('#sources-edit-template').html(), {
  //             data: data
  //           });
  //           that.$el.html(template);
  //         }
  //       });
  //     } else {
  //       var template = _.template($('#sources-edit-template').html(), {
  //         data: null
  //       });
  //       this.$el.html(template);
  //     }
  //   },
  //   saveItem: function(e) {
  //     var details = $(e.currentTarget).serializeObject();
  //     var source = new Source();
  //     source.save(details, {
  //       success: function(data) {
  //         router.navigate('', {
  //           trigger: true
  //         });
  //       }
  //     });
  //     return false;
  //   }
  // });

  // var sourcesEditView = new SourcesEditView();

  // var Router = Backbone.Router.extend({
  //   routes: {
  //     "": "home",
  //     "sources_edit/:id": "edit",
  //     "sources_new": "edit",
  //   }
  // });

  // var router = new Router;
  // router.on('route:home', function() {
  //   sourcesListView.render();
  // })
  // router.on('route:edit', function(id) {
  //   sourcesEditView.render({
  //     id: id
  //   });
  // })
  // Backbone.history.start();


  var Contact = Backbone.Model.extend({
    urlRoot: '/api/sources',
  // defaults: {
  // startDate: [],
  // endDate: [],
  // source: '',
  // format: '',
  // subject: '',
  // title: '',
  // author: [],
  // titleOriginal: '',
  // rating: '',
  // duration: '',
  // year: '',
  // description: '',
  // review: '',
  // link: '',
  // language: '',
  // tags: []
  // }
    idAttribute: "_id",
  });

  var Directory = Backbone.Collection.extend({
    url: '/api/sources',
    model: Contact
  });

  var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: $("#contactTemplate").html(),
    render: function() {
      var tmpl = _.template(this.template);
      this.$el.html(tmpl(this.model.toJSON()));
      return this;
    }
  });
  var DirectoryView = Backbone.View.extend({
    el: $("#main"),
    initialize: function() {
      var that = this;
      that.collection = new Directory();
      that.collection.fetch({async:false});
    },
    render: function() {
      var that = this;
      _.each(this.collection.models, function(item) {
        that.renderContact(item);
      }, this);
    },
    renderContact: function(item) {
      var contactView = new ContactView({
        model: item
      });
      this.$el.append(contactView.render().el);
    }
  });

  var directory = new DirectoryView();

  var Router = Backbone.Router.extend({
      routes: {
        "": "home",
        "source/:id": "edit",
        "source/add": "add",
      }
  });

  var router = new Router;
  router.on('route:home', function() {
    directory.render();
  })
  Backbone.history.start();


  // _.each(jsonD, function(item) {
  //   item.tags = item.tags.split(",");
  //   item.author = item.author.split(",");
  //   item.endDate = item.endDate.split(",");
  //   item.startDate = item.startDate.split(",");
  //   _.each(item.tags, function(val, key) {
  //     item.tags[key] = val.trim();
  //   });
  //   _.each(item.author, function(val, key) {
  //     item.author[key] = val.trim();
  //   });
  //   _.each(item.endDate, function(val, key) {
  //     item.endDate[key] = val.trim();
  //   });
  //   _.each(item.startDate, function(val, key) {
  //     item.startDate[key] = val.trim();
  //   });
  //   delete item.source
  //   delete item.subject
  //   delete item.description
  //   delete item.language
  // });
  // console.log(JSON.stringify(jsonD));

})(jQuery);
