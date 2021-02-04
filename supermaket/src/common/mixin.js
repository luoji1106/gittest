import ScrollTo from 'components/content/scrollto/ScrollTo'

export const scrollTo = {
  data () {
    return {
      toTopIsShow: false
    }
  },
  components: {
    ScrollTo
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollToTop(0, 0);
    }
  }
}