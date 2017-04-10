// copy index.html to dist folder
import 'file-loader?name=[name].[ext]!../../src/index.html';
import 'file-loader?name=[name].[ext]!../../src/coding-responsively.html';
import '../style.scss';

export class App {    

    init(){
    	this.bindEvents();
    }

    bindEvents(){
    	
        document.getElementById('mobileHeaderLink').addEventListener('click', function(event){
            event.preventDefault();
            this.classList.toggle('header__mobile--active');
    	});

        document.getElementById('footerHeaderLink').addEventListener('click', function(event){
            event.preventDefault();
            this.classList.toggle('footer__mobile--active');
        });

    }

}

export let application = new App();
application.init();