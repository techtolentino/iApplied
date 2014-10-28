App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('posts');
	this.resource('post', { path: ':post_id'});
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
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