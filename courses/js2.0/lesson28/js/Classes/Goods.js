class Goods {
    constructor(name, amount, image, count, out) {
        this.name = name
        this.amount = amount
        this.image = image
        this.count = count
        this.out = out
    }
    draw() {
        document.querySelector(this.out).innerHTML = `
            <div class="imgWrap">
                <img src="${this.image}" alt="picture">            
            </div>
            <div>${this.name}</div>
            <div>${this.amount}</div>
        `
    }
}