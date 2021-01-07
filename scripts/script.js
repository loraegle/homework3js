
 
    const inputMin = document.getElementById("minInput");
    const inputMax = document.getElementById("maxInput");
    const main = document.getElementById("container");
    const btnOne = document.getElementById("btnOne");
    const btnTwo = document.getElementById("btnTwo");


    inputMin.value = 1;
    inputMax.value = 100;

const create = function () {            
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    

    for (let i = 1; i <= 100; i++) {     

        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);    

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");   

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();
 


    inputMin.onkeyup = function (e) {
        this.value = inputMin.value.replace(/^(0*)/, "");
        if (inputMin.value >= 1 && inputMin.value <= 100) {
            this.value = inputMin.value;
        } else if (inputMin.value.length === 0) {
            inputMin.value = null;
        } else {
            inputMin.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
    


    inputMax.onkeyup = function (e) {
        this.value = inputMax.value.replace(/^(0*)/, "");
        if (inputMax.value >= 1 && inputMax.value <= 100) {
            this.value = inputMax.value;
        } else if (inputMax.value.length === 0) {
            inputMax.value = null;
            
        } else {
            inputMax.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };



    btnOne.onclick = function() {
        inputMin.value = "";
        inputMax.value = "";
        create();
    };
    
    btnTwo.onclick = function() {
        inputMin.value = 1;
        inputMax.value = 100;
        create();
    };





    $(document).ready(function(){ $("#btnThree").click(function(){ 
        $(".num, .buz, .fizbuz").toggle();
      });
    });

    $(document).ready(function(){ $("#btnFour").click(function(){ 
        $(".num, .fiz, .fizbuz").toggle();
      });
    });

    $(document).ready(function(){ $("#btnFive").click(function(){ 
        $(".num, .buz, .fiz").toggle();
      });
    });