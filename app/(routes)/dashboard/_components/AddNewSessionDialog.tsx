"use client"
import React, { useState } from 'react'
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
import { doctorAgent } from './DoctorAgentCard'


function AddNewSessionDialog() {
    const [note, setNote] = useState<string>();
    const [loading,setLoading] = useState(false);
    const [suggestedDoctors,setSuggestedDoctors] = useState<doctorAgent[]>();

    const onClickNext = async () => {
      setLoading(true);
      const result=await axios.post('api/suggest-doctors',{
        notes: note
      });
      console.log(result.data);
      setSuggestedDoctors(result.data);
      setLoading(false);
    }

    const onStartConsultation = () => {

    }

  return (
    <Dialog>
  <DialogTrigger>
    <Button className='mt-3'>+ Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
        {!suggestedDoctors? <div>
            <h2>Add Symptoms or Any Other Details</h2>
            <Textarea placeholder='Add Details Here....' className='h-[200px] mt-1'
            onChange={(e)=>setNote(e.target.value)}/>
        </div>:
        <div>
            {/* // Suggested Doctors  */}
          </div>}
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
        
        {!suggestedDoctors? <Button disabled={!note||loading} onClick={()=>onClickNext()}>
          
          Next {loading ? <Loader2 className='animate-spin' />:<ArrowRight/>}</Button>
          :
          <Button onClick={()=>onStartConsultation()}>Start Consultation</Button>}
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default AddNewSessionDialog