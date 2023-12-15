let users = [
    {id:101,name:"siddu",salary:4500},
    {id:102,name:"spyder",salary:4500},
    {id:103,name:"venom",salary:4500}]
    let rows =" "
function Read_data()
{
    for( user of users)
    {
        rows=rows+`
                    <tr>
                    <td> ${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.salary}</td>
                    </tr> `
    }
    document.getElementById('Siddardhdata').innerHTML=rows
}

