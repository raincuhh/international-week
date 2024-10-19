<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Il Sapore dell'Italia | home" />
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
  <script defer type="module" src="../../out/lib/onload.js"></script>
</head>

<body>
  <div id="app">
    <nav id="nav">
      <div class="container">
        <div class="cont">
          <div class="nav_header">
            <a href="./home.php" target="_blank" rel="noopener noreferrer">
              <p>Il Sapore dell'Italia</p>
            </a>
            <a href="" onclick="window.location.reload()" target="_blank" rel="noopener noreferrer">
              <p>/ home</p>
            </a>
          </div>
          <aside class="nav_aside">
            <ul class="nav_cat_list">
              <li class="nav_cat_item" id="nav_cat_item_booking">
                <div class="nav_cat_item_pill">
                  <a href="./booking.php" target="_blank" rel="noopener noreferrer">
                    <p>book a table</p>
                  </a>
                </div>
              </li>
              <li class="nav_cat_item" id="nav_cat_item_admin">
                <div class="nav_cat_item_pill">
                  <a href="./admin.php" target="_blank" rel="noopener noreferrer">
                    <p>admin</p>
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </nav>
    <main class="page" id="root">
      <div class="page_scroll">
        <section class="category" id="category_intro">
          <div class="container">
            <div class="cont">
              <div class="in_cont">
                <header class="intro_title">
                  <p>Il Sapore dell'Italia</p>
                </header>
                <div class="intro_image">
                  <img src="../assets/images/italian_cuisine_bg_4.jpg" alt="Il Sapore dell'Italia Bg">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="category" id="category_short_about">
          <div class="container">awdawdawdaw</div>
        </section>
        <section class="category" id="category_recommended_list">
          <div class="container">awdadawdaw</div>
        </section>
        <section class="category" id="category_long_about">
          <div class="container">awdawdaw</div>
        </section>
        <section class="category" id="category_footer">
          <div class="container">awdawdawda</div>
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
