import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { sessionDetail } from '../medical-agent/[sessionId]/page'
import moment from 'moment'
import ViewReportDialog from './ViewReportDialog'

type Props = {
    historyList:sessionDetail[]
}

function HistoryTable({historyList}:Props) {
  return (
    <div>
        <Table>
  <TableCaption>Previous Consultation Reports</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>AI Medical Specialist</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    
    {historyList.map((record:sessionDetail, index:number)=>(
    <TableRow>
      <TableCell className="font-medium">{record.selectedDoctor.specialist}</TableCell>
      <TableCell>{record.notes}</TableCell>
      <TableCell>{moment(new Date(record.createdOn)).fromNow()}</TableCell>
      <TableCell className="text-right"><ViewReportDialog record={record}/></TableCell>
    </TableRow>
    ))}
    
  </TableBody>
</Table>
    </div>
  )
}

export default HistoryTable