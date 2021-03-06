/*global Instafeed:true*/
$(document).foundation();

var loadButton = document.getElementById('load-more');

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'Kicks4sale',
    clientId: '45c8e1b222ca4cfc9121a6d9f5d1f5ae',
    target: 'photo-grid',
    limit: 60,
    resolution: 'standard_resolution',
    template: '<a class = "large-4 medium-4 columns photo" href="{{link}}"><img src="{{image}}" /></a>',
    after: function () {
    	if (!this.hasNext()) {
    		loadButton.setAttribute('disabled', 'disabled');
    	}
    },
});

loadButton.addEventListener('click', function() {
  feed.next();
});
feed.run();