Vue.component("navigationbar", {
  data: function() {
    return {
      links: [
        { title: "Afleveringer", href: "assignments.html" },
        { title: "Omkring mig", href: "#" },
        { title: "Logbog", href: "#" }
      ]
    }
  },
  template: `
    <nav class="flex p-4 justify-between border-b color-pureprimary">
      <a href="index.html">Mathias Yde</a>
      <div>
        <a v-for="link in links" :href="link.href" class="p-2 ml-2 hover:shadow-lg transition-shadow duration-200 rounded">{{link.title}}</a>
      </div>
    </nav>   
  `
})