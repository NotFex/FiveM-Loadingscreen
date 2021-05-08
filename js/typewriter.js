var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('On SimpleV...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('...your new RP Server!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('...Check out our Discord:')
    .pauseFor(2500)
    .deleteAll()
    .typeString('...Discord.gg/ABCDEFG:')
    .pauseFor(2500)
    .start();
