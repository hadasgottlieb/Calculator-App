let STORE = {
    numbers: [
        {
            id: cuid(),
            label: "1",
            value: 1,
        },
        {
            id: cuid(),
            label: "2",
            value: 2,
        },
        {
            id: cuid(),
            label: "3",
            value: 3,
        },
        {
            id: cuid(),
            label: "4",
            value: 4,
        },
        {
            id: cuid(),
            label: "5",
            value: 5,
        },
        {
            id: cuid(),
            label: "6",
            value: 6,
        },
        {
            id: cuid(),
            label: "7",
            value: 7,
        },
        {
            id: cuid(),
            label: "8",
            value: 8,
        },
        {
            id: cuid(),
            label: "9",
            value: 9,
        },
        {
            id: cuid(),
            label: "0",
            value: 0,
        },
    ],
    operators: [
        {
            id: cuid(),
            label: "+",
        },
        {
            id: cuid(),
            label: "-",
        },
        {
            id: cuid(),
            label: "*",
        },
        {
            id: cuid(),
            label: "/",
        },
    ],
}

function renderCalc() {
    console.log("renderCalc ran");

    STORE.numbers.forEach(function(number) {
        $(".calc-container").append(`
            <button data-item-id = "${number.id}">${number.label}</button>
        `);
    });

    STORE.operators.forEach(function(operator) {
        $(".op-container").append(`
            <button data-item-id = "${operator.id}">${operator.label}</button>
        `);
    });


}


function renderPage() {
    renderCalc();

}

$(renderPage);