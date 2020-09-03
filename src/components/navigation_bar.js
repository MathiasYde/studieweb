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
        <a href="assignments.html" class="p-2 ml-2 hover:shadow-lg transition-shadow duration-200 rounded">Afleveringer</a>
        <a href="#" class="p-2 ml-2 hover:shadow-lg transition-shadow duration-200 rounded">Omkring mig haha</a>
        <a href="#" class="p-2 ml-2 hover:shadow-lg transition-shadow duration-200 rounded">Logbog</a>
      </div>
    </nav>   
  `
})