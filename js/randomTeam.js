let arrayNames = ["PhucLT", "NhânVp", "HieuLD", "KhánhLQ", "NhânVP", "LiệuND", "HoangLB","MiZu", "Yến", "ThanhLP"];


var i = 0;


function randomTeam(arrayNames, i)
{
    var element2 = document.getElementById("btnClick");
    element2.classList.add("btnDisplay");

    var element = document.getElementById("myDIV");
    element.classList.add("loader");
    setTimeout(() => {
        let random = Math.floor(Math.random() * arrayNames.length);
        // console.log(arrayNames[random]);
        if(i%2 ==0){
            $('#dataAppen1').append(`
                <tr>
                    <td class="team-name">
                    <img src="img/number/number${i}.png" alt="Đội cá mập" />
                    <span>${arrayNames[random]}</span>
                    </td>
                </tr>

            `);
        }else{
            $('#dataAppen2').append(`
                <tr>
                    <td class="team-name">
                    <img src="img/number/number${i}.png" alt="Đội cá mập" />
                    <span>${arrayNames[random]}</span>
                    </td>
                </tr>

            `);
        }

        // document.getElementById('localA'+ i).value = arrayNames[random];
        i++;
        arrayNames = arrayNames.filter(item => item !== arrayNames[random]);

        // console.log(arrayNames);
        if(arrayNames.length == 0){
            element.classList.remove("loader");
            return false;
        }
        return randomTeam(arrayNames,i);
    }, 3000);


}
