class Loucura {
    constructor (el) {
        var colors = ['magenta', 'cyan', 'yellow'],
            color = 0;

        setInterval(() => {
            el.style.backgroundColor = colors[color]

            color++;

            if (color > colors.length - 1) {
                color = 0
            }
        }, 500)

    }
}

export default Loucura

