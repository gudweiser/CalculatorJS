{
        let input1 = document.getElementById("firstValue");
        let input2 = document.getElementById("secondValue");

        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);




        window.onload = function (){
                function sum(num1, num2) {
                        console.log(num1+num2);
                }

                let action = document.getElementById("btn")
        action.addEventListener('click',  function () {
                console.log("Wartość sumy: " + num1 + num2);
        });

        }
}


