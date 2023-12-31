import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";


export default async function middleware(req: NextRequest){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req: req, res: res});
    await supabase.auth.getSession();
    return res
}