var config = {}

// Update to have your correct username and password
//config.mongoURI = {
//    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
//    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
//    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
//}
config.mongoURI = {
    production: 'mongodb+srv://tonykahare:tonykahare@week2ip1.jhn4duw.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Week2IP1',
    development: 'mongodb+srv://tonykahare:tonykahare@week2ip1.jhn4duw.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Week2IP1',
    test: 'mongodb+srv://tonykahare:tonykahare@week2ip1.jhn4duw.mongodb.net/?retryWrites=true&w=majority&appName=Week2IP1',
}
module.exports = config;
