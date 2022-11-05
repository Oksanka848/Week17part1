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
        
        function changeName () {
            
            let fio = document.getElementById('fio').value;
            let str=fio.toLowerCase();     
                let arr= str.split(" ");
                
        console.log(arr);
        if (arr) {
            lastname.value=arr[0];    
            myname.value=arr[1];
            midname.value=arr[2];
        }
    }
