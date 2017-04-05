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

    init(){
    	this.bindEvents();
    }

    bindEvents(){
    	
        document.getElementById("mobileHeaderLink").addEventListener("click", function(event){
            event.preventDefault();
            this.classList.toggle("header__mobile--active");
    	});

        document.getElementById("footerHeaderLink").addEventListener("click", function(event){
            event.preventDefault();
            this.classList.toggle("footer__mobile--active");
        });

    }

}

export let application = new App();
application.init();