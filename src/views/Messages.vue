<template>
  <div class="container">
    <div class="d-flex pt-4">
      <div class="col-md-8 col-sm-5 d-flex text-secondary">
        <i class="bi bi-person-fill"></i>
        <h3>THE HIKERS CLUB MESSAGE FORUM</h3>
      </div>
      <div class="col-md-6 col-sm-5">
        <small class="text-secondary">FOR ALL SKILL LEVELS</small>
      </div>
    </div>
    <!-- end of header -->
    <nav class="navbar navbar-expand-lg bg-light navbar-light mt-3">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#toggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggle">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-2">
            <a class="nav-link text-info">Home</a>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link text-info">FORUM</a>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link text-info">BLOG</a>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link text-info">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- nav2 end -->
    <nav class="navbar navbar-expand-lg nav-info shadow bg-info mt-3">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#toggle">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="toggle">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-light">AUTHOR</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light">COMMENT</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- end -->
    <div class="container pt-3">
      <div class="row d-flex">
        <div class="col-md-4">
          <img
            width="200px"
            src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/Rivers-of-the-World-OG.jpg"
          />
          <p class="text-primary">Bill</p>
          <p class="text-secondary">April 14 2023</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-secondary">What is the best hike you have ever done before</h5>
          <p class="text-secondary">what is the best hike you ever have done before</p>
          <p class="text-secondary">what made it the best</p>
          <p class="text-secondary">How many times have you done? And will you do it again</p>
        </div>
        <div class="para">
          <a class="bg-secondary text-center text-white px-3">Quter</a>
          <a class="bg-secondary text-center text-white px-3">Reply</a>
        </div>
      </div>
      <div class="border border-20 border-grey shadow mt-3"></div>
      <!-- end -->

      <div class="row d-flex pt-5">
        <div class="col-md-4">
          <img
            width="200px"
            src="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cml2ZXJ8ZW58MHx8MHx8&w=1000&q=80"
          />
          <p class="text-primary">Bill</p>
          <p class="text-secondary">April 14 2023</p>
        </div>
        <div class="col-md-4">
          <h5>What is the best hike you have ever done before</h5>
          <p>what is the best hike you ever have done before</p>
          <p>what made it the best</p>
          <p>How many times have you done? And will you do it again</p>
        </div>
        <div class="para">
          <a class="bg-secondary text-center text-white px-3">Quter</a>
          <a class="bg-secondary text-center text-white px-3">Reply</a>
        </div>
      </div>
      <div class="border border-20 border-grey shadow mt-3"></div>
      <div class="row d-flex pt-5">
        <div class="col-md-4">
          <img
            width="200px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdRjuWVAHU_Pj91Sedf0Pw1DzG28SNaEPYw&usqp=CAU"
          />
          <p class="text-primary">Sarah</p>
          <p class="text-secondary">April 14 2023</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-secondary">Re:What is the best hike you have ever done before</h5>
          <p
            class="text-secondary"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis aut, quam quaerat magni incidunt</p>
        </div>
        <div class="para">
          <a class="bg-secondary text-center text-white px-3">Quter</a>
          <a class="bg-secondary text-center text-white px-3">Reply</a>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.para {
  display: flex;
  gap: 10px;
  height: 25px;
  margin-left: 3rem;
  border-radius: 10px;
}

.para p {
  border-radius: 10px;
}
</style>