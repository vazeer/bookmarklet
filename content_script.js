// This script is only injected when the popup form is loaded
// (see popup.js), so we don't need to worry about waiting for page load

// Object to hold information about the current page

var pageInfo = {
	'title' : document.title,
	'url' : window.location.href,
	'imgsrcarray' : '',
	'price' : '',
	'productTitle' : '',
	'featurebullets' : '',
	'colorSelection' : '',
	'imagesizemap' : '',
	'dominentColor' : '',
	'colorPallete' : '',
	'summary' : window.getSelection().toString()

};
var sizesMap = {};
var imgeSizesPixels = new Object();
var imagesizemap = new Object();

var dominentColor = new Object();
var colorPallete = new Object();

var imgsrc = '';
var all = document.getElementsByTagName("img");
for (var i = 0; i < all.length; i++) {
	var tempimgsrc = all[i].src;

	var boolean = getImgSize(tempimgsrc);

	if (boolean && tempimgsrc != '' && !(tempimgsrc.indexOf("339353059") > -1)
			&& !(tempimgsrc.indexOf("351555192") > -1)) {

		//		 if (imgsrc == '') {
		//		 imgsrc = tempimgsrc;
		//		 } else {
		//		 imgsrc = imgsrc + ',' + tempimgsrc;
		//		 }
		sizesMap[tempimgsrc] = imgeSizesPixels[tempimgsrc];

		// to trace colors
		/*
		 * var imgggg = new Image(); imgggg.src = tempimgsrc;
		 * 
		 * 
		 * try { colorThief.getColor(imgggg); } catch (e) { alert(e); } //
		 * dominentColor[tempimgsrc] = colorThief.getColor(imgggg); //
		 * colorPallete[tempimgsrc] = colorThief.getPalette(imgggg);
		 * 
		 * alert("Testttttttttttt: "+colorThief.getColor(imgggg)[0]+" pallete:
		 * "+colorThief.getPalette(imgggg)[0]);
		 */

	}
}
var mappp = getSortedList(sizesMap);
for ( var key in mappp) {

	if (imgsrc == '') {
		imgsrc = mappp[key][0];

	} else {
		imgsrc = imgsrc + ',' + mappp[key][0];
	}
}

function getSortedList(map) {

	var tuples = [];
	for ( var key in map)
		tuples.push([ key, map[key] ]);

	tuples.sort(function(a, b) {
		a = a[1];
		b = b[1];

		return a > b ? -1 : (a < b ? 1 : 0);
	});
	return tuples;
}

function getImgSize(imgSrc) {
	var newImg = new Image();
	newImg.src = imgSrc;
	var height = newImg.height;
	var width = newImg.width;

	imagesizemap[imgSrc] = width + "x" + height + " pixels";
	imgeSizesPixels[imgSrc] = width / height;
	// alert ('The image size is '+width+'*'+height);
	if (height > 200 && width > 200) {
		return true;
	} else {
		return false;
	}
}
pageInfo.imagesizemap = imagesizemap;

var elems = document.getElementsByTagName('*'), i;
for (i in elems) {
	if ((' ' + elems[i].className + ' ').indexOf(' ' + "selection" + ' ') > -1) {
		try {
			pageInfo.colorSelection = elems[i].innerHTML;
		} catch (e) {
			// TODO: handle exception
		}

	}
}

pageInfo.imgsrcarray = imgsrc;
var hostName = location.hostname;
switch (hostName) {
case "www.amazon.com":
	try {
		pageInfo.price = document.getElementById("priceblock_ourprice").innerHTML;
		pageInfo.productTitle = document.getElementById("productTitle").textContent;
		pageInfo.featurebullets = document.getElementById("feature-bullets").textContent;
	} catch (e) {

	}

case "www.abercrombie.com":

	var elems = document.getElementsByTagName('*'), i;
	for (i in elems) {
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "offer-price" + ' ') > -1) {
			try {
				pageInfo.price = elems[i].innerHTML;
			} catch (e) {
				// TODO: handle exception
			}
		}
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "name" + ' ') > -1) {
			try {

				pageInfo.productTitle = elems[i].innerHTML;
			} catch (e) {
				// TODO: handle exception
			}
		}
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "copy" + ' ') > -1) {
			try {

				pageInfo.featurebullets = elems[i].textContent;
			} catch (e) {
				// TODO: handle exception
			}
		}
	}

	break;
case "www.gap.com":
	try {
		pageInfo.productTitle = document.getElementById("productNameText").textContent;

	} catch (e) {

	}

	break;
