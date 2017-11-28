### Blackjack

#### Application Overview
Lets use classes to create a functional command line blackjack game. Leave the games functionality until the end, lets first get the class structure figured out. From here you can implement methods and fields to store data you think you would need during a blackjack game. If you are unfamiliar with the rules take a look [here][wiki]!

Included are a [basic UML document](BlackjackUML.png) as well as the [rubric](BlackJackRubric.pdf). The UML provided is a starting point. You will need to expand upon it to not only get a working game, but also to meet our expectations in the rubric. We have also provided you with a [getting started](gettingStarted.md) document for a little additional guidance on the classes and methods you will need to create in this project. Give it a try just using the user stories below and if you hit a wall use this document as a resource to help your progression. Trying this on your own regardless of if it blows up will be beneficial to you!

#### Learning Objectives
Below are a list of objectives that we see the blackjack programing reinforcing.

* Getting comfortable building classes in an Object Oriented manner.
* Building classes whose fields are Objects.
* Practice writing methods.
* Use collection types to organize and manage data.
* Use conditionals to create game logic.

#### User Story #1
Create a class structure that mimics a deck of cards. Remember decks (maybe a deck object???) as well as a hand of cards (hand object?) are made up of cards (card object?). Feel free to create the structure in any way you see fit.

#### User Story #2
Add methods and fields to your classes that mimic the functionality of shuffling and dealing a deck of cards. Remember that when a card is dealt you have to remove it from the current deck! You should be able to print out a shuffled deck to the terminal.

*Hint There is a .shuffle() method on the Collections class. You should have a field that is a collection type in your deck class. Look at the Oracle docs [here][shuffle]!*

#### User Story #3
Deal two hands of cards one to a Dealer and another to a Player. Allow the players to Hit (add cards to their hand) or Stay (not add cards to their hand) in accordance to the rules of blackjack shown in the [wiki][wiki].

#### User Story #4
Implement the remaining rules of blackjack so you can determine a winner of each round.

#### Stretch Goals
* Implement a monetary system so players can place bets on their hands.

* Allow users to split hands.

[wiki]: https://en.wikipedia.org/wiki/Blackjack
[shuffle]:https://docs.oracle.com/javase/6/docs/api/java/util/Collections.html#shuffle(java.util.List)
