function convert() {
    var squad = document.getElementsByClassName("squad")[0]
    var inputs = document.getElementsByTagName("input")

    squad.style.borderRadius =
        `
        ${inputs[0].value}px
        ${inputs[2].value}px
        ${inputs[3].value}px
        ${inputs[1].value}px
        `
}