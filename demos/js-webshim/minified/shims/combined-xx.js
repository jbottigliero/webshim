(function(b){if(!navigator.geolocation){b.support.geolocation="shim";var n=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},q=0;navigator.geolocation=function(){var p,c={getCurrentPosition:function(e,g,h){var l=function(){clearTimeout(f);if(!(p||!window.google||!google.loader||!google.loader.ClientLocation)){var a=google.loader.ClientLocation;p={latitude:a.latitude,longitude:a.longitude,altitude:null,accuracy:43E3,
altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null}}if(p)e({coords:p,timestamp:(new Date).getTime()});else g&&g({code:2,message:"POSITION_UNAVAILABLE"})},f;if(!window.google||!google.loader){if(b.webshims.loader.modules.geolocation.options.destroyWrite){document.write=n;document.writeln=n}b(document).one("google-loaderReady",l);b.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(h&&h.timeout)f=setTimeout(function(){b(document).unbind("google-loader",l);
g&&g({code:3,message:"TIMEOUT"})},h.timeout)}else setTimeout(l,1)},clearWatch:b.noop};c.watchPosition=function(e,g,h){c.getCurrentPosition(e,g,h);q++;return q};return c}()}})(jQuery);
(function(b){var n,q=[],p,c;b.support.validity===true&&document.addEventListener&&!window.noHTMLExtFixes&&window.opera&&document.addEventListener("submit",function(h){h.target.checkValidity&&h.target.checkValidity()},true);b(document).bind("invalid",function(h){if(!n){c=h.target.form;if(b.support.validity===true&&c&&!window.noHTMLExtFixes){var l=b(c).bind("submit.preventInvalidSubmit",function(f){if(b.attr(c,"novalidate")===undefined){f.stopImmediatePropagation();return false}}).data("events").submit;
l&&l.length>1&&l.unshift(l.pop())}n=b.Event("firstinvalid");b(h.target).trigger(n)}n&&n.isDefaultPrevented()&&h.preventDefault();q.push(h.target);clearTimeout(p);p=setTimeout(function(){var f={type:"lastinvalid",cancelable:false,invalidlist:b(q)};n=false;b(c).unbind("submit.preventInvalidSubmit");q=[];b(h.target).trigger(f,f)},9)});var e=function(){this._create()};e.prototype={_create:function(){this.alert=b('<div class="validity-alert" role="alert"><div class="va-box" /></div>').css({position:"absolute",
display:"none"});this.hideTimer=false;this.boundHide=b.proxy(this,"hide")},hideDelay:5E3,createAlert:function(){if(!this.created){this.created=true;var h=this;b(function(){h.alert.appendTo("body")})}},showFor:function(h,l){h=b(h);var f=h.data("inputUIReplace");if(f)h=f.visual;this.createAlert();this.clear();this.getMessage(h);this.position(h);this.show();l||h.focus();this.hideTimer=setTimeout(this.boundHide,this.hideDelay);b(document).bind("focusout.validityalert",this.boundHide)},getMessage:function(h){b("> div",
this.alert).html(h.attr("validationMessage"))},position:function(h){var l=h.offset();l.top+=h.outerHeight();this.alert.css(l)},clear:function(){clearTimeout(this.hideTimer);b(document).unbind("focusout.validityalert");this.alert.stop().css({opacity:""})},show:function(){this.alert.fadeIn()},hide:function(){this.clear();this.alert.fadeOut()}};b.webshims.validityAlert=new e;b.webshims.validityMessages.en=b.webshims.validityMessages.en||b.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form. Only certain values are allowed for this field. {%title}",
tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};b.webshims.validityMessages["en-US"]=b.webshims.validityMessages["en-US"]||b.webshims.validityMessages.en;b.webshims.validityMessages[""]=b.webshims.validityMessages[""]||b.webshims.validityMessages.en;b.webshims.validityMessages.de=b.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",
url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",
tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var g;b(document).bind("htmlExtLangChange",function(){b.webshims.activeLang(b.webshims.validityMessages,"validation-base",function(h){g=h})});b.each(b.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],
function(h,l){b.webshims.attr(l,{elementNames:["input","select","textarea"],getter:function(f){var a="";if(!b.attr(f,"willValidate"))return a;var d=b.attr(f,"validity")||{valid:1};if(d.valid)return a;if(d.customError||l==="validationMessage")if(a="validationMessage"in f?f.validationMessage:b.data(f,"customvalidationMessage"))return a;b.each(d,function(i,m){if(!(i=="valid"||!m)){if((a=g[i])&&typeof a!=="string")a=a[(f.getAttribute("type")||"").toLowerCase()]||a.defaultMessage;if(a)return false}});
a&&b.each(["value","min","max","title","maxlength","label"],function(i,m){if(a.indexOf("%"+m)!==-1){var j=(m=="label"?b.trim(b("label[for="+f.id+"]",f.form).text()).replace(/\*$|:$/,""):b.attr(f,m))||"";a=a.replace("{%"+m+"}",j);if("value"==m)a=a.replace("{%valueLen}",j.length)}});return a||""}})});b.support.validationMessage="shim"})(jQuery);
(function(b){if(!(b.support.validity!==true||b.support.fieldsetValidation||window.noHTMLExtFixes)){b.support.fieldsetValidation="shim";b.webshims.addMethod("checkValidity",function(){if(b.nodeName(this,"fieldset")){var n=true;b(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(n=false)});return n}else if(this.checkValidity)return this.checkValidity()})}})(jQuery);
(function(b){if(!b.support.validity){var n=b.webshims.inputTypes,q={radio:1,checkbox:1};n=b.webshims.inputTypes||{};b.webshims.addInputType=function(e,g){n[e]=g};var p={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},c={valueMissing:function(e,g){if(!e.attr("required"))return false;return q[e[0].type]?!b(e[0].form&&e[0].name?e[0].form[e[0].name]:[]).filter(":checked")[0]:!g},tooLong:function(e,
g){if(g==="")return false;var h=e.attr("maxlength"),l=false,f=g.length;if(f&&h>=0&&g.replace&&(typeof h=="number"||h&&h==h*1)){if(l=f>h)return l;g.replace(/\u0A/g,function(){f++});l=f>h}return l},typeMismatch:function(e,g,h){if(g==="")return false;var l=false;if(!("type"in h))h.type=(e[0].getAttribute("type")||"").toLowerCase();if(n[h.type]&&n[h.type].mismatch)l=n[h.type].mismatch(g,e);return l},patternMismatch:function(e,g){if(g==="")return false;var h=e.attr("pattern");if(!h)return false;return!RegExp("^(?:"+
h+")$").test(g)}};b.webshims.addValidityRule=function(e,g){c[e]=g};b.webshims.addMethod("checkValidity",function(){var e,g=function(h){var l,f=b.attr(h,"validity");if(f)b.data(h,"cachedValidity",f);else f={valid:true};if(!f.valid){l=b.Event("invalid");var a=b(h).trigger(l);if(!l.isDefaultPrevented()){e||b.webshims.validityAlert.showFor(a);e=true}}b.data(h,"cachedValidity",false);return f.valid};return function(){e=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var h=true,l=this.elements||
b("input, textarea, select",this),f=0,a=l.length;f<a;f++)g(l[f])||(h=false);return h}else return this.form?g(this):true}}());b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var e=b(this).data("events").submit;e&&e.length>1&&e.unshift(e.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",
false)},handler:function(e){if(!(e.type!="submit"||!b.nodeName(e.target,"form")||b.attr(e.target,"novalidate")!==undefined))if(!b(e.target).checkValidity()){!e.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");e.stopImmediatePropagation();return false}}};b.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(e){var g=b.data(e,"cachedValidity");if(g)return g;g=b.extend({},p);if(!b.attr(e,"willValidate"))return g;var h=b(e),
l=h.val(),f={};g.customError=!!b.data(e,"customvalidationMessage");if(g.customError)g.valid=false;if((e.nodeName||"").toLowerCase()=="select")return g;b.each(c,function(a,d){if(d(h,l,f)){g[a]=true;g.valid=false}});return g}});b.webshims.addMethod("setCustomValidity",function(e){b.data(this,"customvalidationMessage",""+e)});b.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(e,g){var h=g()||b.data(e,"customvalidationMessage");return!h||!b.attr(e,"willValidate")?
"":h}});b.webshims.createBooleanAttrs("required",["input","textarea"]);b.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var e={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(g){return!!(g.name&&g.form&&!g.disabled&&!g.readonly&&!e[g.type]&&b.attr(g.form,"novalidate")===undefined)}}()});b.webshims.addInputType("email",{mismatch:function(){var e=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(g){return!e.test(g)}}()});b.webshims.addInputType("url",{mismatch:function(){var e=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(g){return!e.test(g)}}()});b.webshims.addReady(function(e){b("form",e).bind("invalid",b.noop)})}})(jQuery);
(function(b){if(b.support.validity!==true){b.support.validity="shim";var n={input:1,textarea:1},q={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},p=function(c){var e;c[0].getAttribute("type");var g=c.val(),h=function(f){if(c){var a=c.val();if(a!==g){g=a;if(!f||f.type!="input")c.trigger("input")}}},l=function(){c.unbind("focusout",l).unbind("input",h);clearInterval(e);h();c=null};clearInterval(e);e=setInterval(h,150);setTimeout(h,9);c.bind("focusout",l).bind("input",h)};b(document).bind("focusin",
function(c){if(c.target&&c.target.type&&!c.target.readonly&&!c.target.readOnly&&!c.target.disabled&&n[(c.target.nodeName||"").toLowerCase()]&&!q[c.target.type])p(b(c.target))})}})(jQuery);
(function(b){var n,q=function(){if(!n){n=true;var p=parseInt("NaN",10),c=b.webshims.inputTypes,e=function(a){return typeof a=="number"||b.trim(a)&&a==a*1},g=function(a){return(a.getAttribute("type")||"").toLowerCase()},h=function(a,d){var i=b.attr(a,"step");if(i==="any")return i;d=d||g(a);if(!c[d]||!c[d].step)return i;i=c.number.asNumber(i);return(!isNaN(i)&&i>0?i:c[d].step)*c[d].stepScaleFactor},l=function(a,d,i){if(!(a+"AsNumber"in i)){i[a+"AsNumber"]=c[i.type].asNumber(d.attr(a));if(isNaN(i[a+
"AsNumber"])&&a+"Default"in c[i.type])i[a+"AsNumber"]=c[i.type][a+"Default"]}},f=function(a,d){a=""+a;d-=a.length;for(var i=0;i<d;i++)a="0"+a;return a};b.webshims.addValidityRule("stepMismatch",function(a,d,i){if(d==="")return false;if(!("type"in i))i.type=g(a[0]);if(i.type=="date")return false;var m=false;if(c[i.type]&&c[i.type].step){if(!("step"in i))i.step=h(a[0],i.type);if(i.step=="any")return false;if(!("valueAsNumber"in i))i.valueAsNumber=c[i.type].asNumber(d);if(isNaN(i.valueAsNumber))return false;
l("min",a,i);a=i.minAsNumber;if(isNaN(a))a=c[i.type].stepBase||0;m=Math.abs((i.valueAsNumber-a)%i.step);m=!(m<=1.0E-7||Math.abs(m-i.step)<=1.0E-7)}return m});b.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(a,d){b.webshims.addValidityRule(d.name,function(i,m,j){var o=false;if(m==="")return o;if(!("type"in j))j.type=g(i[0]);if(c[j.type]&&c[j.type].asNumber){if(!("valueAsNumber"in j))j.valueAsNumber=c[j.type].asNumber(m);if(isNaN(j.valueAsNumber))return false;
l(d.attr,i,j);if(isNaN(j[d.attr+"AsNumber"]))return o;o=j[d.attr+"AsNumber"]*d.factor<=j.valueAsNumber*d.factor-1.0E-7}return o})});b.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(a){var d=g(a);return c[d]&&c[d].asNumber?c[d].asNumber(b.attr(a,"value")):p},setter:function(a,d,i){var m=g(a);if(c[m]&&c[m].numberToString)if(isNaN(d))b.attr(a,"value","");else{d=c[m].numberToString(d);if(d!==false)b.attr(a,"value",d);else throw"INVALID_STATE_ERR: DOM Exception 11";}else i()}});
b.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(a){var d=g(a);return c[d]&&c[d].asDate&&!c[d].noAsDate?c[d].asDate(b.attr(a,"value")):null},setter:function(a,d,i){var m=g(a);if(c[m]&&c[m].dateToString)if(d===null)b.attr(a,"value","");else{d=c[m].dateToString(d);if(d!==false)b.attr(a,"value",d);else throw"INVALID_STATE_ERR: DOM Exception 11";}else i()}});b.webshims.addInputType("number",{mismatch:function(a){return!e(a)},step:1,stepScaleFactor:1,asNumber:function(a){return e(a)?
a*1:p},numberToString:function(a){return e(a)?a:false}});b.webshims.addInputType("range",b.extend({},c.number,{minDefault:0,maxDefault:100}));b.webshims.addInputType("date",{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var d=a.split(/\u002D/);if(d.length!==3)return true;var i=false;b.each(d,function(m,j){if(!(e(j)||j&&j=="0"+j*1)){i=true;return false}});if(i)return i;if(d[0].length!==4||d[1].length!=2||d[1]>12||d[2].length!=2||d[2]>33)i=true;return a!==this.dateToString(this.asDate(a,
true))},step:1,stepScaleFactor:864E5,asDate:function(a,d){if(!d&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,d){var i=p;if(d||!this.mismatch(a)){a=a.split(/\u002D/);i=Date.UTC(a[0],a[1]-1,a[2])}return i},numberToString:function(a){return e(a)?this.dateToString(new Date(a*1)):false},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+f(a.getUTCMonth()+1,2)+"-"+f(a.getUTCDate(),2):false}});b.webshims.addInputType("time",b.extend({},c.date,
{mismatch:function(a,d){if(!a||!a.split||!/\d$/.test(a))return true;a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var i=false,m;if(a[2]){a[2]=a[2].split(/\u002E/);m=parseInt(a[2][1],10);a[2]=a[2][0]}b.each(a,function(j,o){if(!(e(o)||o&&o=="0"+o*1)||o.length!==2){i=true;return false}});if(i)return true;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(m&&isNaN(m))return true;if(m)if(m<100)m*=100;else if(m<10)m*=10;return d===true?[a,m]:false},step:60,
stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var d=p;a=this.mismatch(a,true);if(a!==true){d=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])d+=a[1]}return d},dateToString:function(a){if(a&&a.getUTCHours){var d=f(a.getUTCHours(),2)+":"+f(a.getUTCMinutes(),2),i=a.getSeconds();if(i!="0")d+=":"+f(i,2);i=a.getUTCMilliseconds();if(i!="0")d+="."+f(i,3);return d}else return false}}));b.webshims.addInputType("datetime-local",
b.extend({},c.time,{mismatch:function(a,d){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);return c.date.mismatch(a[0])||c.time.mismatch(a[1],d)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var d=p,i=this.mismatch(a,true);if(i!==true){a=a.split(/\u0054/)[0].split(/\u002D/);d=Date.UTC(a[0],a[1]-1,a[2],i[0][0],i[0][1],i[0][2]||0);if(i[1])d+=i[1]}return d},dateToString:function(a,d){return c.date.dateToString(a)+
"T"+c.time.dateToString(a,d)}}));(function(){var a=b.webshims.loader.modules["number-date-type"].options,d=function(j,o,k){k=k||{};if(!("type"in k))k.type=g(j);if(!("step"in k))k.step=h(j,k.type);if(!("valueAsNumber"in k))k.valueAsNumber=c[k.type].asNumber(b.attr(j,"value"));var r=k.step=="any"?c[k.type].step*c[k.type].stepScaleFactor:k.step;l("min",b(j),k);l("max",b(j),k);if(isNaN(k.valueAsNumber))k.valueAsNumber=c[k.type].stepBase||0;if(k.step!=="any")k.valueAsNumber=Math.round((k.valueAsNumber-
(k.valueAsNumber-(k.minAsnumber||0))%k.step)*1E7)/1E7;j=k.valueAsNumber+r*o;if(!isNaN(k.minAsNumber)&&j<k.minAsNumber)j=k.valueAsNumber*o<k.minAsNumber?k.minAsNumber:isNaN(k.maxAsNumber)?Number.MAX_VALUE:k.maxAsNumber;else if(!isNaN(k.maxAsNumber)&&j>k.maxAsNumber)j=k.valueAsNumber*o>k.maxAsNumber?k.maxAsNumber:isNaN(k.minAsNumber)?Number.MIN_VALUE:k.minAsNumber;return j},i=function(j,o,k){if(!(j.disabled||j.readOnly||b(k).hasClass("step-controls"))){b.attr(j,"value",c[o].numberToString(d(j,b(k).hasClass("step-up")?
1:-1,{type:o})));b(j).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==j)try{j.focus()}catch(r){}setTimeout(function(){if(document.activeElement!==j)try{j.focus()}catch(s){}b(j).one("blur.stepeventshim",function(){b(j).trigger("change")})},0)}}};if(a.stepArrows){var m={elementNames:["input"],setter:function(j,o,k){k();if(o=b.data(j,"step-controls"))o[j.disabled||j.readonly?"addClass":"removeClass"]("disabled-step-control")}};b.webshims.attr("disabled",
m);b.webshims.attr("readonly",m)}b.webshims.addReady(function(j){a.stepArrows&&b("input",j).each(function(){var o=g(this);if(!(!c[o]||!c[o].asNumber||!a.stepArrows||a.stepArrows!==true&&!a.stepArrows[o])){var k=this,r=b(this).css("direction")=="rtl"?{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},s=b('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[r.action](this).bind("mousedown mousepress",
function(u){i(k,o,u.target);return false});b(this).addClass("has-step-controls").data("step-controls",s).attr({readonly:this.readOnly,disabled:this.disabled});if(a.recalcWidth){var t=s.outerWidth(true)+(parseInt(b(this).css("padding"+r.side),10)||0),v=parseInt(b(this).css("border"+r.side+"width"),10)||0;s.css(r.otherSide,(v+t)*-1);t++;b(this).css("width",b(this).width()-t).css("padding"+r.side,t)}}})})})();b.webshims.attr("type",{elementNames:["input"],getter:function(a){var d=g(a);return b.webshims.inputTypes[d]?
d:a.type||a.getAttribute("type")},setter:true})}};if(b.webshims.addValidityRule)q();else b.support.validity===true?b.webshims.readyModules("implement-types",q):b.webshims.readyModules("validity",q)})(jQuery);
(function(b){if(!b.support.placeholder){b.support.placeholder="shim";var n=function(){var c=function(f){if(!this.value||f===true){b(this).addClass("placeholder-visible");this.value=this.getAttribute("placeholder")||""}},e=function(){if(b(this).hasClass("placeholder-visible")){this.value="";b(this).removeClass("placeholder-visible")}},g=0,h=/\n|\r|\f|\t/g,l={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(f){if(!b.data(f,"placeHolder")){var a=function(){e.apply(f)};g++;b.data(f,
"placeHolder",g);b(f).bind("blur",c).bind("focus",e);b(window).bind("unload.id-"+g,a);b(f.form).bind("submit.id-"+g,a)}},changesValidity:function(f,a){if(b.support.validity===true&&b.attr(f,"willValidate")){if(b.attr(f,"required"))return true;var d=b.attr(f,"value");b.attr(f,"value",a);b.attr(f,"validity");b.attr(f,"value",d)}return false},update:function(f,a){var d=b.attr(f,"type");if(l[d]||b.nodeName(f,"textarea"))if(a){d=b(f);a=a.replace(h,"");f.setAttribute("placeholder",a);if(n.changesValidity(f,
a))n.destroy(f);else{n.create(f);d.val()||c.call(f,true)}}else{n.destroy(f);f.removeAttribute("placeholder")}},destroy:function(f){var a=b.data(f,"placeHolder");if(a){b.data(f,"placeHolder",false);b(f).unbind("blur",c).unbind("focus",e);b(window).unbind("unload.id-"+a);b(f.form).unbind("submit.id-"+a);e.apply(this)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,e){n.update(c,e)},getter:function(c){return c.getAttribute("placeholder")}});var q={elementNames:["input",
"textarea"],setter:function(c,e,g){var h=c.getAttribute("placeholder");if(h&&"value"in c)e?b(c).removeClass("placeholder-visible"):n.update(c,h);g()},getter:function(c,e){if(b(c).hasClass("placeholder-visible"))return"";return e()}};b.webshims.attr("value",q);var p=b.fn.val;b.fn.val=function(c){if(c===undefined){if(this[0]&&b(this[0]).hasClass("placeholder-visible"))return"";return p.apply(this,arguments)}else{var e=p.apply(this,arguments);this.each(function(){this.nodeType===1&&this.getAttribute("placeholder")&&
q.setter(this,c,b.noop)});return e}};b.webshims.addReady(function(c){b("input[placeholder], textarea[placeholder]",c).attr("placeholder",function(e,g){return g})})}})(jQuery);
