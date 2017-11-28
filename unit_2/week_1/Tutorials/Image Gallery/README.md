## CSS Topic Overview
Below is a brief synopsis of the CSS techniques we will be using in this lab. We are going to gain an understanding of using CSS Positioning, Opacity, and Transitions

### CSS Positioning
* Position Property:
All of the position elements are manipulated using the Top/Bottom/Left/Right properties.
  * relative: Elements are positioned with respect to their normal position. Relative positioning only affects the target element.
  * absolute: Elements are positioned using its first ancestor element. If an element does not have an ancestor it is positioned using to the body. Absolute positioning can result in overlapping elements as elements may be placed in the same locations.
  * fixed: A fixed element is position with respect to the screen and does not move with a page scroll.

### Opacity
Opacity is a property that manipulates the transparency of an image. This property can be set on an element using the ``opacity: 0.4`` CSS command. This means that the element is 40% opaque, 60% transparent. It always take a value between 0 and 1.0.

### Transitions
Transitions can be used to make your website a little more flashy. With this being said too many transitions can yield a tacky feel to your site. Subtle animations can be useful. They are also newer functionality to CSS and are not compatible with all browsers.

## Lets Make an Image Gallery
Step 1: Make an unordered list where elements contain linked images. Try adding 3 for starters.

``<ul>``
  ``<li><a href="someLink.html"><img src="somePicture.jpg"/></a></li>``
  ``<li><a href="someLink.html"><img src="somePicture.jpg"/></a></li>``
  ``<li><a href="someLink.html"><img src="somePicture.jpg"/></a></li>``
``<ul>``

Step 2: Eliminate the list styles using ``list-type = none;``.

Step 3: When the image is clicked the image in its full size should be displayed.

Step 4: Style the images height and width to get a uniform size to your gallery.

Step 5: Use margin and padding to center and space the images properly on the screen.

Step 6: Wrap each image in a wrapper div with class name "imgContainer".  
``<li><a href="someLink.html"><div class="imgContainer"><img src="somePicture.jpg"/></div></a></li>``

Step 7: Set this div to a light grey with an opacity of 1 so that it is completely transparent. On hover of the list element, change the opacity of the .imgContainer to .40. Now when you hover over an image with you mouse the image will become slightly greyed out. You can add a title each image if you want to and have it appear and disappear on mouseover similarly to the container div.
