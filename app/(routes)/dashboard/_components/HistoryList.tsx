"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AddNewSessionDialog from './AddNewSessionDialog';
import axios from 'axios';
import HistoryTable from './HistoryTable';
import { sessionDetail } from '../medical-agent/[sessionId]/page';
import { Loader } from 'lucide-react'

function HistoryList() {
    const [historyList, setHistoryList]= useState<sessionDetail[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      GetHistoryList();
    
    }, [])
    

    const GetHistoryList=async ()=> {
        const result = await axios.get('/api/session-chat?sessionId=all');
        console.log(result.data);
        setHistoryList(result.data);
        setLoading(false);
    }

  if (loading) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <Loader className="h-10 w-10 animate-spin text-blue-500" />
      </div>
    )
  }
  return (
    <div className='mt-10'>
        {historyList.length == 0 ?
        <div className='flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl border-2'>
            <Image src={'/medical-assistance.png'} alt='empty' 
            width={150} 
            height={150} />

            <h2 className='font-bold text-xl mt-2'>No Recent Consultation</h2>
            <p>It looks like you haven't consulted with any doctor yet.</p>
            <AddNewSessionDialog />
        </div>
        :
        <div>
          <HistoryTable historyList={historyList}/>
        </div>
    }
    </div>
  )
}

export default HistoryList