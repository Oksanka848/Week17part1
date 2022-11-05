/*1. Сделайте интерфейс преобразования ФИО на три поля (input). 
Учтите, пожалуйста, все нюансы - лишние пробелы, 
отсутствие больших букв в именах и пр. 
Результат должен получиться идеальным. 
Например, было введено пользователем *
"   Цветкова алиса АлександровНА  "*, а стало три поля: 
        Имя: *Алиса*, Фамилия: *Цветкова*, Отчество: *Александровна**/
        let button = document.getElementById('button');
        button.onclick=changeName;    
        let lastname =document.getElementById('lastname');
        let myname =document.getElementById('name');
        let midname =document.getElementById('midname');
        let fio = document.getElementById('fio');
        let sep = document.querySelector('input [name="sep"]');
        function changeName () {
            
            let fio = document.getElementById('fio').value;
            let str=fio.toLowerCase(); 
             
                let arr= str.split(" ");
                
        console.log(arr);

        if (arr) {
            lastname.value=arr[0].substring(0,1).toUpperCase() + arr[0].substring(1).toLowerCase();    
            myname.value=arr[1].substring(0,1).toUpperCase() + arr[1].substring(1).toLowerCase();
            midname.value=arr[2].substring(0,1).toUpperCase() + arr[2].substring(1).toLowerCase();
        }
    }
