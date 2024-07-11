import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className='w-10 rounded-full'>
                <img 
                src="C:\Users\18mpi\Desktop\Projects\frontend\public\9856301_contact_account_profile_user_icon.png" 
                alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">You were the Chosen One!</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">Seen</div>
    </div>
  )
}

export default Message
