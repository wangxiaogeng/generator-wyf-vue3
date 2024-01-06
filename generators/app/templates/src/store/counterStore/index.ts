import {defineStore} from 'pinia'
interface stateType{
    counter:number
}
export const counterStore = defineStore<string,stateType,{},{add:()=>void,addCounter:Function}>('counter',{
    state:()=>{
        return {
            counter:0
        }
       
    },
    actions:{
        add(){
            this.counter++
        },
        addCounter(state:number){
            this.counter+=state
        }
      

    },
    getters:{
        
    }
    
})