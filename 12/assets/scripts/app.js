class dragAndDrop {
    constructor() {
        this.dragged = document.querySelectorAll('.card');
    }

    hoba() {
        this.dragStart();
        this.dragEnd();
        this.dragOver();
        this.dragEnter();
        this.dragLeave();
        this.dragDrop();
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
            if (event.target.tagName == "UL") {
                event.target.style.background = "green";
            }
        }, false);
    }

    dragLeave() {
        document.addEventListener("dragleave", function( event ) {
            if (event.target.tagName == "UL") {
                event.target.style.background = "";
            }
        }, false);
    }

    dragDrop() {
        document.addEventListener("drop", function( event ) {
            event.preventDefault();
            if (event.target.tagName == "UL") {
                event.target.style.background = "";
                this.dragged.parentNode.removeChild(this.dragged);
                event.target.appendChild(this.dragged);
            }
        }, false);
    }
}

let us = new dragAndDrop();
us.hoba();