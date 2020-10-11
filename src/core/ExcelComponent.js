import {DOMListener} from "@core/DOMListener";

export class ExcelComponent extends DOMListener {

    constructor($root, options = {}) {
        super($root,options.listeners);
        this.name = options.name || ''
        this.emitter = options.emitter

        this.unsubscribers = []

        console.log(options)
        this.prepare()
    }

    //until init
    prepare(){

    }

    //Return view components
    toHTML() {
        return ''
    }

    //Notification listener
    $emit(event, ...args){
        this.emitter.emit(event, ...args)
    }

    //subscribe
    $on(event, fn){
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }



    //initial component
    init(){
        this.initDOMListeners()
    }

    //clear components
    destroy(){
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }

}