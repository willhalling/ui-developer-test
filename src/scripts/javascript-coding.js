require('file-loader?name=[name].[ext]!../../src/javascript-coding.html');
require('../style.scss');

//import {MenuDataService} from './menu-data-service.js';

const dataUrl = './data/menu.json';

export class App {    
    constructor() {
        this.dataUrl = './data/menu.json'; 
    }

    init(){
    	this.loadData(this.dataUrl);
    }

    loadData(url){
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                const httpResult = JSON.parse(httpRequest.responseText);
                console.log(httpResult);
            }
        };
    }

}

export let application = new App();
application.init();