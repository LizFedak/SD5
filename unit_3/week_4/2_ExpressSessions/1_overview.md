### Overview
* Sessions are a convenient way to maintain state.
  
* It is typically considered bad practice to use cookies to store a large amount of information in the browser, some is fine and may even be necessary, but for things like user settings or data that needs to be persisted, it is better practice to persist into a database and recall it using identifiers stored in sessions.
  
* Due to the way they are handled by the browser, sessions have better security than cookies and should be used in most situations in place of cookies.
  
#### Continue to [2 - Configuration](2_configuration.md)