case "www.zara.com":
	var elems = document.getElementsByTagName('*'), i;
	var tempdes = '';
	for (i in elems) {
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "price" + ' ') > -1
				|| (' ' + elems[i].className + ' ').indexOf(' ' + "sale" + ' ') > -1) {
			try {
				pageInfo.price = elems[i].getAttribute("data-price");
			} catch (e) {
				// TODO: handle exception
			}
		}

		/*
		 * else if ((' ' + elems[i].className + ' ') .indexOf(' ' + "right" + ' ') >
		 * -1) { try { pageInfo.productTitle =
		 * elems[i].childNodes[0].textContent; } catch (e) { // TODO: handle
		 * exception } }
		 */
		if ((' ' + elems[i].name + ' ').indexOf(' ' + "description" + ' ') > -1) {
			try {
				pageInfo.productTitle = elems[i].getAttribute("content");
			} catch (e) {
				// TODO: handle exception
			}
		}
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "description" + ' ') > -1) {
			try {
				tempdes = tempdes + elems[i].textContent;

			} catch (e) {
				// TODO: handle exception
			}
		}

		if ((' ' + elems[i].className + ' ').indexOf(' ' + "hidden-content"
				+ ' ') > -1) {
			try {
				tempdes = tempdes + elems[i].textContent;

			} catch (e) {
				// TODO: handle exception
			}
		}
		if ((' ' + elems[i].className + ' ').indexOf(' ' + "imgCont" + ' ') > -1) {
			try {
				pageInfo.colorSelection = elems[i].getAttribute("title");
			} catch (e) {
				// TODO: handle exception
			}

		}
		tempdes = tempdes.replace("\n", "");
		pageInfo.featurebullets = tempdes;
	}
	break;
case "www.zalando.co.uk":
	try {
		pageInfo.price = document.querySelector('[itemprop=price]').textContent;
		//pageInfo.price = document.getElementById("articlePrice").textContent;
		pageInfo.featurebullets = document.getElementById("productDetails").textContent;
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent;

	} catch (e) {

	}
	break;
case "www1.macys.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent;
		pageInfo.featurebullets = document.getElementById("prdDesc").textContent;
		pageInfo.colorSelection = document
				.querySelector('[class=productColor]').textContent;
		pageInfo.price = document.querySelector('[class=priceSale]').textContent;
	} catch (e) {

	}
	break;
case "www.kohls.com":
	try {
		pageInfo.productTitle = document.getElementsByTagName("title")[0].innerHTML;
		pageInfo.featurebullets = document.getElementById("collection-content").textContent;
		pageInfo.price = document.querySelector('[class=sale]').textContent;
		pageInfo.colorSelection = document
				.querySelector('[class=s-color-detail]').textContent;
	} catch (e) {

	}
	break;
case "www.etsy.com":
	try {
		pageInfo.productTitle = document.getElementsByTagName("title")[0].innerHTML;
		pageInfo.featurebullets = document.getElementById("description-text").textContent;
		var metas = document.getElementsByTagName('meta');
		var ii = 0;
		for (ii = 0; ii < metas.length; ii++) {
			if (metas[ii].getAttribute("property") == "etsymarketplace:price") {
				pageInfo.price = metas[ii].getAttribute("content");
				break;
			}
		}
	} catch (e) {

	}
	break;
case "www.justfab.com":
	try {
		pageInfo.productTitle = document.getElementsByTagName("title")[0].innerHTML;
		pageInfo.colorSelection = document
				.querySelector('[class=selectedColor]').textContent;
		pageInfo.price = document.querySelector('[class=heavy]').textContent;
		pageInfo.featurebullets = document.querySelector('[class=info]').textContent;
	} catch (e) {

	}
	break;
case "www.asos.com":
	try {
		pageInfo.productTitle = document.getElementsByTagName("title")[0].innerHTML;
		pageInfo.featurebullets = document
				.getElementById("ctl00_ContentMainPage_ctlSeparateProduct_divInvLongDescription").textContent;

		var elems = document.getElementsByTagName('*'), i;
		var tempdes = '';
		for (i in elems) {
			if ((' ' + elems[i].className + ' ').indexOf(' '
					+ "delivery_highlight" + ' ') > -1) {

				try {
					pageInfo.price = elems[i].textContent;
				} catch (e) {
					// TODO: handle exception
				}
			}

		}
	} catch (e) {

	}
	break;
case "www.target.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent;
		pageInfo.price = document.querySelector('[itemprop=price]').textContent;
		pageInfo.featurebullets = document.querySelector('[class=content]').textContent;
		pageInfo.colorSelection = document.getElementById('Pink').value;

	} catch (e) {

	}
	break;
case "fab.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent;
		pageInfo.price = document.querySelector('[itemprop=price]').textContent;
		pageInfo.featurebullets = document
				.querySelector('[class=prodMidblock]').textContent;
		pageInfo.colorSelection = document.querySelector('[itemprop=color]').textContent;

	} catch (e) {

	}
	break;
