import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const isServices
    // console.log(request.nextUrl.pathname.startsWith("/dashboard/addproduct"))
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/dashboard/addproduct',
// }