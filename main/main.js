window.onload = function () {

    function sum() {
        let input1 = document.getElementById("firstValue");
        let input2 = document.getElementById("secondValue");
        let select = document.getElementById("select");
        let action = select.options[select.selectedIndex].text;
        console.log("Action: " + action);
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);

        switch (action) {
            case 'Addition':
                sum(num1, num2);
                break;
            case 'Subtraction':
                subtraction(num1, num2);
                break;
            case 'Multiplcation' :
                multiplication(num1, num2);
                break;
            case 'Division':
                division(num1, num2);
                break;

        }


        function sum(num1, num2) {
            const result = num1 + num2
            return result;
        }

        function subtraction(num1, num2) {
            let result = num1 - num2;
            return num1 - num2;
        }

        function multiplication(num1, num2) {
            let result = num1 * num2;
            return result;
        }

        function division(num1, num2) {
            let result = num1 / num2;
            return result;
        }

        console.log("Wartość sumy: " + result, typeof num1);

        document.getElementById("answer").innerHTML = result;
    }

    let action = document.getElementById("btn")
    action.addEventListener('click', sum);


}



