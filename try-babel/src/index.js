class Dog {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this.name + "だワン！"
    }
}
window.onload = () => {
    let elem = document.createElement("div")
    pochi = new Dog("ポチ")
    elem.innerText = pochi.name
    document.body.appendChild(elem)
}