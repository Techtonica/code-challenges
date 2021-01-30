# How to contribute

To use GitHub classroom as a TA or Admin, you must be added by an existing admin.

## Giving Feedback

In [GitHub classroom](https://classroom.github.com/classrooms/19865942-techtonica-classroom), click an assignment.  This should take you to the list of "students"; click the "Review" button next to the student you'd like to leave feedback for. This should link to a Pull Request page that is specifically for leaving feedback, rather than actual code changes.  This is where you can leave comments for the participant for the code challenge in question.  You can also suggest code changes as part of the PR.  

These never need to be merged.

If for some reason it doesn't take you to a Pull Request page, you can either click the GH Classroom "go to repo" button instead, and comment on their commit, or follow the steps in "Running participant code challenge tests" below, which should create the Pull Request feedback page.

## Running participant code challenge tests

Due to a known GitHub classroom quirk, it seems you can only add remote repo tests and have them run successfully if the participant has already cloned their repo for that code challenge.  

  - Once they have been submitted, go to `Techtonica Classroom > code-challenge-specificnumber > Edit Assignment > Grading and Feedback > Edit`.  
  - Click the "Edit" button in Grading and Feedback, then click "Save this test case", then "Update assignment".  We should already have entered the test criteria, but for some reason it only works after the participant repo has been created, not before. This action should trigger test updates as though it were newly added.
  - Participant repos should re-run their tests in a few seconds with the correct script.  You should now be able to see whether they pass by clicking `Techtonica Classroom > code-challenge-specificnumber > Review` for the participant.

## Adding Code Challenges and Tests

1. Create challenge and test files.
    - Add a js challenge file in the `challenges` folder with the name of the challenge, ex: `1a.js`.  
    - Add a js test file in the `spec` folder with the name of the challenge, ex: `1a-spec.js`.  We are using basic jasmine input/output tests, since participants have access to the tests. Also, this is part of the stack they will learn!
    - Follow the patterns for exporting and importing from the corresponding code challenge, and run them in your terminal to QA: `npm run test spec/1a-spec.js`.  Remember to leave the function empty before committing if you were testing your own code inside.
    - If you are confident, push directly to main, otherwise create a branch and a PR.
    - Once the new challenge/tests are merged, you can bring them into GitHub Classroom.

1. In [GitHub classroom](https://classroom.github.com/classrooms/19865942-techtonica-classroom), select "New Assignment". Fill out the forms following these directions:

    - Assignment title:  
      `code-challenge-<specificnumber>`  ex: `code-challenge-1a`
    - Deadline:  
      10am Pacific time on the day it appears in the Techtonica Roadmap.  If you can't figure it out, leave this blank.
    - Repository visibility: `private`.
    - Grant students admin access to their repository: `true`
    - Add a template repository to give students starter code:
      `Techtonica/code-challenges`
    - Allow students to use an online IDE: leave blank
    - Add autograding tests:
      - Choose `run command`
      - Test name: `<specificnumber>-test`, ex: `1a-test`
      - Setup Command:  leave blank
      - Run command: `npm run test spec/<specificnumber>-spec.js` ex: `npm run test spec/94-spec.js`
      - Timeout: 1
      - Points: 1
      - Click `Save Test Case`
    - Enable Feedback Pull Requests:  `true`
    - Click `Create Assignment`
    - Make sure `Enable assignment invitation URL` is true, and copy the URL.
    - Make sure the URL is shared with the participants.  Currently the method is placing the link in the Roadmap next to the specific code challenge assignment. Participants can use the link and accept the challenge themselves.

  > These steps each create a code challenge that refers to the same repo, but with tests running for only one challenge.  The participant is expected to only change the file for that day's challenge, and use a new link for every challenge.  This makes it possible for us to review the challenges separately, and see that participants have submitted each one individually.
