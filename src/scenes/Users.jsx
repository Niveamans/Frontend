import UserTab from "../components/UserTab";


const Users =()=>{

    const beforeStyling = " before:absolute before:w-full before:h-full before:-z-10 before:bg-blue-100 before:left-0 before:top-0 before:rounded-t-xl";

    return (
        <>
        <div className={`flex justify-between items-center mx-auto p-7 rounded-xl w-5/6 mt-2 bg-blue-500 relative  ${beforeStyling}`}>
            <div className="text-white text-xl font-dmserif">Helth.</div>
            <div className="font-poppins rounded-full w-1/4 p-3 bg-blue-300 text-blue-50">Search patient</div>
        </div>

        <div className="w-5/6 mx-auto p-4 bg-blue-100">

        <div className="flex bg-blue-200 justify-between rounded-lg mb-4 drop-shadow font-poppins">

<div className="h-[60px] p-5 bg-blue-300 text-center rounded-lg text-blue-700">
    S.no
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
    Blood
    </div>

    |

    <div className="text-blue-900">
    Sex
    </div>

    
</div>

</div>

        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />
        <UserTab />

        </div>


        </>
    )
}

export default Users;