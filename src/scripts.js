// copy index.html to dist folder
require('file-loader?name=[name].[ext]!../src/index.html');

require('./style.scss');

console.log('Test');

class View {
    
    constructor() {
        alert('Appsasas');
    }

    renderTest(){
    	alert('Appsasas');
    }
    
}

var App = new View();
App.renderTest();