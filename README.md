# Photoroom assignment

This is the result of an assignment provided by Photoroom.

<details>
<summary>Assignment</summary>
Senior Web Engineer - Design System Test

Hi 👋
This is an off-site asynchronous test for a Web engineer specialized in design systems to join
the Photoroom team.

Context
You're in the process of joining the Photoroom team. This test will help us know more
about how you work and communicate. There's no trap: the goal is for us to know better
your work habits and how you arbitrage, communicate, and code. We want to avoid
taking too much of your time, so don't spend more than 3 hours. We can accept an
unfinished project as long as it displays quality and it's well-explained.

Assignment
You’ll have to create a web app that lists Design items stored in a JSON file.
The items (aka Designs) will be displayed under two sections:
- Favorite Designs
- My designs (all non-favorite designs)
The user will be able to toggle a few Design options, such as visibility and the
favorite/non-favorite option.
The web app needs to offer a way to switch from a light mode to a dark mode.
You will be provided with a Figma file to build the website page as defined in the Figma specs.
An important part of the test is the implementation of Design System components.
Here is the starter code. It is a React.js app with TypeScript, Vite.js, Tailwind, Storybook, and
Radix-UI.

Guidelines
Apart from the features mentioned below, you will have to implement the design and especially
the Design System components with all their states, variants, breakpoints, etc. Storybook is set
up in the codebase so you can create stories. Tailwind is set up as well, so you can use and
define tokens.
The codebase contains the Radix UI library that you can use to build the components (like the
dialog). Feel free to install another UI library of your choice, like Headless UI.
1. As a user, I can see the list of Design items in 2 separate sections as defined in the
Figma design. The items are defined in a JSON file.
a. My favorites: all items that have `isFavorite` true.
b. My other designs: all other items
2. As a user, on clicking on a Design item, it opens a dialog where I can toggle the item's
favorite option and visibility (public, private), and the visual change is reflected:
a. The visibility label is updated on the card (either Private or Public)
b. The item is moved from one section to another depending on the “favorite”
option.
c. The changes applied to those items have to be persisted on page refresh.
3. As a user, I can visit the website on mobile, and it is responsive as per design.
4. As a user, I can toggle dark/light theme mode
a. The page styles need to be implemented for light and dark modes as per the
design
b. Add a way to toggle dark/light mode. It’s not defined in the design. We let you
add an element to the page to toggle it.
c. The theme mode needs to be kept on page refresh: If I activate the dark mode, it
needs to be persisted when I refresh the page and vice versa.

→ Feel free to comment on your code. It’s a good way for us to understand your choices,
blockers, and potential future improvements
→ No problem if you don’t finish the test as you would like. You can simply focus on a first
functional version and then iterate. We need at least one complete design system component
among the functionalities to assess your Design System skills.

Resources
1. A git repository: It’s the boilerplate to start from
2. A Figma file: It’s the web app designed to implement
a. We will send you an invite

How to
1. Create a git repo (preferably on GitHub) and send us the repo URL by email
2. Do the exercise
3. Don’t hesitate to ask questions if anything is unclear
4. We'll try out your app

What's evaluated
1. Understanding of what we're expecting
2. Implementing a design and Design System components
3. Prioritizing the features: if you spend the entire time adding the perfect build system but
not creating features, we might be disappointed
4. Communication
5. Autonomy
6. Code readability/simplicity over performance

Link to repository: https://github.com/Photoroom/react-ds-boilerplate
Link to Figma: https://www.figma.com/file/tYlx3nrVy1RORqITeQ77HP/Design-System-Dev-(template)?type=design&node-id=0%3A1&mode=dev
</details>


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
