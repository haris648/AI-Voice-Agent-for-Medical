"use client"
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Loader2 } from 'lucide-react'
import axios from 'axios'
import DoctorAgentCard, { doctorAgent } from './DoctorAgentCard'
import SuggestedDoctorCard from './SuggestedDoctorCard'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { sessionDetail } from '../medical-agent/[sessionId]/page'


function AddNewSessionDialog() {
    const [note, setNote] = useState<string>();
    const [loading,setLoading] = useState(false);
    const [suggestedDoctors,setSuggestedDoctors] = useState<doctorAgent[]>();
    const [selectedDoctor,setSelectedDoctor] = useState<doctorAgent>();
    const router = useRouter();
    const [historyList, setHistoryList]= useState<sessionDetail[]>([]);
    const { has } = useAuth()
    
      const paidUser = has && has({ plan: 'pro' });
      
    useEffect(() => {
          GetHistoryList();
        
        }, [])
        
    
        const GetHistoryList=async ()=> {
            const result = await axios.get('/api/session-chat?sessionId=all');
            console.log(result.data);
            setHistoryList(result.data);
        }

    const onClickNext = async () => {
      setLoading(true);
      const result=await axios.post('api/suggest-doctors',{
        notes: note
      });
      console.log(result.data);
      setSuggestedDoctors(result.data);
      setLoading(false);
    }

    const onStartConsultation = async() => {
      // save all info to database
      setLoading(true);
      const result=await axios.post('api/session-chat',{
        notes: note,
        selectedDoctor:selectedDoctor
      });
      console.log(result.data);
      if(result.data?.sessionId)
      {
        console.log(result.data.sessionId);
        //Route new conversation screen
        router.push('/dashboard/medical-agent/'+result.data.sessionId);
      }
      setLoading(false);
    }

  return (
    <Dialog>
  <DialogTrigger>
    <Button className='mt-3 cursor-pointer'>+ Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
        {!suggestedDoctors? <div>
            <h2>Add Symptoms or Any Other Details</h2>
            <Textarea placeholder='Example: I am having headache....' className='h-[200px] mt-1'
            onChange={(e)=>setNote(e.target.value)}/>
        </div>:

        <div>
            <h2>Select the Doctor</h2>
            <div className='grid grid-cols-2 gap-5'>
                {/* // Suggested Doctors  */}

                {suggestedDoctors.map((doctor, index)=>(
                  // <DoctorAgentCard doctorAgent={doctor} key={index}/>
                  <SuggestedDoctorCard doctorAgent={doctor} key={index} 
                  setSelectedDoctor={()=>setSelectedDoctor(doctor)} 
                  //@ts-ignore
                  selectedDoctor={selectedDoctor}/>
                ))}
              </div>
          </div> }
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
        
        {!suggestedDoctors? <Button disabled={!note||loading} onClick={()=>onClickNext()}>
          
          Next {loading ? <Loader2 className='animate-spin' />:<ArrowRight/>}</Button>
          :
          <Button className='cursor-pointer' disabled={loading || !selectedDoctor} onClick={()=>onStartConsultation()}>Start Consultation
          {loading ? <Loader2 className='animate-spin' />:<ArrowRight/>}</Button>}
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default AddNewSessionDialog