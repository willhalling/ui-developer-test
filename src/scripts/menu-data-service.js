export class MenuDataService {

    constructor() {
        this.menuData = [];
    }    

    /**
     * Filters the data. Leaf items come last
     * @param {object} data 
     */
    filterMenuByLast(data) {
        return data.sort((a, b) => {
            return a.leaf - b.leaf;
        });
    }

    /**
     * Creates the menu and child menu
     * @param {object} data 
     * @param {object} element
     */
    createMenu(data, element) {

        this.menuData = this.filterMenuByLast(data);
        let newData = this.menuData;
        
        const menu = document.createElement("ul");
        menu.className = `menu__list`;

        for (let i = 0; i < newData.length; i++) {

            const hasChildMenu = (newData[i].menu !== null) ? true : false;
        
            const menuElement = document.createElement('li');
            menuElement.className = `menu__item${newData[i].cssClass ? ' '+ newData[i].cssClass : ''}`;
            menuElement.id = newData[i].id;
            menu.appendChild(menuElement);
            element.appendChild(menu);

            const menuLink = document.createElement('a');
            menuLink.setAttribute('href', '#');
            menuLink.setAttribute('title', newData[i].description);
            menuLink.className = `menu__link${hasChildMenu ? ' menu__hasChild' : ''}`;
            menuLink.innerHTML = newData[i].description;

            menuElement.appendChild(menuLink);

            // create child menu (if any)
            if (hasChildMenu) {
                this.createMenu(newData[i].menu, document.getElementById(menuElement.id));
                this.createEventListener(menuLink);
            }
        }

    }

    /**
     * Click listener for child menu
     * @param {object} element
     */
    createEventListener(element){

        element.addEventListener('click', function(event) {
            event.preventDefault();
            this.classList.toggle("menu__link--active");
        });

    }

}