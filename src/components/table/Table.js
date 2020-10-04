import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";

import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root){
        super($root, {
            listeners:['mousedown']
        })
    }
    toHTML(){
        return createTable(20)
    }


    onMousedown(event){
        //console.log('asd',event.target.getAttribute('data-resize'))
        //console.log(event.target.dataset.resize)
        if(shouldResize(event)){
            resizeHandler(this.$root, event)
        }
    }

}

// 87 msScripting
// 858 msRendering