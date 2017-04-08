require('file-loader?name=[name].[ext]!../../src/javascript-coding.html');
require('../style.scss');

import {MenuDataService} from './menu-data-service.js';

const api = './data/menu.json';

export class App {    
    constructor() {
        this.dataUrl = api; 
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
                console.log(httpResult.menu);
                this.dataService = new MenuDataService();
                this.dataService.createMenu(httpResult.menu, document.getElementById("menu"));
            }
        };
    }

}

export let application = new App();
application.init();