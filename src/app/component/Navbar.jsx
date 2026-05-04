'use client'
import Link from 'next/link';
import { Button } from "@heroui/react";
import React from 'react';
import { signOut, useSession } from '@/src/lib/auth-client';

const Navbar = () => {

    const { data, isPending } = useSession();

    if (isPending) {
        return <div>Loading......</div>

    }
    const user = data?.user;
    console.log(data);
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">

                        <p className="font-bold">ACME</p>
                    </div>
                    <div>

                        <ul className="flex items-center gap-4">
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-5'>
                        {user ? <div className='flex items-center gap-5'><p>Welcome {user.name}</p> <Button onClick={() => signOut()} variant="primary" >Sign Out</Button> </div>
                            :
                            <div className='flex items-center gap-5'>
                                <Link href={"/auth/signin"}><Button variant="primary" >Sign In</Button></Link>
                                <Link href={"/auth/signup"}><Button variant="primary" >Sign Up</Button></Link>
                            </div>}
                    </div>

                </header>
            </nav>


        </div>
    );
};

export default Navbar;