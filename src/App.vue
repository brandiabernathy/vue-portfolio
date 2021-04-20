<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
    font-family: 'Rooney';
    src: url('./fonts/rooney/rooney-webfont.woff2') format('woff2'),
         url('./fonts/rooney/rooney-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Nexa';
    src: url('./fonts/nexa/nexaregular-webfont.woff2') format('woff2'),
         url('./fonts/nexa/nexaregular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Nexa';
    src: url('./fonts/nexa/nexathin-webfont.woff2') format('woff2'),
         url('./fonts/nexa/nexathin-webfont.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Nexa';
    src: url('./fonts/nexa/nexa-bold-webfont.woff2') format('woff2'),
         url('./fonts/nexa/nexa-bold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
</style>
