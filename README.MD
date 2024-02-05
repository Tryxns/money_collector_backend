Backend will receive request of game result and save it into single json file for each session. The parameter that should be sent to server are:

UserID: Unique user id based on hashing of IP Address and Browser

MovementHistories: Array of robot movement

TotalMoneyAvailable: Total Money that available in the game

TotalMoneyFound: Money that has been collected by robot.

InterestRate: Interest rates defined at the beginning of the game.

TotalMoneyEarn: Calculated total money

Generated json file can be found under "output" folder

### Compile & start the server at port 3000
```sh
npm start
```