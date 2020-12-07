<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      addCounter: 'increment'
    })
  },
  computed: {
    ...mapGetters({
      counterIncrement: 'getOne'
    }),
    ...mapState(['counter'])
  }
}
</script>
