

 import mongoose from 'mongoose';

 type ConnectionObject = {
     isConnected?: number;
 };

 const connection: ConnectionObject = {};

 async function dbConnect(): Promise<void> {
    //   Check if already connected
    console.log("trying to connect")
     if (connection.isConnected) {
         console.log('Already connected to the database');
         return;
     }

     try {
    console.log("trying to connect")

        //   Connect to MongoDB
         const dbUri = process.env.MONGODB_URI || '';
         if (!dbUri) {
             throw new Error('MONGODB_URI is not defined');
         }

         const db = await mongoose.connect(dbUri, { family: 4 });

        //   Update connection state
         connection.isConnected = db.connections[0].readyState;
         console.log('Connected to the database');
     } catch (error) {
        //   Improved error handling
         console.error('Database connection failed:', error);
        //   Handle the error appropriately (e.g., retry connection, alert admin, etc.)
         throw new Error('Failed to connect to the database');
     }
 }

 export default dbConnect;
// import mongoose, { Connection } from 'mongoose'
// const dburl = process.env.MONGODB_URI as string;
// if (!dburl) {
//     throw new Error("please provide mongodb uri to connect to db")
// }

// let cachedConnection: Connection | null = null;
// export async function dbConnect() {
//     if (cachedConnection) {
//         console.log('using cached db connection')
//         return cachedConnection;
//     }
//     try {
//         const newconnection = await mongoose.connect(dburl);
//         cachedConnection = newconnection.connection;
//         console.log('new mongodb connection successfully created')
//         return cachedConnection;

//     } catch (error) {
//         console.error('error connecting to db', error)
//         throw new Error('error connecting to db')
//     }
// }

