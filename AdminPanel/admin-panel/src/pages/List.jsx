import React, {useState} from 'react'
import axios from "axios"
import { useEffect } from 'react';

const List = () => {

    const [blogs, setBlogs]= useState([]);

    const fetchBlogs= async ()=>{
        try {
            const response = await axios.get("http://localhost:4000"+"/api/blogs/list");
            if(response.data.success){
            setBlogs(response.data.blogs);
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
             console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);


    return (
        <>
            <p className='mb-2'>
                All Blogs List
            </p>
            <div className='flex flex-col gap-2'>
                {/* list table title */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Description</b>


                </div>

                 {/* ---Blogs List */}
            {
                blogs.map((item,index)=>(
                    <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                       {console.log("Image:", item.image, "Type:", typeof item.image)}
                        
                       <img className='w-12 h-12' src={`http://localhost:4000${item.image}`} alt="Blog Image" />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                    </div>
                ))
            }

            </div>
        </>
    )
}

export default List