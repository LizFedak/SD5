1.	Use telnet to connect to port 80 of www.google.com and do an HTTP/1.0 GET request for the main page.  What value was returned in the Content-type: header?

2.	Telnet to port 80 of www.google.com and do a proper HTTP/1.1 GET request for the main page.

3.	Using telnet connections to port 80 of www.google.com, try the following requests noting the HTTP response line and headers returned for each:
	```bash
	HEAD / HTTP/1.0
	OPTIONS / HTTP/1.0
	TRACE / HTTP/1.0
	```
	Try these requests for some other web sites.

4.	Open newcharacter.html in a text editor.  For both forms, change the action attribute to 'mailto:me@example.com' (feel free to substitute your own actual email address, though it's not necessary.)  Load the page in your browser, fill out the form text inputs and select various other items, then click the "Create Character" button.
	
5.	When a form has a mailto: action URL, most browsers will open your default email client program and pass the form data to it.  Examine what was loaded into the email program.  You can close the email message window when you're done (if you used your own email address in the mailto: URL, feel free to send it, and examine the resulting message when it arrives.)

6. 	Edit newcharacter.html again, modifying the action URL to: 'mailto:me@example.com?subject="HTTP+Parameter+Demo'.  Reload the page in your browser and fill out the form.  In the "Catchprase" input add some text that includes spaces, question marks, ampersands, slashes, and so on.  Submit the form and look closely at the request body that loads into your email program.  Close the email message window when you're done.

7.	Open your browser's Developer Tools:
	*	Chrome: Ctrl-Shift-I (Cmd-Option-I on Mac), or Menu | More Tools | Developer tools
	*	Firefox: Ctrl-Shift-K (Cmd-Option-K on Mac), or Tools | Web Developer | Web Console
	*	Safari: Cmd-Option-I, or Preferences | Advanced | Show Develop Menu, then Develop |
		Show Web Inspector,
	*	Internet Explorer: F12 (Developer Tools) | Console

	Now modify newcharacter.html again, changing the action back to 'http://example.com/char.cgi'. Fill out the form and submit it again.  This will result in a 404 - Not Found error from example.com (which of course has no such script online to process our form).     	 Find the Network tab in the Developer Tools.  Select the POST request for char.cgi, and explore the various HTTP headers as well as the form's query parameters.


