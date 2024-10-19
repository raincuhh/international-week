<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Il Sapore dell'Italia | booking" />
  <title>Il Sapore dell'Italia | booking</title>

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
</head>

<body>

</body>

</html>