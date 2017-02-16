/*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
// https://github.com/jonathantneal/svg4everybody.git
function embed(svg, target) {
	// if the target exists
	if (target) {
		// create a document fragment to hold the contents of the target
		var fragment = document.createDocumentFragment();

		// cache the closest matching viewBox
		var viewBox = !svg.getAttribute('viewBox') && target.getAttribute('viewBox');

		// conditionally set the viewBox on the svg
		if (viewBox) {
			svg.setAttribute('viewBox', viewBox);
		}

		// clone the target
		var clone = target.cloneNode(true);

		// copy the contents of the clone into the fragment
		while (clone.childNodes.length) {
			fragment.appendChild(clone.firstChild);
		}

		// append the fragment into the svg
		svg.appendChild(fragment);
	}
}

function loadreadystatechange(xhr) {
	// listen to changes in the request
	xhr.onreadystatechange = function () {
		// if the request is ready
		if (xhr.readyState === 4) {
			// get the cached html document
			var cachedDocument = xhr._cachedDocument;

			// ensure the cached html document based on the xhr response
			if (!cachedDocument) {
				cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument('');

				cachedDocument.body.innerHTML = xhr.responseText;

				xhr._cachedTarget = {};
			}

			// clear the xhr embeds list and embed each item
			xhr._embeds.splice(0).map(function (item) {
				// get the cached target
				var target = xhr._cachedTarget[item.id];

				// ensure the cached target
				if (!target) {
					target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id);
				}

				// embed the target into the svg
				embed(item.svg, target);
			});
		}
	};

	// test the ready state change immediately
	xhr.onreadystatechange();
}

function svg4everybody(rawopts) {
	var opts = Object(rawopts);

	// create legacy support variables
	var nosvg;
	var fallback;

	// set whether the polyfill will be activated or not
	var polyfill;
	var olderIEUA = /\bMSIE [1-8]\.0\b/;
	var newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
	var webkitUA = /\bAppleWebKit\/(\d+)\b/;
	var olderEdgeUA = /\bEdge\/12\.(\d+)\b/;

	if ('polyfill' in opts) {
		polyfill = opts.polyfill;
	}  else {
		polyfill = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	}

	// create xhr requests object
	var requests = {};

	// use request animation frame or a timeout to search the dom for svgs
	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	// get a live collection of use elements on the page
	var uses = document.getElementsByTagName('use');

	function oninterval() {
		// get the cached <use> index
		var index = 0;

		// while the index exists in the live <use> collection
		while (index < uses.length) {
			// get the current <use>
			var use = uses[index];

			// get the current <svg>
			var svg = use.parentNode;

			if (svg && /svg/i.test(svg.nodeName)) {
				var src = use.getAttribute('xlink:href');

				if (polyfill) {
					if (!opts.validate || opts.validate(src, svg, use)) {
						// remove the <use> element
						svg.removeChild(use);

						// parse the src and get the url and id
						var srcSplit = src.split('#');
						var url = srcSplit.shift();
						var id = srcSplit.join('#');

						// if the link is external
						if (url.length) {
							// get the cached xhr request
							var xhr = requests[url];

							// ensure the xhr request exists
							if (!xhr) {
								xhr = requests[url] = new XMLHttpRequest();

								xhr.open('GET', url);

								xhr.send();

								xhr._embeds = [];
							}

							// add the svg and id as an item to the xhr embeds list
							xhr._embeds.push({
								svg: svg,
								id: id
							});

							// prepare the xhr ready state change event
							loadreadystatechange(xhr);
						} else {
							// embed the local id into the svg
							embed(svg, document.getElementById(id));
						}
					}
				}
			} else {
				// increase the index when the previous value was not "valid"
				++index;
			}
		}

		// continue the interval
		requestAnimationFrame(oninterval, 67);
	}

	// conditionally start the interval if the polyfill is active
	if (polyfill) {
		oninterval();
	}
}

module.exports = svg4everybody;
