 export class Emitter {
    constructor() {
        this.listeners = {}
    }

    //dispatch, fire, trigger
    //Уведомляем слушателей если они есть
    // 'focus', 'make-it-work', 'formula:done'
    //table.emit('table:select', {a:1})
    emit(event, ...args){
        if(!Array.isArray(this.listeners[event])){
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })

        return true
    }

    //on, listen
    //Подписываемся на уведомление
    //Добавляем нового слушателя
    //formula.subscribe('table:select', ()=>{})
    subscribe(event, fn){
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)

        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

/*
const emitter = new Emitter()
const unsub = emitter.subscribe('Test', data => console.log('data:',data))

emitter.emit('Test', 12)*/
