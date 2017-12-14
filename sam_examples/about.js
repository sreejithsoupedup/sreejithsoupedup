/* 
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
*/

var theme = require('./theme') ;

var express = require('express');
var bodyParser = require('body-parser') ;
var request = require('request');
var parseString = require('xml2js').parseString;

var config = {} ;

config.port = 5415 ;
config.portOffset = 0 ;
config.adminDirectory = './theme/html' ;


var app = express();
app.use(bodyParser.raw()) ;
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser') ;
app.use(cookieParser()) ;

theme.addLink('html') ; 
app.use(theme.links.html, express.static(config.adminDirectory));

theme.addLink('home','') ; 
theme.addLink('contact') ; 
 
///////////////////////////////////////////////////////
// Model
//
var model = {} ;

model.title = 'Jean-Jacques Dubray' ;

model.personal = {} ;
model.personal.name = 'Jean-Jacques Dubray' ;
model.personal.tagLine = 'Platform Architect and Full Stack Developer' ;

model.about = {} ;
model.about.intro = 'Hands-on Software Architect<br>with a passion for technology, distributed systems and programming languages' ;
model.about.name = model.personal.name ;
model.about.email = 'jdubray@gmail.com' ;
model.about.phone = '+1-425-298-7823' ;
model.about.resume = '#' ;
model.about.location = 'Bellevue, WA' ;
model.about.img = model.imageDir + 'aboutbg.jpg' ;

model.counter = 0 ;
model.fetchFeed = false ;

// Mount the blog post list in the model
// Here I am illustrating the decoupling between the "API"
// and the view. There is no need to couple the view with 
// the way the blog posts are fetched, which could be 
// at periodic time

function getRssFeed(data) {
    
    var options = {
      url: 'http://www.ebpml.org/blog15/feed/',
      headers: {
        'accept': 'application/json'
      }
    };
    
    request(options, function (error, response, body) {
       if (!error && response.statusCode == 200) {
           parseString(body, function (err, result) {
               console.log(JSON.stringify(result.rss.channel[0].item[0],null,4));
               data.blog = result.rss.channel[0].item ;
               // it is better to "present" it to the model
               // as this is could easily become a system action 
               // triggered automatically
               present(data) ;
           });
       }
     });
}
const COUNTER_MAX = 1000 ;

function present(data) {
    data = data || {} ;
    if (data.blog !== undefined) {
        model.blog = data.blog ;
        model.fetchFeed = false ;
    }
    
    // we refresh the feed every so often
    model.counter += 1 ;
    model.refreshFeed = ((model.counter % COUNTER_MAX) === 0) ;
    
    if (data.contact !== undefined) {
        model.contacts[model.contacts.length] = data.contact ;
    }
}

///////////////////////////////////////////////////////
// The S() function is just responsible for rendering the view
//
// This illustrates how Front-End developers code the view
// The is no "page" concept, the Front-End developer thinks 
// in terms of rendering the model only, aka, the state representation
// The other side of the application decides how the model gets updated

function s(m,nap) {
    // compute state representation
    
    var representation = (
        theme.personal(m.personal) 
    +   theme.about(m.about)
    +   theme.blog(m.blog)
    +   theme.contact(m.contact)
    ) ;
    // next action predicate
    nap(m) ;
    return representation ;
}

// next action predicate
const COUNTER_MAX = 100 ;
function nap(m) {
    m.fetchFeed = m.fetchFeed || false ;
    
    if (m.fetchFeed) {
        // execute automatic action
        getRssFeed({}) ;
    }
}

///////////////////////////////////////////////////////
// There are only two actions
//  - get the Initial state (home page)
//  - post a contact

// theme.addLink('home','') ; 
app.get(theme.links.home, function(req,res) {

    var resp = theme.viewContainer(
                   s(model, nap)
               ) ;
    // The action is "empty", nothing to present to the model
    res.header('Content-Type', 'text/html') ;
    res.status(200).send(resp) ;

}) ;
 
 
// theme.addLink('contact') ; 
app.post(theme.links.contact, function(req,res) {
       // we are simply adding the people 
       var data = { contact: req.body } ;
       present(data) ;
       
       try {
         res.redirect(theme.links.home);
       } catch (err) {
           res.header('Content-Type', 'text/plain') ;
           res.status(500).send("server error\n"+err) ;
       }
               
  }) ;
 
 
 app.listen(config.port+config.portOffset, function() {
     console.log("registering on port: "+config.port) ;
 });
