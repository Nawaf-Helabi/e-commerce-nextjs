import UserModel from "@/app/DBconfig/models/user"
import { connectMongoDB } from "@/app/DBconfig/mongoDB"
import { NextResponse } from "next/server"

export async function POST(request) {
    // 1- Receive data from Front-end
    const objFromFrontEnd = await request.json()
    console.log("*******************************************")
    console.log(objFromFrontEnd)
    
    // 2- connect to DB
    await connectMongoDB()
    
    // 3- Try to Store obj to DB
   await UserModel.create({
        name:'test1',
        email:'test2',
        password:'test3'

    })
    
    
    
    // 4- Go back to frontend
    return NextResponse.json({})
    }