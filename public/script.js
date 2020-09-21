
const clickFunc = (evt, action) => {
    let container = document.getElementsByClassName('container');
    for (let i = 0; i < 4; i++){
        container[i].style.opacity = '0';
    }

    let specificContainer = document.getElementsByClassName(action);
    specificContainer[0].style.opacity = '1';
} 