class Dog {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name + "だワン！"
    }
}
window.onload = () => {
    let elem = document.createElement("div")
    pochi = new Dog("ポチ")
    elem.innerText = pochi.name
    document.body.appendChild(elem)
}