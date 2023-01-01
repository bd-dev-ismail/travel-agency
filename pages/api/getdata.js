import * as fs from "node:fs";

// https://travel-agency-eta.vercel.app/api/getdata?slug=data
export default function handler(req, res) {

  fs.readFile(`data/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No Data Found" });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });

}
