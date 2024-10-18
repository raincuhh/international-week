<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="La Tavola del Sapore | home" />
  <title>La Tavola del Sapore | Home</title>

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
    console.log(week_day_unfm); // test
    console.log("Date now: " + formatted);
  </script>

  <link rel="stylesheet" href="../themes/variables.css">
  <link rel="stylesheet" href="home.css">
</head>

<body>
  <div id="app">
    <main id="main">
      <nav class="nav">
        <div class="nav_wrapper">
          <div class="nav_header">
            <p>
              <span>La Tavola del Sapore</span>
              <span>/ Home</span>
            </p>
          </div>
          <div class="nav_cat">
            <div class="nav_cat_list">
              <div class="nav_cat_item"></div>
            </div>
          </div>
        </div>
      </nav>
      <div class="page"></div>
    </main>
  </div>
  <div id="load" style="pointer-events: all">
    <div id="load-bg"></div>
    <div id="load-t"></div>
  </div>
  <noscript>
    "
    <div id="n-script-c">
      <div class="n-script-h">Please enable JavaScript to view this application.</div>
    </div>
    "
  </noscript>
  <script nomodule>
    let d = document,
      cont = d.createElement("div"),
      header = d.createElement("div");
    cont.className = "n-script-c";
    header.className = "n-script-h";
    header.textContent = "Please enable JavaScript to view this application.";
    cont.appendChild(header);
    d.body.appendChild(cont);
  </script>
</body>

</html>
