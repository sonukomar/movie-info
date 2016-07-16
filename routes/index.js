/*
 * @ Module name       - Movie info routes
 * @ Author            - Sonu Kumar
 * @ Creation Date     - 16th July 2016 
 * @ Lasr modification - 16th July 2016
 *
 */


/* Reading json file of the movies */
//var movieList = require('../movies.json');


/* Home Routes */
exports.home = function(req,res){

    res.render('home',
            {'title':'Welcome to Ocean of movies - Bollwood',
             'heading':'Movie Info'
            });
}


/* Routes for not found urls */
exports.notFound = function(req,res){

    res.render('404',{'title':'Ooops!!, This page doesnot exist.'})
}    
