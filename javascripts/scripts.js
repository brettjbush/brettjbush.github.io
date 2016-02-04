// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 768px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	if (mq.matches) {
		// window width is at least 768px
    var elements = document.getElementsByClassName("dropdown-toggle");
    for (var i = 0, len = elements.length; i < len; i++) {
        addClass(elements[i], "disabled");
    }
	}
	else {
		// window width is less than 768px
    // window width is at least 768px
    var elements = document.getElementsByClassName("dropdown-toggle disabled");
    for (var i = 0, len = elements.length; i < len; i++) {
        removeClass(elements[i], "disabled");
    }
	}

}

// Credit: http://www.avoid.org/javascript-addclassremoveclass-functions/
function hasClass(el, name) {
   return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}

function addClass(el, name)
{
   if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
}

function removeClass(el, name)
{
   if (hasClass(el, name)) {
      el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
   }
}

function search()
{
	var searchtext = document.getElementById('search-box').value;
	var formattedsearchtext = searchtext.replace(/[^\w\s]/gi, '').toLowerCase();
	window.location.href = 'search-result.html?search=' + formattedsearchtext;;
	//'localhost:4000/search-result.html?search=' + formattedsearchtext;
	//alert(searchtext);
}
