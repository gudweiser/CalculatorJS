window.onload = function () {

    function count() {

        let num1 = parseFloat(document.getElementById("firstValue").value);
        let num2 = parseFloat(document.getElementById("secondValue").value);
        let select = document.getElementById("select").value;
        let result = document.getElementById("answer");

        console.log("Action: " + select);

        switch (select) {
            case 'sum':
                result.innerText = (num1 + num2);
                break;
            case 'sub':
                result.innerText = (num1 - num2);
                break;
            case 'multi' :
                result.innerText = (num1 * num2);
                break;
            case 'div':
                result.innerText = (num1 / num2);
                break;
            default:
                console.log("Sorry, wrong option")

        }

    }

    let action = document.getElementById("btn")
    action.addEventListener('click', count);



}



