# ui-developer-test
Technical Test written in ECMAScript 6 and CSS (SCSS). [BEM](http://getbem.com/) is used for the CSS naming convention. Flexbox is used for the layout.

## Installation

* `npm install` at root to install any project dependencies.
* `npm run dev` to run webpack in the watch mode and launch dev server at: [http://localhost:9000/](http://localhost:9000/).


## Peformance

* To keep loading times low I've used webpack to contain assets, including Javascript and CSS.
* One CSS file used to keep HTTP requests at a minimum.
* One JavaScript file used to keep HTTP requests at a minimum.
* Could minify the files to further improve performance.
