# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

X - As a user, I can click on a square to mark it.
X - As a user, my partner can click on a square after me and see their mark.
    - Pseudo Code:
        - Create a funtion called checkTurn
        - Great a conditional statement that checks for a null index of squares[index]
        - if not null then we are going to check for whos turn it is and then setSquares index to the appropriate players symbol (X or O)
X - As a user, I can't click on a square that has already been marked.
    -Pseudo Code 
        - the way we wrote the previous story prevents
        the same square from being clicked twice  by checking if the square is null before manipulating the square
X - As a user, when either my partner or I win the game (three squares in a row: horizontally,      vertically, or diagonally) I can see a notice telling me which player won.
    -Pseudo Code
        - create a function called cacluateWinner that takes in our current state of "squares"
        -create an array of arrays for every possible winning order out come.
        - create a for loop with the conditions of i =0, i < lines.length i++
        - create a new array of a,b,c which is just a place holder for the values in the row we are checking and set it equal to the array at lines[i]
        make a conditional statement that if sqaures at a, b & c are equal then return that square which holds the value of the most recent player click and returns that player won
X - As a user, I can't continue playing the game after the game has been won.
    - Create a conditional statement with checkturn making sure the once calculaterWinner is no longer null it ends the game with an alert and the board cannot be changed any further.
x - As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
    - create a conditional statement that once there has been 9 turns and no winner and alert will be dispalyed saying that it is a tie game.
x - As a user, I can click on a restart button that will clear the game board.
    - create a function called reset game
    - setSquares to its defualt initital state
    - setTurns back to zero.

### 🏔 Stretch Goals

X- As a user, I can see a pleasant stylings on the application.
X- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
