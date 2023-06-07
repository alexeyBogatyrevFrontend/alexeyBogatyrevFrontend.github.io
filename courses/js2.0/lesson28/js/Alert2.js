class Alert2 extends Alert {
    constructor(message, myClass, out, icon) {
        super(message, myClass, out)
        this.icon = icon
    }
    showIconAlert() {
        document.querySelector(this.outElement).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i> ${this.message}</p>`
    }
    myAlert() {
        alert('message')
    }
}