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