## CSS Topic Overview
Below is a brief synopsis of the CSS techniques we will be using in this lab. We are going to gain an understanding of using CSS fonts, Display techniques, Margin/Boarder/Padding, and Floating.  

### Fonts
* Attributes:
  * font-family: Defines the font family, for example "Times New Roman".
  * font-size: Sets the size of a font, you can use pixels, ems, %'s as well as a few other options.
  * font-style: Can set text to italics, oblique and a few other options.
  * font-variant: Can set font to small-caps.
  * font-weight: Sets weight of a font, for example bold.
* Font Awesome: [Font Awesome](https://fortawesome.github.io/Font-Awesome/) is a good resource for images as well as fonts.
* Google Fonts: [Google Fonts](https://www.google.com/fonts) is another collection of free fonts which you can download and use.

### Display
* Display Block: Block level elements behave in a manner similar to ``<h1>-<h6>`` tags as well as the ``<p>`` tag. These elements are formatted as blocks and take up all available width. Also a line break is inserted before and after the element.

* Display Inline: Inline elements allow for the creation of linear content. Tags such as ``<a>`` and ``<span>`` abide by this functionality. These elements do not insert line breaks before and after the content. They also only take up as much space as is necessary.

* Display Inline-Block: This style creates a box for the element but does not take up all available width. This allows for additional content to flow with surrounding content.

* Display None: Causes an element to take up no space at all. It is not visible to the user when the document renders. This is used in conjunction with JS to hide and unhide content.

### Floating
* Floating: An element can either be floated left or right. Floating an element allows for content to flow along the opposite direction from which the element was floated. Once an element is floated all other elements around it will move with respect to the float. These behavior can be avoided by using the clear property ``clear : both;``.

### The Box Model
<img src="box-model.jpg" width ="200"/>

Every element is comprised of a box. This model is shown above and can be broken down into 4 sections content, margin, boarder, and padding. Content has a height and a width property while the rest can be broken down into top/bottom/left/right properties, which set their respective properties in the appropriate direction.

* Padding: Transparent area surrounding the content.
* Boarder: Sets a boarder surrounds the margin.
* Margin: Transparent area outside the border.

If you were trying to calculate the total width of an element it would be:
Content(width) + (paddingLeft + paddingRight) + (boarderLeft + boarderRight) + (marginLeft + marginRight). Height would be the same formula using Content height and the appropriate top and bottom properties of the other elements.

## Lets Make a Nav Bar
We are going to list the basic steps needed to create a nav bar. A nav bar is basically a list of links. These can be additionally styled as you see fit.

Step 1: Create an unordered list containing the necessary tabs for your applications nav bar.

``<ul>``    
``<li>Home</li>``  
``<li>Resume</li>``  
``<li>Projects</li>``  
``</ul>``

Step 2: Replace the hardcoded values with links to your html or jsp pages
``<ul>``    
``<li><a href="index.html">Home</a></li>``  
``<li><a href="resume.jsp">Resume</a></li>``  
``<li><a href="projectHome.html">Projects</a></li>``  
``</ul>``

Step 3: Use ``list-style = none;`` in your css on the li elements to get rid of the bullet points.

Step 4: Make the ``li a`` elements block elements using ``display: block`` in the css.

Step 5: Float all of the li elements left.

Step 6: Set the padding of the elements to attain the desired spacing and look of your nav bar.

Step 7: Style nav with colors and on hover events as you see fit.  

Add ons: If you have sub categories to your nav bar you can try adding a drop down to your menu. Try adding a sub list to one of your nav bar items and play with the display none property to get the to appear on mouseover. You will need to tinker with the positioning of the list items to have them appear under the correct header.
