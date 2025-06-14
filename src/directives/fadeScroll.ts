export default {
  mounted(el: HTMLElement) {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-8')
          el.classList.add('opacity-100', 'translate-y-0')
        }
      },
      {
        threshold: 0.3,
      },
    )

    observer.observe(el)
  },
}
