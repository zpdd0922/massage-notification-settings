// 设置背景

export default {
  methods: {
    setElBg({ el = 'body', color = '#fff' }) {
      const dom = document.querySelector(el)
      dom.style.backgroundColor = color

      this.$once('hook:beforeDestroy', () => {
        dom.style = ''
      })
    }
  }
}