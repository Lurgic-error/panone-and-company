const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.enterClass)
      animatedScrollObserver.unobserve(entry.target)
    }
  })
})

const onScrollAnimation = (el, binding) => {
  el.enterClass = binding.value.enter
  el.classList.add(binding.value.before)
  animatedScrollObserver.observe(el)
}

export default onScrollAnimation

// const animatedScrollObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('enter')
//       animatedScrollObserver.unobserve(entry.target)
//     }
//   })
// })

// const onScrollAnimation = (el, binding) => {
//   el.classList.add(binding.value.before)
//   animatedScrollObserver.observe(el)
// }

// export default onScrollAnimation
