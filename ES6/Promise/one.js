let Employees=[{id:101,name:'siddu',sal:45000}]
let create_Employees=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let flag = true;
        if(flag){
            Employees.push(emp);
            resolve("Data inserted")
        }
        else{
            reject("failed")
        }

    },4000)
})
}
let display_Employees=()=>{
    setTimeout(()=>{
        let rows=""

        for(emp of  Employees){
            rows  = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            </tr>`
        }
        document.getElementById('tbody_Data').innerHTML = rows
    },2000)


}
create_Employees({id:103,name:'amar',sal:'55000'}
.then((msg)=>{
    console.log(msg)
    display_Employees()
})
.catch((err)=>{
    console.log(err)
}))