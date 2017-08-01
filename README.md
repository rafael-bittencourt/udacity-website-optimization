Udacity Website Performance Optimization Project
===============================
## Project Overview
Optimize a [provided website](http://github.com/udacity/frontend-nanodegree-mobile-portfolio) with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

## Execution
Download the project and open the `index.html` file in a web browser.

## PageSpeed Score
### Critical Rendering Path:
The `index.html` file achieves a PageSpeed score of at least 90 for Mobile and Desktop.
#### Optimizations made:
- Reorganize the project's folder structure
- Update the method to load Google webfont using Web Font Loader - [source](https://github.com/typekit/webfontloader); 
- Modify Google Analytics script to be asynchronous;
- Create a smaller version of `pizzeria.jpg`;
- Use print media query for `print.css`;
- Inline the main css;
- Use [grunt](https://gruntjs.com/configuring-tasks) to: 
	- Minify CSS and HTML files;
	- Uglify JS;
	- Optimize images;
#### Tests and Verification:
- Create a local server with python to host the project;
- Download and install [ngrok](https://ngrok.com/) to the project directory to make the local server accessible remotely;
- Use the [PageSpeed Insights Tool](https://developers.google.com/speed/pagespeed/insights) to evaluate the page.

## Getting Rid of Jank
### Frame Rate:
Optimizations made to `js/main.js` make `pizza.html` render with a consistent frame-rate at 60fps when scrolling.
#### Optimizations made:
- Reduce the background pizza images to 32;
- Simplify the phase calculation;
- Move the pizza selector in phase calculation and in the event listener outside the loop to prevent layout issues.
#### Verification: 
Use browser developer tools to verify the page's performance when scrolling.

### Computational Efficiency:
Time to resize pizzas is less than 5 ms using the pizza size slider on the `pizza.html` page.
#### Optimizations made:
- Recreate the function to change pizza size, simplifying the code;
- Move the pizza selector outside the loop to prevent layout issues.
#### Verification: 
Resize time is shown in the browser developer tools.