define("#mix/sln/0.1.0/modules/page",["mix/core/0.3.0/base/reset","mix/core/0.3.0/base/class","mix/core/0.3.0/base/message","mix/core/0.3.0/url/navigate"],function(a){a("mix/core/0.3.0/base/reset");var d=window,f=(d.document,a("mix/core/0.3.0/base/class")),g=a("mix/core/0.3.0/base/message"),h=a("mix/core/0.3.0/url/navigate").singleton,i=f.create({Implements:g,initialize:function(a){var b=this,c=b.name;g.prototype.initialize.call(b,"app."+c),b._options=a,b._isReady=!1,b._bindEvents(),b._bindRoutes()},_bindEvents:function(){var a=this;a.on("ready",function(b){a._isReady||(a._isReady=!0,a.ready(b))}),a.on("unload",function(){a._isReady&&(a._isReady=!1,a.unload())})},_bindRoutes:function(){var a=this,b=a.name,c=a.route;Object.isTypeof(c,"string")&&(c={name:"anonymous",text:c}),h.addRoute(b+"."+c.name,c.text,c)},getTitle:function(){return this.title},setTitle:function(a){this.title=a},ready:function(){},unload:function(){}});return i});