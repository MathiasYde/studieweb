Vue.component("navigationbar", {
  data: function() {
    return {
      links: [
        { title: "Afleveringer", href: "assignments.html" },
        { title: "Omkring mig", href: "about_me.html" },
        { title: "Logbog", href: "log.html" },
        { title: "Dokumentation", href: "documentation.html" }
      ]
    }
  },
  methods: {
    navigate: function (href) {
      let prefix = (window.location.host === "elev.htxroskilde.dk") ? "2020/mathiasry20/" : ""; 
      window.location.pathname = `${prefix}${href}`;
    }
  },
  template: `
    <nav class="flex flex-col sm:flex-row print:hidden p-4 justify-between border-b color-pureprimary">
      <a @click="navigate('index.html')" class="cursor-pointer font-black text-lg">Mathias Yde</a>
      <div class="flex-row">
        <a v-for="link in links" @click="navigate(link.href)" class="cursor-pointer p-2 ml-2 hover:shadow-lg transition-shadow duration-200 rounded">{{link.title}}</a>
      </div>
    </nav>   
  `
})