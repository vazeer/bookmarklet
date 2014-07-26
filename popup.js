;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=z(e[d],"function"),z(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},n.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};for(var C in n)w(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.hasEvent=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("pointerevents",function(){var a=document.createElement("x"),b=document.documentElement,c=window.getComputedStyle,d;return"pointerEvents"in a.style?(a.style.pointerEvents="auto",a.style.pointerEvents="x",b.appendChild(a),d=c&&c(a,"").pointerEvents==="auto",b.removeChild(a),!!d):!1}),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)});
// This callback function is called when the content script has been
// injected and returned its results
var imagesizemap;
var dominentColor ;
var colorPallete;

function onPageInfo(o) {
	// alert(o.imgsrcarray);

	document.getElementById("pricebutton").value = "" + o.price;
	document.getElementById("featurebullets").value = "" + o.featurebullets;
	document.getElementById("colorSelection").value = "" + o.colorSelection;
	imagesizemap = o.imagesizemap;
	
	dominentColor = o.dominentColor;
	colorPallete = o.colorPallete;
	// var all = o.imgsrcarray;
	// for (var i=0; i < all.length; i++) {
	// alert(o.imgsrcarray);
	// addImageRolled(i, all[i].src, 100, 100, 5);
	// }
	var imageArray = {images:[]};
	var listImages = []
	var srcarr = o.imgsrcarray.split(",");
	for (var i = 0; i < srcarr.length; i++) {
		
		addImageRolled(i + 1, srcarr[i],i);
		imageArray.images.push({file:srcarr[i]});
		listImages.push(srcarr[i]);
	  
	}
	// alert("price @@: "+o.price);
	displayTitle(o.productTitle);
	// displayPrice(o.price);
// calculateWords(imageArray,listImages);
/*
 * executeAsync(function() { for (var i=0; i<listImages.length; i++) { var
 * value = listImages[i]; var colorThief = new ColorThief(); var newImg = new
 * Image(); newImg.src = value; // alert("Testttttttttttt:
 * "+colorThief.getColor(newImg)[0]+" pallete: //
 * "+colorThief.getPalette(newImg)[0]);
 * document.getElementById(value+"color").value = ""
 * +colorThief.getColor(newImg); document.getElementById(value+"pallete").value = ""
 * +colorThief.getPalette(newImg); //
 * document.getElementById("pricebutton").value = "" + o.price; } });
 */
	
	wordCalculation(o.featurebullets);
	$('#closecall').click(function() {
	    window.close();
	   
	});
}

function wordCalculation(text) {
	
// NN Noun, sing. or mass dog
// NNP Proper noun, sing. Edinburgh
// NNPS Proper noun, plural Smiths
// NNS Noun, plural dogs
	var map = {};
	
	var words = new Lexer().lex(text);
	var taggedWords = new POSTagger().tag(words);
	var result = "";
	for (i in taggedWords) {
	  var taggedWord = taggedWords[i];
	  var word = taggedWord[0];
	  var tag = taggedWord[1];
	  // Note the use of document.writeln instead of print
	  
	  if((tag==="NN" ||tag==="NNP"||tag==="NNPS"||tag==="NNS" ) && word.length>1){
// if(typeof map[word]==='undefined'){
// map[word]=1;
// }else{
			map[word] = getIndicesOf(word,text,true).length;
		// }
		 // alert(word + " /" + tag+"====:"+getIndicesOf("Machine
			// Wash",text+" Wash Wash",true) );
	  }
	  
	}
	
	
	
/*
 * text = text.replace(/\t+/g, " "); var tempVlues = text.split(" "); for(var
 * i=0;i<tempVlues.length;i++){ var v = tempVlues[i]; v = v.trim();
 * v=v.replace(/,/g, ''); if(v.length > 1) { if(typeof map[v]==='undefined'){
 * map[v]=1;
 * 
 * }else{
 * 
 * map[v] = map[v]+1 } } }
 */

var tupls = getSortedList(map);
MakeTableJavascript(tupls,text);
/*
 * for (var i = 0; i < tuples.length; i++) { var key = tuples[i][0]; var value =
 * tuples[i][1];
 * 
 * if(! isNaN(value)){ finalMap.push(key+"("+value+") "); } // do something with
 * key and value }
 */

// document.getElementById("wordsList").value = finalMap;
}

