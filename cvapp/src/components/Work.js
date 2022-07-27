import React from 'react'
import { LinearProgress } from '@mui/material'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';


export const Work = (props) => {
  return (
    <div className='flex flex-col md:flex-row container mx-auto max-w-5xl p-10 bg-slate-100 shadow-2xl'>
        
            <div className='flex flex-col md:w-[35%]'>
                <h1 className='md:mr-9 text-center text-5xl font-bold self-center'>
                    Skills
                </h1>
                <ul className=' md:mr-9 text-center text-3xl pt-5 flex flex-col gap-5'>
                    {props.skill1 !== '' && <li>
                        <div>
                            <h1>{props.skill1}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl1} />
                        </div>
                    </li>}
                    {props.skill2 !== '' && <li>
                        <div>
                            <h1>{props.skill2}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl2} />
                        </div>
                    </li>}
                    {props.skill3 !== '' && <li>
                        <div>
                            <h1>{props.skill3}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl3} />
                        </div>
                    </li>}
                    {props.skill4 !=='' && <li>
                        <div>
                            <h1>{props.skill4}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl4} />
                        </div>
                    </li>}
                    {props.skill5 !== '' && <li>
                        <div>
                            <h1>{props.skill5}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl5} />
                        </div>
                    </li>}
                    {props.skill6 !== '' && <li>
                        <div>
                            <h1>{props.skill6}</h1>
                            <LinearProgress variant="determinate" value={props.skillsl6} />
                        </div>
                    </li>}
                </ul>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className='flex flex-col text-center md:w-[65%] '>
                <h1 className='md:ml-9 mt-5 md:mt-0 text-center text-5xl font-bold '>
                    Work
                </h1>
                <ul className='text-3xl pt-5 flex flex-col gap-5 md:ml-9 mb-10'>
                    <li>
                        <h1 className='font-bold text-4xl'>{props.job1}</h1>
                        <h2 className='font-bold'>{props.jobyear1}</h2>
                        <p className='text-left'>{props.descr1}</p>
                    </li>
                    <li>
                        <h1 className='font-bold text-4xl'>{props.job2}</h1>
                        <h2 className='font-bold'>{props.jobyear2}</h2>
                        <p className='text-left'>{props.descr2}</p>
                    </li>
                    <li className=''>
                        <h1 className='font-bold text-4xl'>{props.job3}</h1>
                        <h2 className='font-bold'>{props.jobyear3}</h2>
                        <p className='text-left'>{props.descr3}</p>
                    </li>
                </ul>
                <Button size="large" component={Link} to="/" variant="contained"  className=' max-w-[50%] self-center py-10'>BACK TO FORM</Button>
            </div>
            
    </div>
  )
}
