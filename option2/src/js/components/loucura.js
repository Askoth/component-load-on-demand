class Loucura {
    constructor (el) {
        var colors = ['magenta', 'cyan'],
            color = colors[0];

        setInterval(() => {
            color = color == colors[0] ? colors[1] : colors[0]
            el.style.backgroundColor = color
        }, 500)

    }
}

export default Loucura

