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

var theme = {} ;

function join(arr, c) {
    c = c || '\n' ;
    arr = arr || [] ;
    var out = '' ;
    if (arr.length>0) {
        arr.forEach(function(el) {
            out += el + c ;
        });
    }
    return out ;
}


theme.links = {} ;
    
theme.addLink = function(des,path) {
    path = path || des ;
    theme.links[des] = '/'+path ;
} ;


function getClass(attributes) {
    attributes = attributes || [] ;
    var cl =  join(attributes,' ') ;
    if (attributes.length>0) {
        cl = ' class="'+cl+'"' ;
    }
    return cl ;
}

theme.html = function(mup) {
    return ('\
 <!doctype html>\n\
 <html lang="en">\n' + mup + '</html>\n') ;
} ;

theme.body = function(mup) {
    return ('<body>\n'+mup+'</body>\n') ;
} ;

theme.container = function(mup, attributes) {
    attributes = attributes || ['container'] ;
    return '<div '+getClass(attributes)+'>\n'+mup+'</div>\n' ;
} ;

theme.row = function(mup, attributes ) {
    attributes = attributes || ['row'] ;
    return theme.container(mup,attributes) ;
} ;

theme.section = function ( id, mup, attributes) {
   return '\n\n<section id="'+id+'"'+getClass(attributes)+'>\n'+mup+ '</section>\n' ;
} ;
 
theme.head = function(mup) {
    return ('<head>\n'+mup+'</head>\n') ;
} ;

theme.title = function(title) {
    return ('<title>\n'+title+'</title>\n') ;
} ;

theme.meta = function(attr,content) {
    return ('<meta name="'+attr+'" content="'+content+'">\n') ;
} ;

theme.defaultViewport = function() {
    return ('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />\n') ;
} ;

theme.charset = function(cs) {
    cs = cs || 'utf-8' ;
    return ('<meta charset="'+cs+'">\n') ;
} ;

theme.link = function(rel,href) {
    var sizes = '' ;
    if (href.indexOf('72x72')) {
        sizes = 'sizes="72x72"' ;
    }
    if (href.indexOf('114x114')) {
        sizes = 'sizes="114x114"' ;
    }
    return ('<link rel="'+rel+'" '+sizes+' href="'+href+'">\n') ;
} ;

theme.cssLink = function(css) {
    return ('<link rel="stylesheet" href="'+css+'" />\n') ;
} ;

theme.favicon = function(link, type) {
    type = type || 'x-icon' ;
    return ('<link rel="shortcut icon" type="image/'+type+'" href="'+link+'" />\n') ;
}

theme.personal = function(personal) {
    personal.name = personal.name || 'NAME' ;
    personal.tagLine = personal.tagLine || 'TAG LINE' ;
    personal.intro = personal.intro || 'Hi, my name is' ; 
    return ('<section id="personal">\n\
                <div class="container">\n\
                    <div class="row">\n\
                        <div class="col-md-6 col-lg-4 col-sm-12">\n\
                             '+personal.intro+'<br>\n\
                             '+personal.name+'<br>\n\
                             '+personal.tagLine+'<br><br><br><br>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
             </section>\n') ;
} ;

theme.about = function(a) {
    a.intro = a.intro || 'INTRO' ;
    a.name = a.name || 'NAME' ;
    a.email = a.email || 'email@gmail.com' ; 
    a.phone = a.phone || '123-456-7890' ;
    a.resume = a.resume || '#contact' ; 
    a.location = a.location || 'LOCATION' ;
    a.img = a.img || 'http://placehold.it/1671x800' ;
    return ('\n\
             <section id="about" style="background-image:url(\''+a.img+'\');">\n\
                 <div class="container">\n\
                     <div class="row">\n\
                         <div class="col-md-6 col-lg-4 col-sm-12">\n\
                             <span>About Me</span>\n\
                             <p>'+a.intro+'</p>\n\
                             <ul>\n\
                                 <li><span>Name:</span>'+a.name+'</li>\n\
                                 <li><span>Email:</span><a href="mailto:'+a.email+'">'+a.email+'</a></li>\n\
                                 <li><span>Phone:</span>'+a.phone+'</li>\n\
                                 <li><span>Home:</span>'+a.location+'</li>\n\
                             </ul>\n\
                             <a href="'+a.resume+'">Request Resume</a>\n\
                         </div>\n\
                     </div>\n\
                 </div>\n\
             </section>\n'
    ) ;
} ;

theme.blog = function(feed) {
    feed = feed || [] ;
    var posts = feed.map(function(post) {
        return ('<a href="'+post.link+'">'+post.title+'</a>') ;
    }) ;
    return ('\n\
            <section id="blog">\n\
                <div class="container">\n\
                    <div class="row">\n\
                        <div class="col-md-6 col-lg-4 col-sm-12">\n\
                            ' + join(posts,'\n') + '\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
            </section>\n') ;
} ;


theme.contact = function (contact) {
    contact = contact || {} ;
    contact.background = contact.background || 'http://placehold.it/1671x870' ;
    contact.address = contact.address ||  'ADDRESS' ;
    contact.email = contact.email || 'email@gmail.com' ;
    contact.action = contact.action || 'javascript:void(0)' ;
    contact.buttonColor = contact.buttonColor || 'dark' ;
    return ('\n\
             <section id="contact" style="background-image:url(\''+contact.background+'\');">\n\
                 <div class="container">\n\
                     <div class="row">\n\
                             <div class="col-md-6 col-sm-12">\n\
                                 <form id="personalcontactform" action="'+contact.action+'" method="post">\n\
                                     <br><input type="text" name="name" id="name" placeholder="* YOUR NAME"><br>\n\
                                     <input type="text" name="email" id="email" placeholder="* YOUR EMAIL"><br>\n\
                                     <textarea name="comment" id="comment" placeholder="YOUR MESSAGE"></textarea><br>\n\
                                     <button id="personal-contact-button" type="submit">Submit</button><br><br>\n\
                                 </form>\n\
                             </div>\n\
                         </div>\n\
                     </div>\n\
                 </div>\n\
             </section>\n'
    ) ; 
} ;


theme.headerLinks = function(title) {
    title = title || 'TITLE' ;
    return ('\n\
            <title>'+title+'</title>\n\
            <meta name="description" content="Resume '+title+'">\n\
            <meta name="keywords" content="resume">\n\
            <meta charset="utf-8">\n\
            <meta name="author" content="'+title+'">\n\
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />\n\
    ') ; 
} ;

theme.footer = function(footer) {
   footer = footer || {} ;
   return ('') ;
} ;


theme.lib = function(libs) {
    libs = libs || [] ;
    return (libs.map(function(lib) {
            return '<script type="text/javascript" src="'+lib+'"></script>\n' ;        
        }).join('')) ; 
} ;

theme.viewContainer = function (view,title) {
    title = title || '' ;
    console.log('viewContainer -----------------') ;
    console.log(view) ;
    var output = (theme.html(
                  theme.head(
                       theme.headerLinks(title) 
                  )
                + theme.body(
        
                            view
                        
                )
        )
    ) ;
    console.log(output) ;
    return output ;
} ;

module.exports = theme ;
