import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("tajrob");
    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let myPost = await db.collection("posts").insertOne(bodyObject);
            console.log(myPost);
            res.status(200).send("success");
            break;
        case "GET":
            const allPosts = await db.collection("posts").find({}).toArray();
            res.json({ status: 200, data: allPosts });
            break;
    }
}