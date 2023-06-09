import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {

  const jwt = request.cookies.get("myTokenName");

  //if(request.nextUrl.pathname.includes('/dashboard')){
    //console.log('validating dashboard')
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
      try {
      const { payload } = await jwtVerify(jwt.value,new TextEncoder().encode('secret'));
      //console.log(payload);
      return NextResponse.next();     
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
            
  }
  //return NextResponse.next();
//}

export const config = {
  matcher: ["/home", "/admin/:path*", "/new", "/about"],
};
