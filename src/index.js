const form = document.querySelector("form");
form.addEventListener("submit", (element)=> {
    const textInput = element.target.querySelectorAll("input");
    const arrayTextInput = Array.from(textInput);
    const alertText = arrayTextInput.filter((element)=> {
        if (
            element.type !== !element.name ||
            (element.type === "checkbox" && element.checked)
        ) {
            return element;
        }
    });
    const alertTextNew = alertText.reduce( (accumulator, element)=> {
        return `${accumulator} 
        ${element.name} = ${element.value}`;
    }, '');
    alert(alertTextNew);
});

const chek = document.getElementById("add");

chek.addEventListener("change",  () =>{

    if (chek.checked) {
        chek.insertAdjacentHTML(
            "afterEnd",
            '<div id="new_input"> <label>text label </label><input  id="mine" type="text" oninput="" name="new_input" ></div>'
        );
        if (document.getElementById("mine")) {
            const element = document.getElementById("mine");

            if (localStorage.getItem(`element`)) {
                element.value = localStorage.getItem(`element`);
            }

            element.oninput =  ()=>{
                localStorage.setItem(`element`, element.value);
            };
        }

    } else {
        const second = document.getElementById("new_input");
        second.remove(second.selectedIndex);
    }
});