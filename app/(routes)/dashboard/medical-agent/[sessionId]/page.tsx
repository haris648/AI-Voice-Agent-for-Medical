"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctorAgent } from '../../_components/DoctorAgentCard';
import { Circle } from 'lucide-react';
import Image from 'next/image';

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
    <div>
      <div className="flex justify-between items-center">
        <h2 className="p-1 px-2 border rounded-md flex gap-2 items-center"><Circle className='h-4 w-4'/>Not Connected</h2>
        <h2 className="font-bold text-xl text-gray-400">00:00</h2>
      </div>

      {sessionDetail?.selectedDoctor?.image && (
  <div>
    <Image
      src={sessionDetail.selectedDoctor.image}
      alt={sessionDetail.selectedDoctor.specialist || "Doctor"}
      width={80}
      height={80}
    />
  </div>
)}
    </div>
  )
}

export default MedicalVoiceAgent