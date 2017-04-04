// copy index.html to dist folder
require('file-loader?name=[name].[ext]!../src/index.html');
require('./style.scss');

/*
import {menu} from './menu-data.js';
import {MenuDataService} from './services/menu-data-service.js';
import {MenuPage} from './home-page.js';
*/

export class App {    
    constructor() {
        //super('UI Test');
        //this.dataService = new MenuDataService();
        //this.dataService.loadData(menu);  
    }

    renderTest(){
    	alert('Render Test.');
    }

}

export let application = new App();
application.renderTest();