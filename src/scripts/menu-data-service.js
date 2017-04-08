export class MenuDataService {

    constructor() {
        this.menuData = [];
    }    

    filterMenuByLast(data) {
        return data.sort((a, b) => {
            return a.leaf - b.leaf;
        });
    }

    createMenu(data, element) {

        this.menuData = this.filterMenuByLast(data);
        let newData = this.menuData;

        for (let i = 0; i < newData.length; i++) {
            
            const menuElement = document.createElement('li');
            menuElement.className = `menu__item${newData[i].cssClass ? ' '+ newData[i].cssClass : ''}`;
            menuElement.id = newData[i].id;
            element.appendChild(menuElement);

            const menuLink = document.createElement('a');
            menuLink.setAttribute('href', '#');
            menuLink.setAttribute('title', newData[i].description);
            menuLink.className = `menu__link`;
            menuLink.innerHTML = newData[i].description;
            
            menuElement.appendChild(menuLink);

        }
    }
}




