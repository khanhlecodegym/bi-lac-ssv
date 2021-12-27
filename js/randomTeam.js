//let arrayNames = ["PHÚC LÁO TOÉT", "NHÂN VĂN PHÒNG", "HIỆU CHIM MỒI", "A KHÁNH ÁP-TÔ-MÁT", "QUANG PHÓ GIÁM ĐỐC", "LIỆU STORY", "HOÀNG LGBT","MIZU CHAMPION", "YẾN COM TƠ ", "THANH KHÓ CHỊU"];
let arrayNames = ["TEAM PV", "ICE AGE", "LOST CONTROL", "THE PHOENIX"];

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
            element.innerHTML = 'PHẦN MỀM SỬ DỤNG TRÍ TUỆ NHÂN TẠO 3.0 - KHÔNG TIẾP NHẬN Ý KIẾN';
            element.classList.add("myload");
            getAI();
            return false;
        }
        return randomTeam(arrayNames,i);
    }, 2000);

}


function getAI(){

let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['ICE AGE', 'TEAM PV', 'THE PHOENIX', 'LOST CONTROL'],
        datasets:[{
          label:'ICE AGE',
          data:[
            617594,
            351045,
            153060,
            106519,
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'AI DỰ ĐOÁN NHÀ VÔ ĐỊCH',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}