
const clickFunc = (evt, action) => {
    let container = document.getElementsByClassName('container');
    
    for (let i = 0; i < 4; i++) {
        container[i].style.opacity = '0';
        container[i].style.zIndex = '1';
    }

    let specificContainer = document.getElementsByClassName(action);
    specificContainer[0].style.opacity = '1';
    specificContainer[0].style.zIndex = '100';
}

/////////////////////////////////////////////////////////////////////////



const findFunc = (e) => {
    // e.preventDefault();
    let findInputs = document.getElementsByClassName('findInput');
    let findForm = document.getElementsByClassName('findForm');
    let findSelect = document.getElementsByClassName('findSelect');

    if (findInputs[0].value === '') {
        findForm[0].action = '/find';
    } else {
        switch (findSelect[0].selectedIndex) {
            case 0:
                findForm[0].action = '/find/id/' + findInputs[0].value;
                break;
            case 1:
                findForm[0].action = '/find/title/' + findInputs[0].value;
                break;
            case 2:
                findForm[0].action = '/find/oldPrice/' + findInputs[0].value;
                break;
            case 3:
                findForm[0].action = '/find/price/' + findInputs[0].value;
                break;
            case 4:
                findForm[0].action = '/find/image/' + findInputs[0].value;
                break;
            case 5:
                findForm[0].action = '/find/type/' + findInputs[0].value;
                break;
        }
    }
    //findForm[0].action = '/find/' + findInputs[0].value;
}

const updateFunc = (e) => {
    //e.preventDefault();
    let updateForm = document.getElementsByClassName('updateForm');
    let updateId = document.getElementsByClassName('updateId');
    updateId = updateId[0].value;

    updateForm[0].action = '/update/' + updateId;
}

const deleteFunc = (e) => {
    //e.preventDefault();
    let deleteForm = document.getElementsByClassName('deleteForm');
    let deleteId = document.getElementsByClassName('deleteId');
    deleteId = deleteId[0].value;

    deleteForm[0].action = '/delete/' + deleteId;
}