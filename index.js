let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
  currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) => {
  currentLight.className = 'circle'
}





(async function() {
  try {
    await changeLight()
    await changeLight()
    await changeLight()
  } catch (err) {
    console.log(err)
  }
})();