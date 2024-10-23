<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Il Sapore dell'Italia | home" />
  <meta property="og:title" content="Il Sapore dell'Italia | Home">
  <meta property="og:description" content="Welcome to Il Sapore dell'Italia, the best Italian restaurant in town.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Il Sapore dell'Italia | Home">
  <meta name="twitter:description" content="Enjoy authentic Italian cuisine at Il Sapore dell'Italia.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/icons/favicon/favicon-16x16.png" />
  <link rel="manifest" href="../assets/icons/favicon/site.webmanifest" />
  <link rel="preload" href="../themes/fonts.css" as="style">
  <link rel="preload" href="../themes/variables.css" as="style">
  <title>Il Sapore dell'Italia | Home</title>
  <script defer>
    let date_now = new Date();
    let week_day_unfm = date_now.getDay();
    let week_day_fm = (number) => {
      switch (number) {
        case 1:
          return "Mon";
        case 2:
          return "Tue";
        case 3:
          return "Wed";
        case 4:
          return "Thu";
        case 5:
          return "Fri";
        case 6:
          return "Sat";
        case 7:
          return "Sun";
        default:
          return "Unknown";
      }
    };
    let date = date_now.getDate();
    let month = date_now.getMonth();
    let year = date_now.getFullYear();

    const formatted = week_day_fm(week_day_unfm) + " " + date + " " + month + " " + year;
    console.log("Date now: " + formatted);
  </script>

  <link rel="stylesheet" href="home.css">
  <script defer type="module" src="../../out/lib/shared.js"></script>
  <script defer type="module" src="../../out/lib/recommended_list.js"></script>
</head>

<body>
  <?php
  $sql_connection = mysqli_connect("sql7.freesqldatabase.com", "sql7739764", "NVenaCkSgl", "sql7739764");
  if ($sql_connection->connect_error) {
    echo ("Error: Something went wrong: " . $sql_connection->connect_error);
    return;
  }

  ?>
    <nav id="nav">
      <div class="container">
        <div class="cont">
          <div class="in_cont" id="in_cont_nav">
            <div class="nav_header">
              <a href="./home.php" target="_blank" rel="noopener noreferrer">
                <p>Il Sapore dell'Italia</p>
              </a>
              <a href="" onclick="window.location.reload()" target="_blank" rel="noopener noreferrer">
                <p>/ home</p>
              </a>
            </div>
            <aside class="nav_aside">
              <div class="nav_aside_item_pill">
                <a href="./booking.php" target="_blank" rel="noopener noreferrer">
                  <p>book a table</p>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </nav>
    <main class="page" id="root">
      <div class="page_scroll">
        <section class="category" id="category_intro">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_intro">
                <header class="intro_title">
                  <p>Il Sapore dell'Italia</p>
                </header>
                <div class="intro_bg">
                  <img src="../assets/images/italian_cuisine_bg_4.jpg" alt="Il Sapore dell'Italia Bg">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="category" id="category_short_about">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_short_about">
                <header class="short_about_title">
                  <p>Il Sapore dell'Italia</p>
                </header>
                <article class="short_about_desc">
                  <div>
                    <p>
                      Discover a taste of Italy at Il Sapore dell’Italia,
                      where authentic Italian cuisine meets modern culinary flair.
                      Since our founding in 2010, we've been serving up fresh,
                      flavorful dishes inspired by the rich traditions of Italy.
                      From handcrafted pastas to wood-fired pizzas, every meal is
                      prepared with the finest local ingredients and a passion for quality.
                    </p>
                    <p>
                      Whether you're in the mood for classic Italian favorites
                      or contemporary takes on traditional recipes, our restaurant
                      offers a true Italian dining experience in an unforgettable setting.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section class="category" id="category_recommended_list">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_recommended_list">
                <div class="recommended_list_grid">

                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="category" id="category_long_about">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_long_about"></div>
            </div>
          </div>
        </section>
        <section class="category" id="category_location_contact">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_location_contact"></div>
            </div>
          </div>
        </section>
        <section class="category" id="category_footer">
          <div class="container">
            <div class="cont">
              <div class="in_cont" id="in_cont_footer"></div>
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
    "
    <div id="n_script_c">
      <div id="n_script_h">Please enable JavaScript to view this website.</div>
    </div>
    "
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
