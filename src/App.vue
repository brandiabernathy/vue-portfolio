<template>
  <div id="app" :class="{'menu-open': menu_open}">
    <button class="menu-toggle" @click="toggle_menu">
      <span class="icon-bar top"></span>
      <span class="icon-bar middle"></span>
      <span class="icon-bar bottom"></span>
    </button>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <!-- <router-link to="/photography">Photography</router-link> -->
      <a href="BrandiAbernathyResume.pdf" target="_blank">Resume</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    menu_open: false,
  }),
  methods: {
    toggle_menu() {
      this.menu_open = !this.menu_open;
    },
  },
  watch: {
    $route() {
        this.menu_open = false;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manjari:wght@100;400&display=swap');

@font-face {
    font-family: 'Rooney';
    src: url('./fonts/rooney/rooney-webfont.woff2') format('woff2'),
         url('./fonts/rooney/rooney-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  background-color: #fbfbfb;
}

.menu-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  height: 45px;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 4;
  padding: 0;
  &:focus {
    outline: none;
  }
}
.icon-bar {
  display: block;
  width: 40px;
  height: 2px;
  border-radius: 1px;
  background-color: white;
  transition: all 500ms ease;
  + .icon-bar {
    margin-top: 12px;
  }
   @include breakpoint(4) {
     width: 50px;
   }
}

.menu-open {
  .menu-toggle {
    .top {
      transform: translateY(8px) rotate(45deg);
    }
    .middle {
      display: none;
    }
    .bottom {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
  nav {
    transform: translateY(0);
  }
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // box-shadow: inset -7px 0 8px -8px rgb(36 37 53 / 50%);
    transform: translateY(-100%);
    letter-spacing: 2px;
    font-family: 'Manjari';
    font-weight: 200;
    text-transform: uppercase;
    background-color: #3f4345;
    overflow: auto;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ease;
    a {
      color: white;
      // display: block;
      font-size: 40px;
      + a {
        margin-top: 30px;
      }
    }
}
</style>
