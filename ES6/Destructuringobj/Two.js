let product = {
    p_Id:1,
    p_Ime:12345678765,
    details:{
        p_Name:"Ihone12",
    colour:{
        p_Color : ['w','r','g','y']
    }
    }
}
let {details} = product
let {colour} = details
console.log(colour)