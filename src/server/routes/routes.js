//this file would contain all routes and would be imported by the main index file where the app wpuld gain access to it
module.exports = app => {
    require('../endpoints/get')(app)
}