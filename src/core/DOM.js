class DOM {
    constructor(selector){
        // #app
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
        //this.$$listeners = {}
    }

    html(html) {
        if(typeof html === 'string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    on(eventType, callback){
        //this.$$listeners[eventType] = callback
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback){
        this.$el.removeEventListener(eventType, callback)
    }

    clear() {
        this.html('')
        return this
    }

    //element
    append(node) {

        if(node instanceof DOM){
            node = node.$el
        }
        if(Element.prototype.append){
            this.$el.append(node)
        }else{
            this.$el.appendChild(node)
        }
        return this
        /*console.log(node.$el)
        this.$el.append(node.$el)*/
    }

    get data() {
        return this.$el.dataset
    }


    closest(selector){
        return $(this.$el.closest(selector))
    }

    getCoords(){
        return this.$el.getBoundingClientRect()
    }

    findAll(selector){
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        /*for(const key in styles) {
            if(styles.hasOwnProperty(key)){
                console.log(key)
                console.log(styles[key])
            }
        }*/

        Object.keys(styles).forEach(key => {
            this.$el.style[key] = styles[key]
        })

    }
}


export function $(selector){
    return new DOM(selector)
}

$.create = (tagName, classes ='') => {
    const el = document.createElement(tagName)
    if(classes){
        el.classList.add(classes)
    }

    return $(el)
}