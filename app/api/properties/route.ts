import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

// API route to handle adding new properties to the database

export async function POST(request: Request) {
    const body = await request.json();

    try {
        await sql`INSERT INTO properties (title, price, location, beds, baths, length, image_url) VALUES (${body.title}, ${body.price}, ${body.location}, ${body.beds}, ${body.baths}, ${body.length}, ${body.image_url})`;
        return NextResponse.json({message: 'Success'}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: 'Failed to add property'}, {status: 500});
    }
}

// // Api route to delete a property from the database

// export async function DELETE(
//     request: Request,
//     {params}: {params : {id: string}}
// ) {
//     const id = params.id;

//     try {
//         await sql`DELETE FROM properties WHERE id = ${id}`;
//         return NextResponse.json({message: "Property deleted"}, {status: 200});
//     } catch (error) {
//         return NextResponse.json({error: "Failed to delete"}, {status: 500});
//     }
// }