case "www.jcrew.com":
	try {
		pageInfo.featurebullets = document
				.querySelector('[class=product_desc]').textContent;

		var metas = document.getElementsByTagName('meta');
		var ii = 0;
		for (ii = 0; ii < metas.length; ii++) {
			if (metas[ii].getAttribute("property") == "og:title") {
				pageInfo.productTitle = metas[ii].getAttribute("content");
				break;
			}
		}

	} catch (e) {

	}
	break;
case "www.anthropologie.com":
	try {
		var metas = document.getElementsByTagName('meta');
		var ii = 0;
		for (ii = 0; ii < metas.length; ii++) {
			if (metas[ii].getAttribute("property") == "og:title") {
				pageInfo.productTitle = metas[ii].getAttribute("content");
				break;
			}
		}

		pageInfo.featurebullets = document
				.querySelector('[itemprop=description]').textContent;
		pageInfo.colorSelection = document.querySelector('[itemprop=color]').textContent;
		pageInfo.price = document.querySelector('[itemprop=price]').textContent;

	} catch (e) {

	}
	break;
case "www.zappos.com":
	try {
		pageInfo.price = document.getElementById("priceSlot").textContent;
		pageInfo.featurebullets = document
				.querySelector('[itemprop=description]').textContent;
		var metas = document.getElementsByTagName('meta');
		var ii = 0;
		for (ii = 0; ii < metas.length; ii++) {
			if (metas[ii].getAttribute("property") == "og:title") {
				pageInfo.productTitle = metas[ii].getAttribute("content");
				break;
			}
		}
		pageInfo.colorSelection = document.getElementById("colors").textContent;

	} catch (e) {

	}
	break;
case "www.net-a-porter.com":
	try {
		pageInfo.price = document.querySelector('[itemprop=price]').textContent;
		pageInfo.productTitle = document.getElementsByTagName("title")[0].textContent;
		var metas = document.getElementsByTagName('meta');
		var ii = 0;
		for (ii = 0; ii < metas.length; ii++) {
			if (metas[ii].getAttribute("property") == "og:description") {
				pageInfo.featurebullets = metas[ii].getAttribute("content");
				break;
			}
		}
	} catch (e) {
	}
	break;

case "www.shopbop.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent
				.trim();
		pageInfo.price = document.querySelector('[class=priceBlock]').textContent
				.trim();
		pageInfo.featurebullets = document
				.querySelector('[itemprop=description]').textContent.trim();
		pageInfo.colorSelection = document
				.querySelector('[class=selectedColor]').textContent;
	} catch (e) {

	}
	break;

case "www.yoox.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent
				.trim();
		pageInfo.price = document.querySelector('[itemprop=price]').textContent
				.trim();
		pageInfo.colorSelection = document
				.querySelector('[class=colorsizelist]').textContent;
		pageInfo.featurebullets = document.querySelector('[id=tabs-1]').textContent
				.trim();
	} catch (e) {

	}
	break;
case "www.bluefly.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent
				.trim();
		pageInfo.price = document.getElementsByName("rangeFinalPrice")[0].value;
		pageInfo.colorSelection = document.getElementsByTagName("em")[0].textContent;
		var elems = document.getElementsByTagName('*'), i;
		var tempdes = '';
		for (i in elems) {
			if ((' ' + elems[i].className + ' ').indexOf(' '
					+ "pdpBulletContainer" + ' ') > -1) {

				try {
					tempdes = tempdes + elems[i].textContent;

					pageInfo.featurebullets = tempdes;
				} catch (e) {
					// TODO: handle exception
				}
			}

		}
	}

	catch (e) {

	}
	break;
case "www.yoox.com":
	try {
		pageInfo.productTitle = document.querySelector('[itemprop=name]').textContent
				.trim();
		pageInfo.price = document.querySelector('[itemprop=price]').textContent
				.trim();
		pageInfo.colorSelection = document
				.querySelector('[class=color-picker clearfix]').textContent;
		pageInfo.featurebullets = document.querySelector('[id=tabs-1]').textContent
				.trim();
	} catch (e) {

	}

}

/*case"www.lagarconne.com":
 try{
 pageInfo.productTitle = document.querySelector('[class=product-name]').textContent;
 pageInfo.price = document.getElementsByClassName('[class=product-price din]').textContent;

 }
 catch (e)
 {

 }*/
/*case "shop.nordstrom.com":
 try{
 pageInfo.productTitle =  document.getElementsByTagName("title")[0].innerHTML;
 pageInfo.price = document.getElementsByTagName("span").textContent;
 //		 pageInfo.featurebullets = document.getElementById("collection-content").textContent;
 //		 pageInfo.colorSelection = document.querySelector('[class=s-color-detail]').textContent;
 }
 catch (e){

 }*/

// Send the information back to the extension
chrome.extension.sendMessage(pageInfo);
