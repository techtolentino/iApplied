App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('posts', function (){
		this.resource('post', { path: ':id'});
	});
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params){
		return posts.findBy('id', params.id);
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,

		actions: {
			edit: function(){
				this.set('isEditing', true);
			},

			doneEditing: function(){
				this.set('isEditing', false);
			}
		}
});

Ember.Handlebars.helper('format-date', function(date){
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input){
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
	id: '1',
	title: 'Front End Developer',
	author: {name: "R2D2"},
	date: new Date('12-27-2012'),
	excerpt: "Know some ill code shit, perf! You'd make a greate FED.",
	body: "Apply all of your HTML CSS and JS skills in new fashion"
}, {
	id: '2',
	title: 'Back End Developer',
	author: {name: "C3PO"},
	date: new Date('12-25-2012'),
	excerpt: "Know some ill code shit, perf! You'd make a greate BED.",
	body: "Apply all of your Database and Software Design skills in new fashion"
}];