import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'

const Slice15 = () => {
    return (
        <div className='flex h-screen'>
            <div className='bg-gray-700' style={{ width: "25vw" }}>
                <div className='w-full  flex' style={{height:"7%"}}>
                    <span className="" style={{ width: "80%", height: "100%" }}>
                        {/* <i className="pi pi-search" style={{ fontSize: "1vw" }} /> */}
                        <InputText className=''  style={{padding:"1vw", width: "100%", height: "100%", fontSize: "1vw" ,borderRadius:"0.5vw"}} />
                    </span>
                    <Button className='p-0 flex justify-content-center' style={{ width: "20%", height: "100%",borderRadius:"0.5vw" }}><span style={{fontSize:"1vw"}}>ok</span></Button>
                </div>
                <div className='' style={{ margin: "2vw" }}>
                    <h1 className='my-0 ' style={{ fontSize: "1vw" }}>CAMERA</h1>
                    <div className='flex text-gray-400' style={{ padding: "1vw 0", fontSize: "1.3vw" }}>
                        <div>
                            <span><i className='pi pi-box' style={{ fontSize: "1.3vw", padding: "1vw" }}></i></span>
                        </div>
                        <div>
                            <span>Công ty A (Số 20 đường Thanh Bình - Hà Nội)</span>
                        </div>
                    </div>
                    <div className='flex text-gray-400' style={{ padding: "1vw 0", fontSize: "1.3vw" }}>
                        <div>
                            <span><i className='pi pi-box' style={{ fontSize: "1.3vw", padding: "1vw" }}></i></span>
                        </div>
                        <div>
                            <span>Công ty A (Số 20 đường Thanh Bình - Hà Nội)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-700' style={{ width: "75vw", padding: "2vw" }}>
                <div className='bg-gray-500 border-round-xl  w-full h-full' style={{ padding: "1vw 0" }}>
                    <div className='flex ' style={{ width: "100%", height: "50%" }}>
                        <div className='flex-1 bg-gray-800' style={{ width: "50%", height: "100%" }}>
                            <div className='w-full bg-gray-200 flex flex-row-reverse ' > <i className='pi pi-times text-center font-bold' style={{ fontSize: '0.8vw' }}></i></div>
                        </div>
                        <div className='flex-1 bg-gray-800' style={{ width: "50%", height: "100%" }}>
                            <div className='w-full bg-gray-200 flex flex-row-reverse ' > <i className='pi pi-times text-center font-bold' style={{ fontSize: '0.8vw' }}></i></div>
                        </div>
                    </div>
                    <div className='flex ' style={{ width: "100%", height: "50%" }}>
                        <div className='flex-1 bg-gray-800' style={{ width: "50%", height: "100%" }}>
                            <div className='w-full bg-gray-200 flex flex-row-reverse ' > <i className='pi pi-times text-center font-bold' style={{ fontSize: '0.8vw' }}></i></div>
                        </div>
                        <div className='flex-1 bg-gray-800' style={{ width: "50%", height: "100%" }}>
                            <div className='w-full bg-gray-200 flex flex-row-reverse ' > <i className='pi pi-times text-center font-bold' style={{ fontSize: '0.8vw' }}></i></div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Slice15