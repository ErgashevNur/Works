const Home = () => {
  return (
    <div>
      <div className="container-header container">
        <div className="header-left-section">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button>Download Resume</button>
        </div>

        <div className="header-right-section">
          <img src="../public/boy-img.png" alt="" />
        </div>
      </div>

      <div className="first-section">
        <main className="container">
          <section className="recent-post">
            <div className="first-section-header">
              <h2>Recent posts</h2>
              <a href="">View all</a>
            </div>

            <div className="boxes">
              <div className="first-section-left">
                <h3>Making a design system from scratch</h3>

                <time class="info" datetime="2020-02-12">
                  <span class="date">12 Feb 2020 </span>
                  <span class="divider">|</span>
                  <span class="category"> Design, Pattern</span>
                </time>

                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div className="first-section-right">
                <h3>Creating pixel perfect icons in Figma</h3>

                <time class="info" datetime="2020-02-12">
                  <span class="date">12 Feb 2020 </span>
                  <span class="divider">|</span>
                  <span class="category"> Figma, Icon Design</span>
                </time>

                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="second-section container">
        <h2>Featured works</h2>

        <div class="card">
          <div class="image">
            <img src="../public/img-nd-sec.png" alt="Designing Dashboards" />
          </div>
          <div class="content">
            <h3>Designing Dashboards</h3>
            <div class="meta">
              <span class="year">2020</span>
              <span class="category">Dashboard</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr />

        <div class="card">
          <div class="image">
            <img src="../public/img-nd-sec2.png" alt="Vibrant Portraits" />
          </div>
          <div className="content">
            <h3>Vibrant Portraits of 2020</h3>
            <div class="meta">
              <span class="year">2018</span>
              <span class="category">Illustration</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr />

        <div class="card">
          <div class="image">
            <img src="../public/img-nd-sec3.png" alt="Vibrant Portraits" />
          </div>
          <div className="content">
            <h3>36 Days of Malayalam type</h3>
            <div class="meta">
              <span class="year">2018</span>
              <span class="category">Typography</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Home;
