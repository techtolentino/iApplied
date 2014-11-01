App = Ember.Application.create();

var posts = [{
	id: '1',
	title: 'Web Developer',
	company: {name: "Charity Dynamics"},
	date: new Date('10-27-2014'),
	excerpt: "Know some ill code shit, perf! You'd make a greate FED.",
	body: "Apply all of your HTML CSS and JS skills in new fashion"
}, {
	id: '2',
	title: 'HTML & CSS Volunteer',
	company: {name: "MakerSquare"},
	date: new Date('10-25-2014'),
	excerpt: "Know some ill code shit, perf! You'd make a greate BED.",
	body: "Apply all of your Database and Software Design skills in new fashion"
}];

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
