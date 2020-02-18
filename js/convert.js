function convert() {
    var squad = document.getElementsByClassName("squad")[0]
    var inputs = document.getElementsByTagName("input")
    var radius = `${inputs[0].value}px ${inputs[2].value}px ${inputs[3].value}px ${inputs[1].value}px`
   
    squad.style.borderRadius = radius
    squad.getElementsByTagName("p")[0].innerText = "border-radius: " + radius
}