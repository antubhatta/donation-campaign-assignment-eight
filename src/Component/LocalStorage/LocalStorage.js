const getStoredDonation=()=>{
    const  StoredDonation=localStorage.getItem('donation-item')
    if(StoredDonation){
        return JSON.parse(StoredDonation)
    }
    return []
}
const donationItem=id=>{
   const storedDonationItem=getStoredDonation()
   const exists=storedDonationItem.find(jobId=>jobId===id)
   if(!exists){
    storedDonationItem.push(id)
    localStorage.setItem('donation-item',JSON.stringify(storedDonationItem))

   }
    

}
export {donationItem,getStoredDonation}