var caption_label = 'a';


$(document).ready(function() {

	$('table').each(function(){
		$(this).magnificPopup({
			delegate: 'a.img',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	});
	
	$('.divMagnific').each(function(){
		$(this).magnificPopup({
			delegate: 'a.img',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	});
	
});

function increment_caption_counter() { caption_label = String.fromCharCode(caption_label.charCodeAt(0) + 1); }
function reset_caption_counter() { caption_label = 'a'; }

function add_image_div(uri, caption)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<div style="text-align:center; margin-bottom: 3px;" <span>'+caption+'</span> </div>' + '<a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="100%"\
	src="' + uri + '" /></a><br />');
	increment_caption_counter();
}


function add_image_div_with_width(uri, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<div style="text-align:center; margin-bottom: 3px; padding: 5px;width:'+width+';float: left;" <span>'+caption+'</span> <br/> ' +'<a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="100%"\src="' + uri + '"/></a></div>');
	increment_caption_counter();
}


function add_image(uri, caption)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><div style="text-align:center; margin-bottom: 3px;" <span>'+caption+'</span> </div>' + '<a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="100%"\
	src="' + uri + '" /></a><br /> </td>');
	increment_caption_counter();
}

function add_image_with_width(uri, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><div style="text-align:center; margin-bottom: 3px;" <span>'+caption+'</span> </div>' +'<a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="' + width + '"\
	src="' + uri + '" /></a><br /> </td>');
	increment_caption_counter();
}

function add_image_with_width_thumbs(uri,uri_thumb, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="' + width + '"\
	src="' + uri_thumb + '" /></a><br />(' + caption_label + ') ' + caption + '</td>');
	increment_caption_counter();
}

function add_image_with_height(uri, caption, height)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img height="' + height + '"\
	src="' + uri + '" /></a><br />(' + caption_label + ') ' + caption + '</td>');
	increment_caption_counter();
}

function add_image_with_width_no_label(uri, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="' + width + '"\
	src="' + uri + '" /></a><br /> ' + caption + '</td>');
	increment_caption_counter();
}

function add_image_with_width_no_caption(uri, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="' + width + '"\
	src="' + uri + '" /></a>');
	increment_caption_counter();
}

function add_image_with_width_no_caption_thumbs(uri,urithumb, caption, width)
{
	var captionWithoutSup = caption;
	var indexOfSup = captionWithoutSup.search("<sup>");
	if (indexOfSup!=-1)
		captionWithoutSup = captionWithoutSup.substring(0,indexOfSup);
	document.write('<td><a href="' + uri + '" class="test-popup-link img" title="'+captionWithoutSup+'"><img width="' + width + '"\
	src="' + urithumb + '" /></a>');
	increment_caption_counter();
}