const UserTab =()=>{
    return(
        <>
            <div className="flex bg-blue-200 justify-between rounded-lg mb-4 drop-shadow font-poppins">

<div className="h-[60px] p-5 bg-blue-300 text-center rounded-lg text-blue-700">
    1
</div>


<div className="w-5/6 flex h-[60px]  justify-between bg-blue-300 items-center py-5 px-10 rounded-lg">
    
    <div className="font-bold text-blue-900">
    Name
    </div>

    |

    <div className="text-blue-900">
    Age
    </div>

    |

    <div className="text-blue-900">
    O+
    </div>

    |

    <div className="text-blue-900">
    Sex
    </div>

    
</div>

</div>
        </>
    )

}

export default UserTab;