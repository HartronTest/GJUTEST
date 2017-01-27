!!!
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body!= body
Not only that, but the default stylesheet has already been populated for us in `public/styesheets/style.styl', however sadly the contents don't fully meet our requirements so lets change that file to look more like this:

public/stylesheets/style.styl
body
  font-family "Helvetica Neue", "Lucida Grande", "Arial"
  font-size 13px
  text-align center
  text-stroke 1px rgba(255, 255, 255, 0.1)
  color #555
h1, h2
  margin 0
  font-size 22px
  color #343434
h1
  text-shadow 1px 2px 2px #ddd
  font-size 60px
#articles
  text-align left
  margin-left auto
  margin-right auto
  width 320px
  .article
    margin 20px
    .created_at
        display none
    .title
        font-weight bold
        text-decoration underline
        background-color #eee
    .body
        background-color #ffa
h1= title
form( method="post")
    div
        div
            span Title :
            input(type="text", name="title", id="editArticleTitle")
        div
            span Body :
            textarea( name="body", rows=20, id="editArticleBody")
        div#editArticleSubmit
            input(type="submit", value="Send")
app.get('/blog/new', function(req, res) {
    res.render('blog_new.jade', { locals: {
        title: 'New Post'
    }
    });
});

app.post('/blog/new', function(req, res){
    articleProvider.save({
        title: req.param('title'),
        body: req.param('body')
    }, function( error, docs) {
        res.redirect('/')
    });
});
{
    "name": "application-name"
  , "version": "0.0.1"
  , "private": true
  , "dependencies": {
      "express": "2.4.3"
    , "stylus": ">= 0.0.1"
    , "jade": ">= 0.0.1"
    , "mongodb": ">= 0.9.6-7"
  }
}
/**
 * Module dependencies.
 */

var express = require('express');
var ArticleProvider = require('./articleprovider-mongodb').ArticleProvider;


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var articleProvider = new ArticleProvider('localhost', 27017);
// Routes

app.get('/', function(req, res){
    articleProvider.findAll( function(error,docs){
        res.render('index.jade', { 
            locals: {
                title: 'Blog',
                articles:docs
            }
        });
    })
});

app.get('/blog/new', function(req, res) {
    res.render('blog_new.jade', { locals: {
        title: 'New Post'
    }
    });
});

app.post('/blog/new', function(req, res){
    articleProvider.save({
        title: req.param('title'),
        body: req.param('body')
    }, function( error, docs) {
        res.redirect('/')
    });
});

app.get('/blog/:id', function(req, res) {
    articleProvider.findById(req.params.id, function(error, article) {
        res.render('blog_show.jade',
        { locals: {
            title: article.title,
            article:article
        }
        });
    });
});

app.post('/blog/addComment', function(req, res) {
    articleProvider.addCommentToArticle(req.param('_id'), {
        person: req.param('person'),
        comment: req.param('comment'),
        created_at: new Date()
       } , function( error, docs) {
           res.redirect('/blog/' + req.param('_id'))
       });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port,
 app.settings.env);
ArticleProvider.prototype.getCollection= function(callback) {
  this.db.collection('articles', function(error, article_collection) {
    if( error ) callback(error);
    else callback(null, article_collection);
  });
};