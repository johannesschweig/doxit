# Notes
## Rules
- 3-6 Players
- everyone 6 cards
- Nobody/everybody gets it: 2 points for everybody except narrator
- Correct guess on narrator card: 3 points
- tricked somebody: 1 point each
## Components 
- Lobby
    - Player/Ghost
- Board
    - Hand
    - Narrator
    - (Player)
    - Status (center)
    - (CardWithClue)
- BigCards (with selection) (with text)
- CardWithClue
- CardStack (1-6) (Reveal)
- BigPlayers (next)
- WinScreen
## State
- Player
    - Position: 0-5
    - optional: Name
    - Points: 0-100
    - Cards: [...]
    - Narrator: true/false
- Game
    - Status:
        - Lobby
        - Word
        - Empathise
        - Voting
        - Solution
        - Done
