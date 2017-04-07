// copy index.html to dist folder
require('file-loader?name=[name].[ext]!../../src/index.html');
require('file-loader?name=[name].[ext]!../../src/coding-responsively.html');
require('../style.scss');

export class App {    

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