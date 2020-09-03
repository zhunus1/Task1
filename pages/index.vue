<template>
  <div class="kontainer">
    <section class="top">
      <div class="follow">
        <div class="social">
          <p>Follow us</p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8 1.90735e-05H14.2C17.4032 1.90735e-05 20 2.59677 20 5.80002V14.2C20 17.4033 17.4032 20 14.2 20H5.8C2.59675 20 0 17.4033 0 14.2V5.80002C0 2.59677 2.59675 1.90735e-05 5.8 1.90735e-05ZM5.6 2C3.61177 2 2 3.61178 2 5.6V14.4C2 16.3882 3.61177 18 5.6 18H14.4C16.3882 18 18 16.3882 18 14.4V5.6C18 3.61178 16.3882 2 14.4 2H5.6ZM15.25 3.5C15.9404 3.5 16.5 4.05965 16.5 4.75C16.5 5.44036 15.9404 6 15.25 6C14.5596 6 14 5.44036 14 4.75C14 4.05965 14.5596 3.5 15.25 3.5ZM10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23857 15 5 12.7614 5 10C5 7.23858 7.23857 5 10 5ZM10 7C8.3431 7 7 8.3432 7 10C7 11.6569 8.3431 13 10 13C11.6569 13 13 11.6569 13 10C13 8.3432 11.6569 7 10 7Z" fill="white"/>
          </svg>
          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4592 2.01238C20.6896 2.35373 19.8624 2.58442 18.9944 2.68815C19.8803 2.15701 20.5609 1.31598 20.8813 0.31378C20.052 0.80564 19.1336 1.16278 18.156 1.3552C17.3732 0.52112 16.2579 0 15.0235 0C12.6534 0 10.7317 1.92147 10.7317 4.29155C10.7317 4.6279 10.7697 4.95546 10.8429 5.2696C7.27609 5.0906 4.11375 3.38203 1.99709 0.78551C1.62765 1.41935 1.41601 2.15656 1.41601 2.94309C1.41601 4.43204 2.17364 5.74563 3.32523 6.5153C2.62179 6.4929 1.95996 6.2999 1.38139 5.97846C1.38098 5.99639 1.38098 6.0143 1.38098 6.0324C1.38098 8.1118 2.86033 9.8463 4.82359 10.2406C4.46349 10.3387 4.08434 10.3912 3.69294 10.3912C3.4164 10.3912 3.14755 10.3642 2.88546 10.3142C3.43161 12.0191 5.01653 13.26 6.89454 13.2945C5.42576 14.4457 3.57527 15.1318 1.56453 15.1318C1.21812 15.1318 0.876511 15.1114 0.540771 15.0717C2.44003 16.2894 4.69591 17 7.1195 17C15.0134 17 19.3302 10.4605 19.3302 4.78918C19.3302 4.60314 19.326 4.41805 19.3177 4.23395C20.1563 3.62886 20.8839 2.87302 21.4592 2.01238Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="text">
        <div class="guide">
          <div class="title">
            <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="2" fill="#FBD784"/>
            </svg>
            <p id="hiking">A Hiking guide</p>
          </div>
          <p id="text">Be prepared for the Mountains and beyond!</p>
          <div class="arrow">
            <p>scroll down</p>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="slider">
          <div class="number">
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
          </div>
          <div class="lines">
            <svg width="3" height="240" viewBox="0 0 3 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" width="3" height="240" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="middle">
      <div v-for='(post, index) in posts' :key='index' class="section">
        <template v-if='index % 2 == 0'>
          <div class="column1">
            <div class="">

            <p id="counter">{{ count(index) }}</p>
            <div class="started">
              <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="2" fill="#FBD784"/>
              </svg>
              <p>{{ post.preview }}</p>
            </div>
            <p id="title">{{ post.title }}</p>
            <p>{{ post.description }}</p>
            <div class="more">
              <p>read more</p>
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
              </svg>
            </div>

          </div>
          </div>
          <div class="column2">
            <img :src="post.image" alt="" width="566px" height="720px">
          </div>
        </template>
        <template v-else>
          <div class="column2">
            <img :src="post.image" alt="" width="566px" height="720px">
          </div>
          <div class="column1">
            <div class="">

            <p id="counter">{{ count(index) }}</p>
            <div class="started">
              <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="2" fill="#FBD784"/>
              </svg>
              <p>{{ post.preview }}</p>
            </div>
            <p id="title">{{ post.title }}</p>
            <p>{{ post.description }}</p>
            <div class="more">
              <p>read more</p>
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
              </svg>
            </div>
          </div>

        </div>
        </template>
      </div>

    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  mounted() {
    this.$store.dispatch('post/setPosts')
  },
  computed: {
    posts() {
      return this.$store.getters['post/getPosts']
    }
  },
  methods:{
    count(index){
      if(index<10){
        return '0'+(index+1);
      }else{
        return index+1;
      }
    },
  },
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.kontainer {
  padding: 0px;
  margin: 0px 80px;
  .middle{
    margin-top: 600px;
    #counter{
      font-family: Gilroy;
      font-style: normal;
      font-weight: bold;
      font-size: 240px;
      line-height: 240px;
      color: #FFFFFF;
      opacity: 0.1;
      position: relative;
      z-index: 0;
      left: -13%;
      bottom:-120px;
    }
  }
  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 200px;
    .follow {
      display: flex;
      align-items: center;
      .social{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        height: 150px;
        p{
        font-family: Gilroy;
        white-space: nowrap;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        transform: rotate(90deg);
        }
      }
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .guide{
        padding: 0px 220px 0px 340px;
        .title{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 32px;
        }
        #hiking{
          font-family: Gilroy;
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #FBD784;
          margin: 0px 0px 0px 32px;
        }
        #text{
          font-family: Chronicle Display;
          font-style: normal;
          font-weight: 600;
          font-size: 88px;
          line-height: 100px;
          text-transform: capitalize;
          color: #FFFFFF;
          align-self: center;
          margin: 0px;
        }
        .arrow{
          margin-top: 32px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          p{
            font-family: Gilroy;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            color: #FFFFFF;
            margin-right: 16px;
          }
        }

      }
    }
    .pagination{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .slider{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:row;
        .number{
          margin-right: 32px;
          p{
            font-family: Gilroy;
            font-size: 18px;
            line-height: 22px;
            text-align: right;
            color: #FFFFFF;
            margin-bottom: 40px;
          }
        }
        .lines{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .section{
    padding: 149px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .column1{
      padding:90px 0px 0px 140px;
      margin-right: 114px;
      #title{
        font-family: Chronicle Display;
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 77px;
        color: #FFFFFF;
      }
      p{
        margin:0px 0px 27px 0px;
        font-family: Gilroy;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
      }
      .started{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-bottom: 27px;
        p{
          font-family: Gilroy;
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #FBD784;
          margin:0px 0px 0px 24px;
        }
      }
      .more{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        p{
          margin: 0px 16px 0px 0px;
          font-family: Gilroy;
          font-size: 18px;
          line-height: 22px;
          color: #FBD784;
        }
      }
    }
  }
}

</style>
