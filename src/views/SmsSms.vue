<template>
  <div class="block container-fluid">
    <div>
      <h2>SMS</h2>
      <div class="border border-20 border-gray"></div>
    </div>
    <div class="row border border-20 mt-3" id="con">
      <div class="col-md-12 d-flex flex-wrap pt-2">
        <div class="hidden col-2 col-lg-12"><i class="bi bi-list ham" @click="toggle"></i></div>
        <div class="col-12 col-lg-3 sidebar" :class="{'sideshow':menuShow, 'sidehide':!menuShow}">
          <!-- sidebar start -->
          <div class="col-md-12 d-flex">
            <div class="sidebar1 col-10 col-lg-12" >
              <button class="btn btn-primary btn-rounded btn-lg">Compose SMS</button>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-save2 h5"></i>
                <p class="text-secondary">Buy Units</p>
              </div>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-clock h5"></i>
                <p class="text-secondary">scheduled</p>
              </div>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-envelope h5"></i>
                <p class="text-secondary">Draft</p>
              </div>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-arrow-up-short h5"></i>
                <p class="text-secondary">Sent</p>
              </div>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-clock h5"></i>
                <p class="text-secondary">scheduled</p>
              </div>
              <div class="d-flex p-2 ml-1 m">
                <i class="bi bi-envelope h5"></i>
                <p class="text-secondary">Draft</p>
              </div>
            </div>
            <div class="border border-20 borsidebar ml-4"></div>
          </div>
          <!-- end sidebar-->
        </div>
        <div class="col-12 col-lg-9">
          <h2>Compose SMS</h2>
          <div class="border border-20 mb-4"></div>

          <div class="d-flex first">
            <p>send to:</p>
            <input
              type="text"
              placeholder="Select Destination"
              class="border border-top input ml-2"
            />
          </div>
          <div class="d-flex first">
            <p>Send:</p>
            <input
              type="text"
              placeholder="Select Destination"
              class="border border-top input ml-4 mt-4"
            />
          </div>
          <div class="d-flex pt-5 area">
            <p>Message:</p>
            <textarea name id cols="80" rows="10" class="ml-3"></textarea>
          </div>
          <div class="d-flex ml-5 mt-3">
            <input type="checkbox" class="ml-3" />
            <h5 class="ml-2">personal Massage</h5>
          </div>
          <p
            class="ml-5 mt-4"
          >Insert #name# any where you want the contact name to appear in the message. it will be replaced by the actual name of the member when sending the Message</p>
          <div class="d-flex mt-3 float-right">
            <button class="btn-primary px-5 p-2" id="btn1">Send</button>
            <button class="btn-outline-primary px-5 p-2 bg-white ml-2" id="btn2">Discard</button>
          </div>
        </div>

        <!--END-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
     data(){
        return{
           menuShow: false,
        };
     },
     methods:{
        toggle(){
            this.menuShow = !this.menuShow
        }
     }
};
</script>

<style scoped>
.m {
  gap: 10px;
  font-size: 15px;
}
.side {
  gap: 20px;
}
.btn {
  border-radius: 20px;
}
.con {
  width: 95%;
  border-radius: 30px;
}

#con {
  border-radius: 30px;
  padding: 10px;
}
#btn1 {
  border: none;
  border-radius: 20px;
}
#btn2 {
  border-radius: 20px;
}

.input {
  width: 90%;
  height: 40px;
  border-radius: 5px;
  gap: 20px;
  outline: none;
}
.area textarea {
  gap: 15px;
  outline: none;
}
.borsidebar {
  height: 100vh;
}

.hidden{
    display:none;
}

@media screen and (max-width: 990px) {
   .block{
     flex-wrap: wrap;
     width:100%
   }
   .hidden{
      display:block;
   }
   .sidehide{
    height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
   }
   .sideshow{
      overflow:hidden;
      height:22rem;
      transition:all 0.5s cubic-bezier(0.645, 0.045, 0.355,1);


   }
}
.ham{
    font-size:30px;
    float: right;
    font-weight:500;
    color:black;
}

/* .sidebar1{
    display:none;
} */
</style>