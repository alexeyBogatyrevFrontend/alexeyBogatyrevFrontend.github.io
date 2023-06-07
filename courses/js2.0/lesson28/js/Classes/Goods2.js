class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sale) {
        super(name, amount, image, count, out)
        this.sale = sale
    }
    draw() {
        if (this.sale === true) {
            this.sale = 'Распродажа'
        } else {
            this.sale = 'Распродаж нет'
        }
        document.querySelector(this.out).innerHTML = `
            <div class="imgWrap">
                <img src="${this.image}" alt="picture">            
            </div>
            <div>${this.name}</div>
            <div>${this.amount} - ${this.sale}</div>
        `
    }
}