# code-challenges

Welcome to your daily practice challenge! You only need to do one challenge per day.  For example, if your project is named "code-challenge-1a-<your-name-here>", then you should only be looking at `challenges > 1a.js` .

## How to work on your code challenge

  - You should receive a daily link in the Techtonica Roadmap. Once you click it, there will be a page with the code challenge name and an "Accept this assignment" button.  Click "Accept this assignment".
  - You should then see a page that says "You are ready to go!" and "Your assignment has been created here:".  Click the github link provided, which will take you to your new repo.  If you get a 500 error, refresh the page a few times, and you should get the correct page in a few seconds.
  - Click the green "Clone or download" button. Copy the URL text provided.
  - In your terminal make sure your current directory is where you normally keep coding projects.  
  - Enter `git clone <paste-URL-here>`.  Ex. `git clone https://github.com/Techtonica/code-challenge-1a-chochan.git`
  - You should now be able to navigate to your new project: `cd code-challenge-1a-chochan`.  You can check on the name using `ls` first to make sure.
  - Open it in your preferred IDE.  Ex: `code .`
  - If today's code challenge is 1a, find `challenges > 1a.js` and get to work.
  - Check out the Testing section below to take advantage of our unit tests.
  - When time is almost up, submit whatever you have - we may be able to give you some advice, and you can pick up where you left off some other time.
  - If you haven't finished, note that it is still "in progress" in the Roadmap, and anywhere else you are keeping track of things.
  - Stop working and move on to the rest of the day's tasks.  You can come back to the code challenge when you have extra time later; these are important practice, but not a priority to complete.

## How to submit your code challenge
  - In your terminal, enter `git status` to make sure that today's challenge file is the only thing you changed.
  - `git add` just that file.  Ex: `git add challenges/1a.js`
  - Enter `git status` to make sure `challenges/1a.js` is staged.  
  - `git commit -m "solve 1a"` to commit what youve added.
  - `git push` to push your changes up to GitHub.
  - You may receive an email alert if you receive feedback on your submission.

> You will end up with a lot of projects on your computer called `code-challenge-*` after a few weeks.  If they are saved up in GitHub, and especially if they pass all the tests, there is no reason to keep them - go ahead and delete.  You can always download again later.

## Testing

  - In your terminal, navigate to today's code challenge project; for example, `cd code-challenge-1a-chochan`.
  - Since the day's code challenge is 1a, I only need to test that file with this command: `npm run test spec/1a-spec.js`
  - It should fail if you haven't started yet.
  - open `challenges > 1a.js` and get to work, running the test command again whenever you like.

## Troubleshooting

- `4 specs, 0 failures  Finished in 0.009 seconds`:
  No failures - they all passed!

- `SyntaxError: Unexpected token ')'`:
  This most likely means your return statement is empty.  Start entering your code in today's "challenges" file.

  Another problem could be that your parenthesis don't match perfectly.

### Technology

  This project uses Jasmine to test JavaScript files.
