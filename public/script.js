
const clickFunc = (evt, action) => {
    let container = document.getElementsByClassName('container');
    console.log(container);
    for (let i = 0; i < 4; i++){
        container[i].style.opacity = '0';
        container[i].style.zIndex = '1';
    }

    let specificContainer = document.getElementsByClassName(action);
    specificContainer[0].style.opacity = '1';
    specificContainer[0].style.zIndex = '100';
} 