import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    let db = client.db("bitlinks");
    let collection = db.collection("url");

    // Check if shorturl exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success: false, error:true, message: 'Short URL already exists. Please choose another one.' })
    }
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    });

  return Response.json({ success: true, error:false, message: 'URL generated successfully' })
}