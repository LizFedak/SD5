### OO Cash Register

#### Application Overview
Lets look back at our make change program. Lets re-factor this program to adhere to our Object Oriented principles.

#### User Story #1
A cash register has a drawer which only knows about itself. 
* A drawer knows how many of each bill it contains
* A drawer knows how to add and remove bills from itself

#### User Story #2
A cash register has a point of sale.
* The point of sale calculates the amount of each bill or coin needed to make change.
* The point of sale knows how much revenue it has brought in (the purchase price of all items sold)

#### User Story #3
When a custome buys an item, the point of sale calculates the amount of change due and extracts the required change from the drawer. The drawer's bill totals should reflect this.
