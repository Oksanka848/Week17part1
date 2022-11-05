/*1. Сделайте интерфейс преобразования ФИО на три поля (input). 
Учтите, пожалуйста, все нюансы - лишние пробелы, 
отсутствие больших букв в именах и пр. 
Результат должен получиться идеальным. 
Например, было введено пользователем *
"   Цветкова алиса АлександровНА  "*, а стало три поля: 
        Имя: *Алиса*, Фамилия: *Цветкова*, Отчество: *Александровна**/
        let button = document.getElementById('button');
        button.onclick=changeName;    
        
        let fio = document.getElementById('fio');
        
        function changeName () {
            
            let fio = document.getElementById('fio').value;
            let str=fio.toLowerCase();     
                let arr= str.split(" ");
                
        console.log(arr);
        if (arr) {
        document.getElementById('lastname').value=arr[0];    
        document.getElementById('name').value=arr[1];
        document.getElementById('midname').value=arr[2];
        }
    }
