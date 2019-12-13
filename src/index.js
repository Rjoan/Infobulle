class Tooltip {
    static bind(selector) {
        document.querySelectorAll(selector).forEach(element => new Tooltip(element))       
    }

    constructor(element) {
        this.element = element;
        this.title = element.getAttribute('title');   
        this.tooltip = null;
        this.element.addEventListener('mouseover', this.mouseOver.bind(this));
        this.element.addEventListener('mouseout', this.mouseOut.bind(this));
        
    } 

    mouseOver() {
       let tooltip = this.createTooltip()
    }

    mouseOut() {
        if(this.tooltip !== null)
        {
            document.body.removeChild(this.tooltip)
            this.tooltip = null;
        }
    }

    createTooltip() {
        if(this.tooltip === null) {
            let tooltip = document.createElement('div');
            tooltip.innerHTML = this.title;
            tooltip.classList.add('tippy');
            document.body.appendChild(tooltip);
            this.tooltip = tooltip; 
        }
        return tooltip;
    }


}

/**
 * Selectionner tous les elements avec un attribut title
 * Lorsque l'on survole un de ces elements
 *  On crée une bulle avec le bon titre 
 *  On place cette bulle au dessus de l'élément
 *  Anime l'apparition de cette bulle
 * Lorsque l'on quitte le survol de l'élément
 *  On anime la disparition de l'element
 *  On supprime l'élément du DOM
 */

Tooltip.bind('a[title]');
