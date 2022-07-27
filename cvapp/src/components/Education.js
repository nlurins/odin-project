import { Card } from "@mui/material"
export const Education = (props) => {
  return (
    <div className="border shadow-2xl gap-3 container mx-auto max-w-5xl p-10 flex flex-col bg-white">
        <div className="text-center font-bold text-5xl">
            <h1>Education</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-3 mx-auto">
            {props.school1 !== '' && <Card className="text-center items-center h-[200px] w-[300px]">
                <div className="flex flex-col justify-center items-center pt-16 px">
                    <h1 className="text-3xl font-bold ">{props.school1}</h1>
                    <h2 className="text-2xl font-bold ">{props.year1}</h2>
                </div>
                
            </Card>}
            {props.school2 !== '' && <Card className="text-center items-center h-[200px] w-[300px]">
                <div className="flex flex-col justify-center items-center pt-16 px">
                    <h1 className="text-3xl font-bold ">{props.school2}</h1>
                    <h2 className="text-2xl font-bold ">{props.year2}</h2>
                </div>
                
            </Card>}
            {props.school3 !== '' && <Card className="text-center items-center h-[200px] w-[300px]">
                <div className="flex flex-col justify-center items-center pt-16 px">
                    <h1 className="text-3xl font-bold ">{props.school3}</h1>
                    <h2 className="text-2xl font-bold ">{props.year3}</h2>
                </div>
                
            </Card>}
        </div>
    </div>
  )
}
