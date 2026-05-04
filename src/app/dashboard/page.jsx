import { auth } from '@/src/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import React from 'react';
import { toast } from 'react-toastify';

const DashboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    console.log(session);
    const user = session?.user

    if (!user) {
        redirect('/auth/signup')
    }
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default DashboardPage;