# noSerivce 

On July 1st 2015 OFCOM are bringing into force new regulations regarding 'Service Numbers'. What this basically means is, if your business telephone number starts with 084, 087 or 09 you must inform your customers about the cost of calling your number. Unfortunately, the old 

> Calls cost 20p per minute from a BT landline. Other landlines may vary and calls from mobiles may cost considerably more.

is no longer valid! You must tell customers exactly how much you charge for calling the number.

To make life easier, this simple jQuery plugin allows you to display the cost of calling the number in a tool tip. 

## Usage 

Wrap all the numbers in your website with a `<span class="noservice">0845 000 000</span>`

Download noService and include it in your document just before the closing `</body>` tag: `<script src="/path/to/noSerive.js"></script>`

After including the noService.js file add the following script below it:

	<script>
		$('.noservice').noService();
	</script>
	
You can change the `.noservice` class to anything you want, as long as it corresponds to the class you wrapped your number in.

## Defaults 

The defaults for this plugin are:

- noservice_class: 'noservice'
- message: "Calls to this number cost 20p plus your phone company's access charge."
- tooltip_class: 'tt'
- activeClass: "active"
- message_container: 'span'
- take_note: '*'

You can change these like so:

	<script>
		$('.noservice').noService({
			message: 'Calls to this number cost 10p from a BT landline and a free for everyone else :D',
			tooltip_class: 'tooltip',
			take_note: '!!!'
		});
	</script>
	
## Styles

The noService.css contains some basic styles for the default classes, change these to suite your design and class names.

## Version 

#### 0.1.0 
- First Release 
- Customise your own message 
- Optional plugin configurations 

#### Attribution 

A big thank you to Zeno Rocha and Addy Osmani for the awesome [jQuery Boilerplate](http://jqueryboilerplate.com/).