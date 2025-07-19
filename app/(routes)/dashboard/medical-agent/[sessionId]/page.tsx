"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctorAgent } from '../../_components/DoctorAgentCard';
import { Circle, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type sessionDetail = {
  id: number,
  notes: string,
  sessionId: string,
  report: JSON,
  selectedDoctor: doctorAgent,
  createdOn: string

}

function MedicalVoiceAgent() {
  const {sessionId} = useParams();
  const [sessionDetail, setSessionDetail]=useState<sessionDetail>();
      
  useEffect(() => {
    sessionId&&GetSessionDetails();
  }, [sessionId])
  

  const GetSessionDetails = async () => {
  try {
    const result = await axios.get('/api/session-chat?sessionId=' + sessionId); // 👈 fixed
    console.log("Full session data:", result.data);
    setSessionDetail(result.data);
  } catch (error) {
    console.error("Error fetching session details:", error);
  }
};
  return (
    <div className='p-5 border rounded-3xl bg-secondary text-center'>
      <div className="flex justify-between items-center">
        <h2 className="p-1 px-2 border rounded-md flex gap-2 items-center"><Circle className='h-4 w-4'/>Not Connected</h2>
        <h2 className="font-bold text-xl text-gray-400">00:00</h2>
      </div>

      {sessionDetail?.selectedDoctor?.image && (
  <div className='flex items-center flex-col mt-10'>
    <Image
      src={sessionDetail.selectedDoctor.image}
      alt={sessionDetail.selectedDoctor.specialist || "Doctor"}
      width={80}
      height={80}
      className='h-[100px] w-[100px] object-cover rounded-full'
    />
    <h2 className="mt-4 text-lg font-semibold">{sessionDetail.selectedDoctor.specialist}</h2>
    <p className="text-sm text-gray-500">AI Medical Voice Agent</p>

    <div className='mt-32'>
      <h2 className='text-gray-500'>Assistant Message</h2>
      <h2 className='text-lg'>User Message</h2>
    </div>

    <Button className='mt-20 cursor-pointer'><PhoneCall/>Start Call</Button>
  </div>
)}
    </div>
  )
}

export default MedicalVoiceAgent