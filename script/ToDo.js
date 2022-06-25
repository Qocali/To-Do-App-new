var liste = [];
var input = document.querySelector('.input');
var delate = document.querySelector("#bt");
var get = document.querySelector('.get');
var dark = document.querySelector('.dark-light');
var html = document.querySelector('html[data-theme =light]');
const control = document.querySelector('.control');
get.addEventListener('submit', function(e) {
    e.preventDefault();
    const { username } = get.elements;
    if (username.value === '') {
        return 0;
    }
    liste.push({ user: username.value, completed: false });
    span.textContent++;
    elave(liste)
    input.value = "";
})

function elave(liste) {
    let id = 0;
    let html = "";
    liste.forEach(element => {
        html += `<li id='li'>
            <input  id="check" ${element.completed? 'checked':''} class="${id}" type ="checkbox" /> ${element.user}<button id="bt" class="btn btn-danger" style="margin-left:150px;margin-top:10px">Delete</button></li>`
        id++;
    });
    group.innerHTML = html;
}

function delatelist(id) {

    liste.splice(id, 1)
    span.textContent > 0 ? span.textContent-- : span.textContent == 0;
    elave(liste)
}
const clear = (list) => {
    list.forEach(element => {
        let clearindex = liste.findIndex(x => x.user == list.user);
        liste.splice(clearindex, 1)
    });
}
group.addEventListener('click', function(e) {
    if (e.target.tagName == "BUTTON") {
        let id = Number(e.target.previousElementSibling.className);
        delatelist(id);
    }
});
group.addEventListener('change', function(e) {
    if (e.target.tagName === 'INPUT') {
        const check = e.target;
        if (check.checked) {
            check.parentElement.style.textDecoration = 'line-through';
            let index = liste.findIndex(x => x.user = (check.parentElement.childNodes[2].textContent));
            liste[index].completed = "true";
            span.textContent > 0 ? span.textContent-- : span.textContent == 0;


        } else {
            span.textContent > 0 ? span.textContent++ : span.textContent == 0;
            check.parentElement.style.textDecoration = 'none';
            let index = liste.findIndex(x => x.user = (check.parentElement.childNodes[2].textContent));
            liste[index].completed = "false";
        }
    }
});
control.addEventListener('click', (e) => {
    e.preventDefault();
    let content = e.target.textContent;
    console.log(content);
    if (e.target.tagName === 'BUTTON') {
        switch (content) {
            case "Completed":
                elave(liste.filter(x => x.completed === "true"))
                break;
            case "Active":
                elave(liste.filter(x => x.completed === "false"));
                break;
            case "Clear Completed":
                clear(liste.filter(x => x.completed === "true"))
                break;
            case "All":
                elave(liste);
                break;
        }
    }
});
dark.addEventListener('click', () => {
    let dataTheme = document.documentElement.dataset;
    if (dataTheme.theme === 'dark') {
        dataTheme.theme = 'light';
    } else {
        dataTheme.theme = 'dark';
    }

})