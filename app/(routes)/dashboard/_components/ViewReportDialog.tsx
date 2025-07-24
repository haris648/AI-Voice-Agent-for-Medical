import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { sessionDetail } from '../medical-agent/[sessionId]/page'
import moment from 'moment'

type props={
    record:sessionDetail
}

function ViewReportDialog({record}:props) {
  return (
    <Dialog>
  <DialogTrigger>
    <Button variant={'link'} size={'sm'}>View Report</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle asChild>
        <h2 className='text-center text-4xl'>Medical Agent Voice AI Report</h2>
      </DialogTitle>
      <DialogDescription asChild>
        <div className='mt-10'>
            <h2 className='font-bold text-blue-500 text-lg'>Video Info:</h2>

            <div className='grid grid-cols-2'>
                <h2><span className='font-bold'>Doctor Specialization:</span> {record.selectedDoctor?.specialist}</h2>
                <h2>Consult Date: {moment (new Date(record?.createdOn)).fromNow()}</h2>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default ViewReportDialog