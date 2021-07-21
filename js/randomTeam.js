let arrayNames = ["PHÚC LÁO TOÉT", "NHÂN VĂN PHÒNG", "HIỆU CHIM MỒI", "A KHÁNH ÁP-TÔ-MÁT", "QUANG PHÓ GIÁM ĐỐC", "LIỆU STORY", "HOÀNG LGBT","MIZU CHAMPION", "YẾN COM TƠ ", "THANH KHÓ CHỊU"];

var i = 0;

function randomTeam(arrayNames, i)
{
    var element2 = document.getElementById("btnClick");
    element2.classList.add("btnDisplay");

    var img_hacker = document.getElementById("bodyID");
    img_hacker.classList.remove("backGround");

    var element = document.getElementById("myDIV");
    element.classList.add("loader");
    setTimeout(() => {
        let random = Math.floor(Math.random() * arrayNames.length);
        if(i%2 ==0){
            $('#dataAppen1').append(`
                <tr class="imgTeam" >
                    <td class="team-name">
                    <img src="img/number/number${i}.png" style="margin-left:20px"/>
                    <span>${arrayNames[random]}</span>
                    </td>
                </tr>

            `);
        }else{
            $('#dataAppen2').append(`
                <tr class="imgTeam" >
                    <td class="team-name">
                    <img src="img/number/number${i}.png" alt="Đội cá mập" style="margin-left:20px"/>
                    <span>${arrayNames[random]}</span>
                    </td>
                </tr>

            `);
        }

        i++;
        arrayNames = arrayNames.filter(item => item !== arrayNames[random]);

        if(arrayNames.length == 0){
            img_hacker.classList.add("backGround");
            element.classList.remove("loader");
            element.innerHTML = 'PHẦN MỀM SỬ DỤNG TRÍ TUỆ NHÂN TẠO 2.0 - KHÔNG TIẾP NHẬN Ý KIẾN';
            element.classList.add("myload");
            return false;
        }
        return randomTeam(arrayNames,i);
    }, 2000);

}
