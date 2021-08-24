class dragAndDrop {
    constructor() {
        this.dragged = document.querySelectorAll('.card');
    }

    dragStart() {
        document.addEventListener("dragstart", function( event ) {
            this.dragged = event.target;
            event.target.style.opacity = .5;
        }, false);
    }

    dragEnd() {
        document.addEventListener("dragend", function( event ) {
            event.target.style.opacity = "";
        }, false);
    }

    dragOver() {
        document.addEventListener("dragover", function( event ) {
            event.preventDefault();
        }, false);
    }

    dragEnter() {
        document.addEventListener("dragenter", function( event ) {
            if (event.target.tagName === "UL") {
                event.target.style.background = "green";
            }
        }, false);
    }

    dragLeave() {
        document.addEventListener("dragleave", function( event ) {
            if (event.target.tagName === "UL") {
                event.target.style.background = "";
            }
        }, false);
    }

    dragDrop() {
        document.addEventListener("drop", function( event ) {
            event.preventDefault();
            if (event.target.tagName === "UL") {
                event.target.style.background = "";
                this.dragged.parentNode.removeChild(this.dragged);
                event.target.appendChild(this.dragged);
            }
        }, false);
    }
}

class allMethods extends dragAndDrop {

    hoba() {
        this.dragStart();
        this.dragEnd();
        this.dragOver();
        this.dragEnter();
        this.dragLeave();
        this.dragDrop();
    }
}

class toDoButton {
    constructor() {
        this.active = document.querySelector("#active-projects ul");
        this.finished = document.querySelector("#finished-projects ul");
        this.changeButton = document.querySelectorAll('button');
    }

    clickFinish(e) {
        if (e.target.closest("section").id === "active-projects") {
            e.target.innerText = 'Activate';
            this.finished.append(e.target.parentNode);
        }
    }

    clickActivate(e) {
        if (e.target.closest("section").id === "finished-projects") {
            e.target.innerText = 'Finish';
            this.active.append(e.target.parentNode);
        }
    }
}

class clickButton extends toDoButton {

    hobochki() {
        let button = this;
        this.changeButton.forEach(function (e) {
            e.onclick = function (e) {
                if (e.target.closest("section").id === "active-projects") {
                    button.clickFinish(e);
                } else if (e.target.closest("section").id === "finished-projects") {
                    button.clickActivate(e);
                }
            }
        })
    }
}

let first = new allMethods();
first.hoba();

let second = new clickButton();
second.hobochki();