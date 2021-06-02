            var id1, id2, k = 0, i, otv, r=0, elems, but, inp;
            var table, tr, td, stroki = 0, val;

            function funBut(){
                id1 = document.getElementById('1');
                id2 = document.getElementById('2');;
                id2.style.visibility = "hidden";
                id1.style.visibility = "visible";

                elems = document.querySelectorAll('li');
                for (i=elems.length; i--;) {
                    elems[i].addEventListener('click', fn, false);
                }
            }

            function fn() {
                if ( this.getAttribute('name') == 'right' ) {
                    k ++; 
                }
                id1.style.visibility = "hidden";
                id2.style.visibility = "visible";
                r ++;
                if (r == 2 ){
                    fff();
                }
            }

            function fff(){

                    id2.style.visibility = "hidden";
                    otv = document.createElement('div');
                    document.body.appendChild(otv);
                    otv.classList.add("otvet");
                    otv.innerHTML = '<p> правильных ответов: '+ k +'</p>';

                    but = document.createElement('button');
                    document.body.appendChild(but);
                    but.innerHTML = "нажми меня";
                    but.addEventListener('click', fnk, false);
                }

                function fnk() {
                    otv.style.visibility = "hidden";
                    but.parentNode.removeChild(but);
                    inp = document.createElement('input');
                    document.body.appendChild(inp);
                    inp.placeholder = "имя";
                    inp.id = "inp"

                    but = document.createElement('button');
                        document.body.appendChild(but);
                        but.innerHTML = "подтвердить имя";
                        but.style.marginLeft = 10 + "px";
                    but.addEventListener("click", funTable, false);

                    if (stroki != 0) {
                        table.style.visibility = "visible";
                    }
                }
                        
                
            
            function funTable(){

                if (stroki === 0){
                    table = document.createElement('table');
                    document.body.appendChild(table);
                    table.style.visibility = "visible";
                    tr = document.createElement('tr');
                    for (j = 1; j < 3; j++) {
                        let td = document.createElement('td');
                        if (j === 1){
                            val = document.getElementById('inp').value;
                            td.innerHTML = val;
                        } else {
                            td.innerHTML = k;
                  //          td.style.width = 25 + "%";
                        }
                        tr.appendChild(td);
                     }
                 table.appendChild(tr); 
                }else{
                    console.log(table);
                    tr = document.createElement('tr');
                    for (j = 1; j < 3; j++) {
                        let td = document.createElement('td');
                        if (j === 1){
                            val = document.getElementById('inp').value;
                            td.innerHTML = val;
                        } else {
                            td.innerHTML = k;
                  //          td.style.width = 25 + "%";
                        }
                        tr.appendChild(td);
                     }
                 table.appendChild(tr);
                }
                console.log(table);

                but.parentNode.removeChild(but);
                inp.parentNode.removeChild(inp);
             //   table.style.visibility = "hidden";
                stroki ++;
                k = 0;
                r = 0;
                but = document.createElement('button');
                document.body.appendChild(but);
                but.innerHTML = "пройти тест еще раз";  
                but.addEventListener("click", funNach, false);
            }  

            function funNach(){
                table.style.visibility = "hidden";
                id1.style.visibility = "visible";
                but.parentNode.removeChild(but);

                elems = document.querySelectorAll('li');
                for (i=elems.length; i--;) {
                    elems[i].addEventListener('click', fn, false);
                    
                }
            }