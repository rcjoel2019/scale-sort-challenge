const axios = require('axios')
axios.get('https://amock.io/api/fcmaia/countries').then(res=>{
    const data = res.data;
    let sorted = data.joelSort()
    
    console.log(sorted);
})

Array.prototype.joelSort = function(){
    let isSorted = true
    do{
        isSorted = true
        for(let index in this){
            index = parseInt(index)
            if(index<this.length-1){
                if(this[index+1].fronteiras.length > this[index].fronteiras.length){
                    isSorted = false
                    let aux = this[index+1]
                    this[index+1] = this[index]
                    this[index] = aux
                }
            }
        }
    }while(isSorted == false)
    return this
}