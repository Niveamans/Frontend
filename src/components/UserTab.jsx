import {FaTrash} from "react-icons/fa";

const UserTab =(props)=>{
    return(
        <>
            <div className="flex bg-blue-200 justify-between rounded-lg mb-4 drop-shadow font-poppins">

<div className="h-[60px] p-5 bg-blue-300 text-center rounded-lg text-blue-700">
    {props.id}
</div>


<div className="w-5/6 flex h-[60px]  justify-between bg-blue-300 items-center py-5 px-10 rounded-lg">
    
    <div className="font-bold text-blue-900">
    {props.name}
    </div>

    |

    <div className="text-blue-900">
    {props.age}
    </div>

    |

    <div className="text-blue-900">
    {props.bloodgroup}
    </div>

    |

    <div className="text-blue-900">
    {props.sex}
    </div>

    
</div>

<div className="h-[60px] p-5 bg-blue-300 text-center rounded-lg text-blue-700">
    
    {props.actions &&
    <div> {props.actions} </div>
    }

    {!props.actions &&
     <FaTrash /> 
    }
    
    
</div>

</div>
        </>
    )

}

export default UserTab;