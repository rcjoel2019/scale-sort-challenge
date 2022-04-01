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
            if(index>0){
                if(this[index-1].fronteiras.length > this[index].fronteiras.length){
                    isSorted = false
                    let aux = this[index]
                    this[index] = this[index-1]
                    this[index-1] = aux
                }
            }
        }
    }while(isSorted == false)
    return this
}