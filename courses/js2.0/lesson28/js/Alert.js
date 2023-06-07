class Alert {
    constructor(message, myClass, out) {
        this.message = message
        this.cssClass = myClass
        this.outElement = out
    }
    showAlert() {
        document.querySelector(this.outElement).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`
    }
}