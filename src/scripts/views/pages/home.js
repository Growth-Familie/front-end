const Home = {
  async render() {
    return `
      <!-- Hero Section -->
      <section id="hero">
          <div>
            <div class="text-center p-5">
              <h1>Best <span class="fw-bold">Parenting</span> <br>For Your Family</h1>
              <p>Good parenting solution for children's growth</p>
              <a href="#"class="btn btn-primary">GET STARTED</a>
            </div>
        </div>
      </section>
      <!-- akhir Hero Section -->
      <!-- Carousel -->
      <div id="carouselExampleDark" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
        <h2 class="text-center">Article Of The Day</h2>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner mt-3">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./images/img5.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./images/img6.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/img7.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- akhir Carousel -->
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
