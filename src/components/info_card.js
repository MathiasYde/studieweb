Vue.component("infocard", {
  methods: {
    onclick: function () {
      console.log(this.$refs);
    }
  },
  template: `
    <div ref="root" class="rounded bg-white">
      <button @click="onclick">click</button>
      {{this.$refs.children}}
    </div>
  `
});