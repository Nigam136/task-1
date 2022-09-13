const express = require("express");
const app = express();
const port = 5000;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://perqhrjombnbxmhqmrbc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcnFocmpvbWJuYnhtaHFtcmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMwMDEyOTEsImV4cCI6MTk3ODU3NzI5MX0.Z-E0Yku-lrUilbT-8QAxw0wXC8wzL1FnPD20BNMIFzY"
);
// console.log("supabase: ", supabase);

app.get("/name", async (req, res) => {
  const { data, error } = await supabase.from("task-1_DB").select("name");
  //   console.log(data);
  res.send(data);
});

app.get("/sem", async (req, res) => {
  const { data, error } = await supabase.from("task-1_DB").select("sem");
  //   console.log(data);
  res.send(data);
});

app.post("/add", async (req, res) => {
  const { data, error } = await supabase
    .from("task-1_DB")
    .insert([{ name: "david", city: "europe", sem: "8" }]);
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
