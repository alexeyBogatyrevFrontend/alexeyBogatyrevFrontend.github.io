const input = document.querySelector('#range')
const label = document.querySelector('label')

input.addEventListener('input', (e) => {
    label.textContent = e.target.value

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')

    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left =
        e.target.value * (numWidth / max) -
        numLabelWidth / 2 +
        scale(e.target.value, min, max, 10, -10)

    label.style.left = `${left}px`
})

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
