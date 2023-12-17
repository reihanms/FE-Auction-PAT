import React from 'react'
import Invoice from '../Component/Invoice'
import { useParams } from "react-router-dom";

export const InvoicePage = () => {
  const { id } = useParams();
  return <Invoice id={id}/>
}
