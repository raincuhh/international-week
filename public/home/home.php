<?php
require "../../src/lib/utils.php";
$sql_connection = get_sql_connection();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  include "./components/metadata.php";
  include "../shared/include/preconnect_fonts.php";
  include "../shared/include/favicons.php";
  include "../shared/include/preload.php";
  ?>
  <title>Il Sapore dell'Italia | Home</title>
  <link rel="stylesheet" href="./home.css">
  <link rel="stylesheet" href="../shared/static/themes/loader.css">
  <link rel="stylesheet" href="../shared/static/themes/footer.css">
  <script defer src="../../out/page_scripts/home/home.bundle.js"></script>
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
      <?php
      include "./components/hero.php";
      include "./components/short_about.php";
      include "./components/recommended_list.php";
      include "./components/long_about.php";
      include "./components/info.php";
      include "../shared/components/footer.php";
      ?>
    </div>
  </main>
  </div>
  <?php
  include "../shared/components/loader.php";
  include "../shared/components/noscript.php";
  ?>
</body>

</html>
