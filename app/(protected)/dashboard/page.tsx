import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import React from 'react'

import data from "./data.json";
import DashboardWelcome from '@/components/dashboard/welcome';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const navUser = {
    name: session?.user.name || "",
    email: session?.user.email || "",
    avatar: session?.user.image || "",
    role: session?.user.role || "",
  }
   if(!navUser){
    redirect("/login")
   }
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className='pt-6 px-6'>
        <DashboardWelcome user={navUser}/>
      </div>
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards /> 
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
      </div>
  )
}
