let employees=[{'id':101,'ename':'siddu','sal':45000},
                {'id':102,'ename':'wasid','sal':5500}]
let create_Employee=(emp,callback)=>{
    setTimeout(()=>{
         employees.push(emp)
         callback()
    },4000)
}
let display_Employees=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows = rows+`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.sal}</td>
                            </tr>`

        }
        document.getElementById('tbody_Data').innerHTML=rows
    },1000)
}    



create_Employee=({'id':103,'ename':'amar','sal':55000},display_Employees)