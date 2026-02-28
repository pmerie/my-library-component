# Assignment 12 - Web Component Library

Using React App, Typescript, Styled-Components and Storybook, the assignment involves buidling a React component library containing the necessary components for the application, including Button, Label, Text, Table, Dropdown, Radio Button, Img, Hero Image and Card. Additionally, default and disable states are supported.

# Creating a React APP with Typescript
Use Create React App with Typescript to create a foundation application.

Command:

npx create-react-app my-component-library --template typescript
cd my-component-library

I began npm start after making my project template to make sure everything was operating properly.

# Install Storybook
Install the storybook

npx storybook@latest init

This indicates to me that it will get the storybook ready to develop and demonstrate the components in order to ensure that it is functioning. By altering props like text, color and disabled state, it allows to test interface elements and interaction.

# Install Required Libraries

npm install styled-components
npm install --save-dev @types/styled-components

npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev jest-styled-components

After running the storybook, I added all the libraries needed for the task. Upon finishing the installation.

Prop based styling is made possible by the styled-components.
jest-dom offers a testing matcher enhancement
Testing CSS, such as turning off background colors is feasibble via jest-styled-components

# Project Structure
I use this following files and arrange each component in its own folder;


Component_name.tsx
Component_name.stories.tsx 
Component_name.types.tsx 
Component_name.tests.tsx 
Index.ts 

This applicable to all necessary elements


# Implement all required components
Using the same format as the assignment, I put all of the following elements into practice

Button
Label
Text
Table 
Table header
Table row
Table cell
Table footer
Dropdown
Radio button
Img
Hero Image
Card 

Two tests and a storybook are included in every component


# Testing phase
I executed this command after completing each component

npm test

It provides visibility and disabled state tests for every component. The unit test verifies the elements are accurate and truthful


# Production Build
I ran the production build using:

npm run build

This makes my Docker container's /build directory. It optimizes my combined data into smaller files and speeds up browser loading


# Docker Deployment
I made a Dockerfile that creates the production version of React and displays it on port 8083

I use the following command to create an image after constructing my dockerfile:

docker build -t santiago_princessmerie_coding_assignment12 .

Run command:

docker run -p 8083:8083 --name santiago_princessmerie_coding_assignment12 santiago_princessmerie_coding_assignment12


