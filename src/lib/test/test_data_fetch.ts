import axios from "axios";

export async function test_fetch_data() {
   try {
      const response = await axios.get(
         "http://localhost/dev/php/international-week/src/lib/test/test_data_fetch.php"
      );
      console.log(response.data); // Logs data from PHP
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}
