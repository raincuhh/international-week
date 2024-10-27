<?php
require "../../src/lib/utils.php";
$sql_connection = get_sql_connection();

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  include "./include/metadata.php";
  include "../shared/include/preconnect_fonts.php";
  include "../shared/include/favicons.php";
  include "../shared/include/preload.php";
  ?>

  <title>Il Sapore dell'Italia | Home</title>

  <link rel="stylesheet" href="./home.css">
  <script defer src="../../out/pages/home/home.bundle.js"></script>
</head>

<body>
  <nav id="category_nav">
    <div class="nav_container">
      <div class="nav_cont">
        <div class="nav_in_cont" id="in_cont_nav">
          <nav class="nav">
            <div class="nav_header">
              <a href="./home.php" target="_blank" rel="noopener noreferrer">
                <p>Il Sapore dell'Italia</p>
              </a>
              <a onclick="window.scrollTo(0,0)" target="_blank" rel="noopener noreferrer">
                <p>/ home</p>
              </a>
            </div>
            <aside class="nav_aside">
              <a href="" target="_blank" rel="noopener noreferrer">
                login
              </a>
            </aside>
          </nav>
        </div>
      </div>
    </div>
  </nav>
  <main class="page" id="root">
    <div class="page_scroll">
      <section class="category" id="category_hero">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_hero">
              <section class="hero">
                <div class="hero_container">
                  <div class="hero_title">
                    <p>/</p>
                    <p>We are</p>
                  </div>
                  <div class="hero_title_list">
                    <div class="hero_title_list_inner">
                      <p class="h1">an italian restaurant.</p>
                      <p class="h1">an inviting escape.</p>
                      <p class="h1">passionate.</p>
                      <p class="h1">a taste of italy.</p>
                      <p class="h1">dedicated to quality.</p>
                      <p class="h1">crafted with care.</p>
                      <p class="h1">pure indulgence.</p>
                      <p class="h1">a culinary journey.</p>
                      <p class="h1">a taste of home.</p>
                      <p class="h1"><span>il Sapore dell'Italia.</span></p>
                      <p class="h1">a place to gather.</p>
                      <p class="h1">art in every meal.</p>
                      <p class="h1">crafted for joy.</p>
                      <p class="h1">for food lovers.</p>
                      <p class="h1">authentic flavours.</p>
                      <p class="h1">always welcoming.</p>
                      <p class="h1">bringing italy to you.</p>
                      <p class="h1">traditional.</p>
                      <p class="h1">pure italian.</p>
                      <p class="h1"><span>il Sapore dell'Italia.</span></p>
                      <p class="h1">your local gem.</p>
                      <p class="h1">simple and fresh.</p>
                      <p class="h1">a world of flavor.</p>
                      <p class="h1">an inviting atmosphere.</p>
                      <p class="h1">for every palate.</p>
                      <p class="h1">exquisite pairings.</p>
                      <p class="h1">flavorful experiences.</p>
                      <p class="h1">made for sharing.</p>
                      <p class="h1">celebrating every bite.</p>
                      <p class="h1"><span>il Sapore dell'Italia.</span></p>
                    </div>
                  </div>
                  <div class="hero_fading_panel">
                    <div class="top_fade"></div>
                    <div class="bottom_fade"></div>
                  </div>
                  <div class="hero_arrow_tip">
                    <i class="bx bx-down-arrow-alt"></i>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section class="category" id="category_short_about">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_short_about">
              <section class="short_about">
                <p>
                  Welcome to Il Sapore dell'Italia,
                  where every meal is a celebration of authentic
                  Italian flavors crafted with passion.
                  Join us as we take you on a culinary journey
                  filled with tradition, inviting you to savor the
                  essence of Italy in each dish.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section class="category" id="category_recommended_list">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_recommended_list">
              <article class="recommended_list"></article>
              recommended list placeholder
            </div>
          </div>
        </div>
      </section>
      <section class="category" id="category_long_about">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_long_about">
              <section class="long_about">long about placeholder</section>
            </div>
          </div>
        </div>
      </section>
      <section class="category" id="category_location_contact">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_location_contact">
              <section class="location_contact">location contact placeholder</section>
            </div>
          </div>
        </div>
      </section>
      <section class="category" id="category_footer">
        <div class="container">
          <div class="cont">
            <div class="in_cont" id="in_cont_footer">
              <footer class="footer">footer placeholder</footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  </div>
  <div id="load" style="pointer-events: all">
    <div id="load_bg"></div>
    <div id="load_t"></div>
  </div>
  <noscript>
    <div id="n_script_c">
      <div id="n_script_h">Please enable JavaScript to view this website.</div>
    </div>
  </noscript>
  <script nomodule>
    let d = document,
      cont = d.createElement("div"),
      header = d.createElement("div");
    cont.id = "n_script_c";
    header.id = "n_script_h";
    header.textContent = "Please enable JavaScript to view this website.";
    cont.appendChild(header);
    d.body.appendChild(cont);
  </script>
</body>

</html>
