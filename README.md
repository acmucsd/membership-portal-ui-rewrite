# ACM at UCSD: Membership Portal UI

This repository is an open-source rewrite of the frontend code for the ACM at UCSD Student
Membership Portal. The live portal is viewable at:
[https://members.acmucsd.com](https://members.acmucsd.com).

See [https://github.com/acmucsd/membership-portal](https://github.com/acmucsd/membership-portal) for
the portal backend.

## Setup

### Verify Correct Versioning of Package Managers

- node v.18.10.0
- yarn v1.22.19
- npm v8.19.2

### Install VSCode Marketplace Extensions

When opening the project in VSCode, you should get a prompt to install the recommended extensions.

Alternatively, manually install them, listed below:

- Prettier - Code formatter (`esbenp.prettier-vscode`)
- Prettier ESLint (`rvest.vs-code-prettier-eslint`)
- ESLint (`dbaeumer.vscode-eslint`)
- Stylelint (`stylelint.vscode-stylelint`)
- stylelint-plus (`hex-ci.stylelint-plus`)

### Setup Repo

If it's your first time running the repository, run `yarn` to install all `node_modules` packages.

Run `yarn dev` to start a dev environment with the testing API.

Run `yarn prod` to run a production-ready build locally.

<!-- ## Setup

**Install Node.js and npm**: [https://nodejs.org/en/](https://nodejs.org/en/). Builds are currently
run on version `18.10.0`.

**Install yarn**: `npm install -g yarn`. Builds are currently run on `1.22.19`.

## Running

**Clone the repo**: Run `git clone https://github.com/acmucsd/membership-portal-ui-rewrite.git` in a
terminal.

**Install packages**: Run `yarn` or `yarn install` to install the node modules.

**Run the portal**: Run `yarn dev` to run the portal in the development environment on `localhost:3000`. Alternatively, run `yarn prod` to run your local changes with the live production API.

Currently, the portal is deployed as-is using `yarn build` on Vercel.

## Issues

- Add on Github, including a title, description, screenshots if applicable

- Label the applicable issue type.

- If you’d like to work on that specific issue, assign yourself.

- If not, it will get assigned during development meetings.

## PRs

- Every PR should have a corresponding issue it’s tied to. You can link by using the phrase
  “Resolves #XX.” in the PR description, or in the GitHub sidebar. Assign yourself to the PR.

- Tag the PR as “PR: Needs Review” and request a review from the portal PM.

- If the PR is approved, go ahead and merge the PR into the repo.

- If the PR isn’t approved, check the comments for feedback / suggested changes. When you merge, the
  branch will be deleted automatically.

## Coding

- When working on the portal, start by creating a new branch based on master. Add all commits to
  this branch, and then you can create a PR from there.

- There should be one feature/bugfix per branch.

- If you’re working on the portal in parallel with someone else and end up with PR conflicts / merge
  issues, contact the portal PM via the Discord server.

- If you are working on an overarching feature/refactor, make a separate branch from master and try
  your best to rebase to master whenever applicable. -->
