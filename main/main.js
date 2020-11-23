
window.onload = function (){

        function sum() {

                let input1 = document.getElementById("firstValue");
                let input2 = document.getElementById("secondValue");

                let num1 = parseFloat(input1.value);
                let num2 = parseFloat(input2.value);
                let nums = num1 + num2;

                console.log("Wartość sumy: " + nums, typeof num1);

                document.getElementById("answer").innerHTML = nums;
        }

        let action = document.getElementById("btn")
        action.addEventListener('click',  sum);






}