function getSortedList(map) {
	var tuples = [];
	var finalMap =[];
	for (var key in map) tuples.push([key, map[key]]);

	tuples.sort(function(a, b) {
	    a = a[1];
	    b = b[1];

	    return a > b ? -1 : (a < b ? 1 : 0);
	});
	return tuples;
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function MakeTableJavascript(tuples,text) {
    
    var placeholder = document.getElementById("wordslistWithinTable");
    
    var h3 = document.createElement("h3");
    h3.textContent = "Words Weight Structure(Nouns & Pro Nouns):";
    placeholder.appendChild(h3);
    
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    
    var rowg = document.createElement("tr");
    
       var headg0 = document.createElement("th");
    	 var textheadg0 = document.createTextNode("Word");
         headg0.appendChild(textheadg0);
         rowg.appendChild(headg0);
   
         var headg1 = document.createElement("th");
    	 var textheadg1 = document.createTextNode("Weight");
         headg1.appendChild(textheadg1);
         rowg.appendChild(headg1);
    
         var headg2 = document.createElement("th");
    	 var textheadg2 = document.createTextNode("Choose Two words to Merge ");
         headg2.appendChild(textheadg2);
         rowg.appendChild(headg2);
  
    table.appendChild(rowg);
  
   var valuesToMerge =[];
   for (var r in tuples) {
    	 var row = document.createElement("tr");
    	 var key = tuples[r][0];
    	 var value = tuples[r][1];
        for (var c = 0; c < 3; c++) {
            	if(c==0){
            
            	  var col = document.createElement("td");
                  var textrow = document.createTextNode(key);

                  col.appendChild(textrow);
                  row.appendChild(col);	
            } else if (c == 1) {
                var col = document.createElement("td");
                var textrow = document.createTextNode(value);

                col.appendChild(textrow);
                row.appendChild(col);
            } else if (c == 2) {
                var col = document.createElement("td");
                var x = document.createElement("INPUT");
                x.setAttribute("type", "checkbox");
                x.text = key;
                x.onclick= function(){
                
                	if(!this.checked){
                		
                		var index = valuesToMerge.indexOf(this.text);
                		valuesToMerge.splice(index, 1);
                		// alert("unchecked checked: "+valuesToMerge);
                		return;
                	}
                	
                	
                	if(valuesToMerge.length >=2){
                		alert("we can merge only two items : ");
                		
                	
                		this.checked = false;
                	}else{
                		
                		var tmpp = this.text;
                		valuesToMerge.push(tmpp);
                  // alert(this.text+" on select is called");
                	}
                	// alert("size is: "+valuesToMerge);
                	};
                col.appendChild(x);
                row.appendChild(col);
            }
           }
        table.appendChild(row);
        }
       
        placeholder.appendChild(table);
        

        
        var x = document.createElement("INPUT");
        x.id= "mergeToUpdate"
  
        x.onclick=function(){
        	if(valuesToMerge.length<2)
        		return;
        	
        	var tmpMap =[];
        	for(var z in tuples){
        		tmpMap.push(tuples[z][0]);
        		
        	}
        	 for(var vlu  in valuesToMerge ){
        		 
        		 var index = tmpMap.indexOf(valuesToMerge[vlu]);
        		 tmpMap.splice(index, 1);
        	 }
        	var wrd =valuesToMerge[0]+" "+valuesToMerge[1];
        	tmpMap.push(wrd);
        	
        	tmMapLast = {};
        	
        	for(var c in tmpMap ){
        		tmMapLast[tmpMap[c]] = getIndicesOf(tmpMap[c],text,true).length;
        	}
        	
        	 placeholder.innerHTML = '';
        	 MakeTableJavascript(getSortedList(tmMapLast),text);
        	
        	// alert("the word is: "+valuesToMerge[0]+" "+valuesToMerge[1])
        	};
	    x.setAttribute("type", "button");
	    x.setAttribute("value", "Merge");
	    x.style.backgroundColor="green";
	    placeholder.appendChild(x);	
	   
        
    }
  






function calculateWords(imageArray,listImages) {

	  // Render example images
	  var examplesHTML = Mustache.to_html($('#image-section-template').html(), imageArray);
	  $('#example-images').append(examplesHTML);
// alert("testing")
	  // Event handlers
	  $('.run-functions-button').on('click', function(event) {
	    var $this = $(this);
	    $this.text('...');
	    var $imageSection     = $this.closest('.image-section');
	    var $colorThiefOutput = $imageSection.find('.color-thief-output');
	    var $targetimage      = $imageSection.find('.target-image');
	    showColorsForImage($targetimage, $imageSection);
	  });

	  var colorThief = new ColorThief();
	 
	  // Run Color Thief functions and display results below image.
	  // We also log execution time of functions for display.
	  var showColorsForImage = function($image, $imageSection ) {
	    var image                    = $image[0];
	    var start                    = Date.now();
	    var color                    = colorThief.getColor(image);
	    var elapsedTimeForGetColor   = Date.now() - start;
	    var palette                  = colorThief.getPalette(image);
	    var elapsedTimeForGetPalette = Date.now() - start + elapsedTimeForGetColor;
	   
	    var colorThiefOutput = {
	      color: color,
	      palette: palette,
	      elapsedTimeForGetColor: elapsedTimeForGetColor,
	      elapsedTimeForGetPalette: elapsedTimeForGetPalette
	    };
	    var colorThiefOuputHTML = Mustache.to_html($('#color-thief-output-template').html(), colorThiefOutput);

	    $imageSection.addClass('with-color-thief-output');
	    $imageSection.find('.run-functions-button').addClass('hide');

	    setTimeout(function(){
	      $imageSection.find('.color-thief-output').append(colorThiefOuputHTML).slideDown();
	      // If the color-thief-output div is not in the viewport or cut off,
			// scroll down.
	      var windowHeight          = $(window).height();
	      var currentScrollPosition = $('body').scrollTop()
	      var outputOffsetTop       = $imageSection.find('.color-thief-output').offset().top
	      if ((currentScrollPosition < outputOffsetTop) && (currentScrollPosition + windowHeight - 250 < outputOffsetTop)) {
	         $('body').animate({scrollTop: outputOffsetTop - windowHeight + 200 + "px"});
	      }
	    }, 300);
	  };

}

// creates images for displayRoll function
function addImageRolled(id, src,  pos) {
	// alert(id+" ***:"+src+":***");

	 var tableforimg = document.createElement("table");
	// tableforimg.setAttribute("border", "2");
	    
	var tr =  document.createElement('tr');
	
	var tdForImge =  document.createElement('td');
	tdForImge.border="2";
	tdForImge.align="bottom";
	
	
	var tdCheckbox =  document.createElement('td');
	tdCheckbox.border="2";
	tdCheckbox.align="center";
	
	var div = document.createElement('div');
	div.class="img";
		
	var img = document.createElement("img");
	img.id = id;
	img.src = src;
	img.width =150;
	img.onload = function() {
		  
		  var colorThief = new ColorThief();
		 
		    var newImg = new Image();
			newImg.src = src;
		   // alert("Testttttttttttt: "+colorThief.getColor(newImg)[0]+"
			// pallete:
			// "+colorThief.getPalette(newImg)[0]);
			 // alert("image is loaded: ");
			var colorArray =colorThief.getColor(newImg);
			 
			var scoreColorArray =colorThief.getTestScorePalette(newImg, 5)
	
		   // document.getElementById(src+"color").textContent = "main color: "
			// +colorArray;
		    
		    
		 
		    var placeholder = document.getElementById(id+src+"addColorTable");
		    
		    var table = document.createElement("table");
		    table.setAttribute( "cellspacing", "0px" );
		   
	
		/*
		 * for (var r in colorArray) { var row = document.createElement("tr");
		 * 
		 * var rinRGB =colorArray[r][0]; var ginRGB =colorArray[r][1]; var
		 * binRGB =colorArray[r][2];
		 * 
		 * for (var c = 0; c < 3; c++) {
		 * 
		 * if(c===0){ var col = document.createElement("td"); var textrow =
		 * document.createTextNode(colorArray[r]); col.appendChild(textrow);
		 * row.appendChild(col); }else if(c===1){ var col =
		 * document.createElement("td"); var x =
		 * document.createElement("INPUT"); x.setAttribute("type", "button");
		 * x.style.backgroundColor="rgb("+rinRGB+","+ginRGB+","+binRGB+")";
		 * col.appendChild(x); row.appendChild(col); } else if(c===2){ var total
		 * =0; var reqValue=0; for(var clr in scoreColorArray ){ var tempclrarry =
		 * scoreColorArray[clr].color; var volume = scoreColorArray[clr].volume;
		 * total = total+volume; if(rinRGB===tempclrarry[0] &&
		 * ginRGB===tempclrarry[1] && binRGB===tempclrarry[2] ){ reqValue =
		 * volume; } }
		 * 
		 * var col = document.createElement("td"); var textrow =
		 * document.createTextNode(reqValue/total*100);
		 * col.appendChild(textrow); row.appendChild(col); } }
		 * table.appendChild(row); }
		 */
		    
		    for(rowvalue=0;rowvalue<3;rowvalue++){
		    	var row = document.createElement("tr");
		    	if(rowvalue===0){
		    		for(var r in colorArray){
		    		 var rinRGB =colorArray[r][0];
		  		     var ginRGB =colorArray[r][1];
		  		     var binRGB =colorArray[r][2];
		  		      
		  		     
		  		     
		  			 var col = document.createElement("td");
		  		      col.style="padding:0 0px 0 0px;";
		  		      col.align="center";
		  		    
                	// var x = document.createElement("INPUT");
                	// x.setAttribute("type", "button");
                	   
                	  
                	   col.style.width ="10px";
                	   col.style.height ="15px";
                	    col.style.backgroundColor="rgb("+rinRGB+","+ginRGB+","+binRGB+")";
		                // col.appendChild(x);
		              
		                row.appendChild(col);
		  		        
			    	}
		    		
		    	}else if(rowvalue===1){
		    		for(var r in colorArray){
			    		 var rinRGB =colorArray[r][0];
			  		     var ginRGB =colorArray[r][1];
			  		     var binRGB =colorArray[r][2];
			  		        
			  		   var br0 = document.createElement("br");
			  		   var br1 = document.createElement("br");
			  		   
			  		   var col = document.createElement("td");
			  		   col.style="padding:0 20px 0 20px;";
			  		 
		                var textrow0 = document.createTextNode(colorArray[r][0]);
		                var textrow1 = document.createTextNode(colorArray[r][1]);
		                var textrow2 = document.createTextNode(colorArray[r][0]);
		                
		                var span = document.createElement('span');
		                span.style.fontSize = "12px";
		                span.style.display = 'inline'
		            
		                span.appendChild(textrow0);
		                span.appendChild(br0);
		                span.appendChild(textrow1);
		                span.appendChild(br1);
		                span.appendChild(textrow2);
		                
		                col.appendChild(span);
		                row.appendChild(col);
			  		        
				    	}
		    		  
		                
		    	}else if(rowvalue===2){
		    		
		    		for(var r in colorArray){
			    		 var rinRGB =colorArray[r][0];
			  		     var ginRGB =colorArray[r][1];
			  		     var binRGB =colorArray[r][2];
			  		     
			  	    	var total =0;
	                	var reqValue=0;
	                	for(var clr in scoreColorArray ){
	                		var tempclrarry = scoreColorArray[clr].color;
	                		var volume = scoreColorArray[clr].volume;
	                		total = total+volume;
	                		if(rinRGB===tempclrarry[0] && ginRGB===tempclrarry[1] && binRGB===tempclrarry[2] ){
	                			reqValue = volume;
	                		}
	                		
	                	}
	                	
		                var col = document.createElement("td");
		                col.style="padding:0 20px 0 20px;";
		                
		                var num = parseFloat(reqValue/total*100);
		                var str = num.toFixed(10);
		                str = str.substring(0, str.length-7);
		                
		                var textrow = document.createTextNode((str+"%"));
		         
		                var span = document.createElement('span');
		                span.style.fontSize = "12px";
		                span.appendChild(textrow);
		               
		                
		                col.appendChild(span);
		                row.appendChild(col);
			  		  
			  		        
				    	}
		    		
		    	}
		    	
		    	 table.appendChild(row);
		    }
		    placeholder.appendChild(table);
		    
		    
		   
		  // document.getElementById(src+"pallete").textContent = "other
			// colors: " +colorThief.getPalette(newImg);
	};
	
	div.appendChild(img);

        var checkbox = document.createElement('input');
	checkbox.className = "squaredOne";
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = id + "temp";
	tdCheckbox.appendChild(checkbox);

	var imgDel = document.createElement("img");
    imgDel.src = "button_delete_red.png";
	imgDel.width="24";
	imgDel.height="24";
	imgDel.addEventListener('click', function () {
		// alert("hi remove is called");
		// tableforimg.deleteRow(0);
		tableforimg.remove();
		
		});
	tdCheckbox.appendChild(imgDel);
	
	var sizes = document.createElement("p");
// sizes.type="button";
	sizes.textContent = "size: "+imagesizemap[src];
	div.appendChild(sizes);
	
	var color = document.createElement("p");
// color.type="button";
	color.id=src+"color";
	
	
	div.appendChild(color);
	
	
	
	var ntd = document.createElement("td");
	var divAddTableHere = document.createElement("div");
	divAddTableHere.id = id+src+"addColorTable";
	
	ntd.appendChild(divAddTableHere);
	
	
	var pallete = document.createElement("p");
	// pallete.type="button";
	pallete.id=src+"pallete";

	div.appendChild(pallete);


/*
 * var canvas = document.createElement('canvas'); var context =
 * canvas.getContext('2d'); context.beginPath(); context.moveTo(100, 100);
 * context.lineTo(800, 50); context.lineWidth = 5; // set line color
 * context.strokeStyle = '#ff0000'; context.stroke();
 * 
 * document.getElementById("Rolled").appendChild(canvas);
 */
	

	tdForImge.appendChild(div);
	
	tr.appendChild(tdForImge);
	tr.appendChild(tdCheckbox);
	tr.appendChild(ntd);
	
	tableforimg.appendChild(tr)
	
	document.getElementById("tableofimages").appendChild(tableforimg);
	
	var extraRow = document.createElement("tr");
	var tdd = document.createElement("td");
	tdd.setAttribute("background-color", "#004466");
	extraRow.appendChild(tdd);
	
	// document.getElementById("tableofimages").appendChild(extraRow);
	
}

function displayPrice(price) {
	var comment = price;
	var newParagraph = document.createElement('p');
	newParagraph.textContent = comment;
	document.getElementById("updateDiv").appendChild(newParagraph);
}
function displayTitle(title1) {
	document.getElementById("addTitle").value = title1;
}



window.addEventListener('DOMContentLoaded', function() {
	
	var uploaditem = document.querySelector('input#uploaditem');
	var cancelitem = document.querySelector('input#cancelitem');
	var mergeToUpdate = document.querySelector('input#mergeToUpdate');
	
	var closePopUp = document.querySelector('input#closecall');

	uploaditem.addEventListener('click', function() {
		alert("upload is clicked");
		
	});
	cancelitem.addEventListener('click', function() {
		alert("recheck is clicked: "+document.getElementById("wordsList").value);
	});
	
	mergeToUpdate.addEventListener('click', function() {
		alert("recheck is clicked: ");
	});

	closePopUp.addEventListener('click', function() {
		alert("close call: ");
	});
	
	
	
});

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	// Call the getPageInfo function in the background page, injecting
	// content_script.js
	// into the current HTML page and passing in our onPageInfo function as the
	// callback
	chrome.extension.getBackgroundPage().getPageInfo(onPageInfo);
});
