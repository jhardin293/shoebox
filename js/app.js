$(document).foundation();

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'Kicks4sale',
        clientId: '45c8e1b222ca4cfc9121a6d9f5d1f5ae'
    });
    feed.run();