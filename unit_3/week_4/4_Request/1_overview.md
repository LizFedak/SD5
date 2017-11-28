### Overview
* Request is incredibly feature rich and has extended capabilities like the ability to stream data.
  
* We will use Request to simplify calls to APIs.
  
* Request makes server-side asynchronous requests. This is useful in that it allows you to write complex logic to access API data once, and then access your custom route repeatedly with XMLHttpRequests from the client side. This saves you from needing to repeatedly manipulate returned data on the client side, following DRY principles.
  
* Example: the API data you receive is extremely nested or just very big. You could build a Request to only send the specific data you need to the view.
  
#### Continue to [2 - Configuration](2_config.md)