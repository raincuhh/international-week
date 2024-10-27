import axios from "axios";

const base_url: string = window.location.origin;

export async function test_fetch_data() {
   try {
      const response = await axios.get(`${base_url}/international-week/src/lib/test/test_data_fetch.php`);
      console.log(response.data);
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}
