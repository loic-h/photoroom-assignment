# Photoroom assignment

This is the result of an assignment provided by Photoroom.

## Author's note
I decided to tackle the requirements in the given order and complete them before jumping to the next.
Here is what I managed so far:
1. [Done ✅] As a user, I can see the list of Design items in 2 separate sections as defined in the
Figma design
2. [To Do] As a user, on clicking on a Design item, it opens a dialog where I can toggle the item's
favorite option and visibility (public, private), and the visual change is reflected
3. [To Do] As a user, I can visit the website on mobile, and it is responsive as per design.
4. [To Do] As a user, I can toggle dark/light theme mode

I focused on delivering a usable app with reusable components and foundations.
I took 10 minutes at the end of the assignment to try to make the page available in github pages but lacked the time to manage it.

What I would improve if given the time:
- Add proper typing, especially for component API to help consumption
- Add functional / regression tests for components
- Move tokens definition outside of the tailwind configuration to separate concerns. Maybe use a token management tool like Style Dictionary

Technologies I (didn't) used:
- Tailwing to apply utility styles and apply the design system foundations
- I didn't used Radix UI because I am not familiar with it. I used plain markup instead

## Setup

```sh
# Install depedencies and set up repository.
pnpm i

# run the app
pnpm dev

# run Storybook
pnpm storybook
```
