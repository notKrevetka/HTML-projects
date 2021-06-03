            var id1, id2, k = 0, i, otv, r=0, elems, but, inp;
            var table, tr, td, stroki = 0, val;
            var lie, liex;
            var right = document.getElementsByName('right');
            //wrong[0].onmouseover= function(){
                //wrong[0].style.background ="red";
            //}
            var wrong=document.getElementsByName('wrong');
            

            function funBut(){
                id1 = document.getElementById('1');
                id2 = document.getElementById('2');;
                id2.style.visibility = "hidden";
                id1.style.visibility = "visible";
                fnLie();

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
                    //еще тут нужно проверять было ли имя введено ранее
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
                        }
                        tr.appendChild(td);
                     }
                 table.appendChild(tr);
                }
                console.log(table);

                but.parentNode.removeChild(but);
                inp.parentNode.removeChild(inp);
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
                lieX.parentNode.removeChild(lieX);
                fnLie();


                elems = document.querySelectorAll('li');
                for (i=elems.length; i--;) {
                    elems[i].addEventListener('click', fn, false);
                    
                }
            }

            function fnLie(){
                lie = document.createElement('div');
                    document.body.appendChild(lie);
                    lie.classList.add("lier");
                
                    //lie.style.top = getTop() + 'px';
                    lie.style.left = getPos() + '%';
                    lie.style.width = getSize() + 'px';
                    lie.style.height = getSize() + 'px';
                lie.addEventListener('click', fnLi, false);
                
            }
            
            getPos = () => parseInt(Math.random() * 100 + 1 );
            getSize = () => parseInt(Math.random() * 150 + 50);
            getTop = () => parseInt(Math.random() * 900 + 200);

            function fnLi(){
                liex = document.createElement('div');
                document.body.appendChild(liex);
                liex.innerHTML= '<input type = "checkbox" id="chb">жулик</input>';
                liex.classList.add("xlier");
                lie.parentNode.removeChild(lie);
                liex.addEventListener('change', funLiCh, false);
            }
           function funLiCh(){
                //if (document.getElementById('chb').checked){
           // wrong=document.getElementsByName('wrong');
            for (var z=0; z < wrong.length; z++){
                wrong[z].addEventListener('mouseover', red_hover, false);
                wrong[z].addEventListener('mouseout', basic, false);
            }
       }
   // }
            function basic(){
                if (document.getElementById('chb').checked){
                this.style.background="";
            }
        }
                //wrong.addEventListener('mouseover', red_hover, false);
            function red_hover(){
                if (document.getElementById('chb').checked){
                console.log("red");
                console.log(this);
                this.style.background="red";
                if (document.getElementById('chb').checked) {
                    console.log("checked");
                    //wrong[0].style.background="red";
                    }
                }
            }
            