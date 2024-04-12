// /app/api/hello/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    //await connectDB();
    return NextResponse.json({ message: 'Hello World!' });
  } catch (error) {
    //console.error('Error al conectar a la base de datos:', error.message);
    return new NextResponse(500, { error: 'Error en el servidor' });
  }
};
