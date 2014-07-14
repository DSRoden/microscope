Router.configure({
	layoutTemplate: 'layout'
	loadingTemplate: 'loading',
	waitOn: function () { return Meteor.subscribe('posts');}
});

router.map(function() {
	this.route('postsList', {path: '/'});
});
Router.onBeforeAction('loading');
