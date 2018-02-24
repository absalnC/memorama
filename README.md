Memorama is a game where the user is shown a number of shuffled  cards side-down. There are n pairs of cards, where each pair shares the same 'image'
The user can turn a card side up and try to guess where is the pair of the card by turning the card in the guessed position side up.
If he is right he can leave those cards side up and try with the next pair. If he is wrong he must put both cards face down and keep trying until he loses. There is a count of opportunities left that is decremented each time the user is wrong. The player loses if the oportunities go down to zero.
The user wins if he has guessed all the positions of the cards before running out of opportunities.

State:
  -Chances left
  -Upside pairs
  -Upside
  -Picked
  -Has started
  -Has finished
  -Has Won

Transitions:
  Not has started->Pick card->Has started
  Has finished ->Restart -> Not has started, not has finished, clear state
  Has finished->Any action -> State does not change
  Chances left==1,Upside,--> Picked first not pick--> Has finished, has not won
  chances left>0,has started,upside pairs<pairs ->Picked first ==pick-> Increment upside pairs
  chances left>1,has started, ->Picked first !=pick-> Decrement chances left
  chances left>0,has started,Upside pairs==pairs-> Picked first==pick ->Has finished, has won
