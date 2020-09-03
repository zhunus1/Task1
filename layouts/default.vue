<template>
  <div class="main">
    <div class="temno">
      <Header/>
      <nuxt/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style lang='scss' scoped>
.main{
  background: url('~@/static/HG.png'),url('~@/static/MG.png'),url('~@/static/VG.png');
  background-position: top center,top 830px center,center bottom 1574px; /* this positions the second image */
  background-repeat:no-repeat; /* this applies to both images */
  .temno{
    background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%),linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);;
  }
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
