import React from 'react'
 interface TempateProps{
    children:React.ReactNode;

 }

const  Template:React.FC<TempateProps> = ({children}) => {
  return (
    <div className='h-screen
    p-6 flex justify-center'>  
        
        {children}
    </div>
  );
};

export default   Template;