import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [summary, setSummary] = useState('')
  const [school1, setSchool1] = useState('')
  const [year1, setYear1] = useState('')
  const [school2, setSchool2] = useState('')
  const [year2, setYear2] = useState('')
  const [school3, setSchool3] = useState('')
  const [year3, setYear3] = useState('')
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [skill4, setSkill4] = useState('');
  const [skill5, setSkill5] = useState('');
  const [skill6, setSkill6] = useState('');
  const [skillsl1, setSkillsl1] = useState('')
  const [skillsl2, setSkillsl2] = useState('')
  const [skillsl3, setSkillsl3] = useState('')
  const [skillsl4, setSkillsl4] = useState('')
  const [skillsl5, setSkillsl5] = useState('')
  const [skillsl6, setSkillsl6] = useState('')
  const [job1, setJob1] = useState('')
  const [job2, setJob2] = useState('')
  const [job3, setJob3] = useState('')
  const [jobyear1, setJobyear1] = useState('')
  const [jobyear2, setJobyear2] = useState('')
  const [jobyear3, setJobyear3] = useState('')
  const [descr1, setDescr1] = useState('')
  const [descr2, setDescr2] = useState('')
  const [descr3, setDescr3] = useState('')

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cv', { state: {
      name: name,
      surname: surname,
      date: date,
      address: address,
      number: number,
      email: email,
      summary: summary,
      school1: school1,
      year1: year1,
      school2: school2,
      year2: year2,
      school3: school3,
      year3: year3,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
      skill5: skill5,
      skill6: skill6,
      skillsl1: skillsl1,
      skillsl2: skillsl2,
      skillsl3: skillsl3,
      skillsl4: skillsl4,
      skillsl5: skillsl5,
      skillsl6: skillsl6,
      job1: job1,
      job2: job2,
      job3: job3,
      jobyear1: jobyear1,
      jobyear2: jobyear2,
      jobyear3: jobyear3,
      descr1: descr1,
      descr2: descr2,
      descr3: descr3


    }})
  }

  return (
    <div className="rounded-lg border shadow-2xl gap-3 container mx-auto max-w-5xl p-10 flex flex-col bg-white">
        <h1 className="text-8xl text-blue-500 text-center">CV BUILDER</h1>
        <h1 className="text-5xl text-center py-10">Personal Information</h1>
        <div className='flex justify-center gap-5 pt-10'>
        <TextField id="name" value={name} onChange={(e) =>{
          setName(e.target.value)
        }} label="Name" variant="filled" />
        <TextField id="surname" label="Surname" value={surname} onChange={(e) =>{
          setSurname(e.target.value)
        }} variant="filled" />
        <TextField id="date" label="YYYY/MM/DD" value={date} onChange={(e) =>{
          setDate(e.target.value)
        }} variant="filled" />
        </div>
        <div className='flex justify-center gap-5 pt-2'>
        <TextField id="address" label="Address" value={address} onChange={(e) =>{
          setAddress(e.target.value)
        }} variant="filled" />
        <TextField id="number" label="Phone number" value={number} onChange={(e) =>{
          setNumber(e.target.value)
        }} variant="filled" />
        <TextField id="email" label="E-mail" value={email} onChange={(e) =>{
          setEmail(e.target.value)
        }} variant="filled" />
        </div> 
        <h1 className="text-5xl text-center py-10">Summary</h1>
        <TextField
          className='max-w-[75%] self-center'
          fullWidth
          id="summary"
          label="Multiline"
          multiline
          value = {summary}
          onChange={(e) =>{
            setSummary(e.target.value)
          }}
          variant="filled"
        />
        <h1 className="text-5xl text-center py-10">Education</h1>
        <div className='flex justify-center gap-5 '>
        <TextField id="school1" label="School 1" value={school1} onChange={(e) =>{
          setSchool1(e.target.value)
        }} variant="filled" />
        <TextField id="year1" label="YYYYstart - YYYYend" value={year1} onChange={(e) =>{
          setYear1(e.target.value)
        }} variant="filled" />
        
        </div>
        <div className='flex justify-center gap-5 pt-2'>
        <TextField id="school2" label="School 2" value={school2} onChange={(e) =>{
          setSchool2(e.target.value)
        }} variant="filled" />
        <TextField id="year2" label="YYYYstart - YYYYend" value={year2} onChange={(e) =>{
          setYear2(e.target.value)
        }} variant="filled" />
        </div>
        <div className='flex justify-center gap-5 pt-2'>
        <TextField id="school3" label="School 3" value={school3} onChange={(e) =>{
          setSchool3(e.target.value)
        }} variant="filled" />
        <TextField id="year3" label="YYYYstart - YYYYend" value={year3} onChange={(e) =>{
          setYear3(e.target.value)
        }} variant="filled" />
        </div>
        <h1 className="text-5xl text-center py-10">Skills</h1>
        
        
        <div className='flex justify-center gap-5'>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill1" label="Skill" value={skill1} onChange={(e) =>{
          setSkill1(e.target.value)
        }} variant="filled" />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl1} onChange={(e) =>{
          setSkillsl1(e.target.value)
        }} name="skill1"/>
          </div>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill2" label="Skill" value={skill2} onChange={(e) =>{
          setSkill2(e.target.value)
        }} variant="filled" />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl2} onChange={(e) =>{
          setSkillsl2(e.target.value)
        }} name="skill2"/>
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill3" label="Skill" value={skill3} onChange={(e) =>{
          setSkill3(e.target.value)
        }} variant="filled" />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl3} onChange={(e) =>{
          setSkillsl3(e.target.value)
        }} name="skill3"/>
          </div>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill4" label="Skill" value={skill4} onChange={(e) =>{
          setSkill4(e.target.value)
        }} variant="filled" />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl4} onChange={(e) =>{
          setSkillsl4(e.target.value)
        }} name="skill4"/>
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill5" label="Skill" value={skill5} onChange={(e) =>{
          setSkill5(e.target.value)
        }} variant="filled" />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl5} onChange={(e) =>{
          setSkillsl5(e.target.value)
        }} name="skill5"/>
          </div>
          <div className='gap-5 pt-2  max-w-20'>
          <TextField id="Skill6" label="Skill" value={skill6} onChange={(e) =>{
          setSkill6(e.target.value)
        }} variant="filled" />
          <Slider className defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={skillsl6} onChange={(e) =>{
          setSkillsl6(e.target.value)
        }} name="skill6"/>
          </div>
        </div>
        <h1 className="text-5xl text-center py-10">Work Experience</h1>
        <div className='flex justify-center gap-5 pt-2'>
        <TextField id="Job1" label="Job Title" value={job1} onChange={(e) =>{
          setJob1(e.target.value)
        }} variant="filled" />
        <TextField id="jobyear1" label="YYYYstart - YYYYend" value={jobyear1} onChange={(e) =>{
          setJobyear1(e.target.value)
        }} variant="filled" />
        </div>
        <TextField
            className='max-w-[50%] self-center'
            fullWidth
            id="Job1descr"
            label="Description"
            multiline
            value={descr1} 
            onChange={(e) =>{
              setDescr1(e.target.value)
            }}
            variant="filled"
          />
          <div className='flex justify-center gap-5 pt-10'>
        <TextField id="Job2" label="Job Title" value={job2} onChange={(e) =>{
          setJob2(e.target.value)
        }} variant="filled" />
        <TextField id="jobyear2" label="YYYYstart - YYYYend" value={jobyear2} onChange={(e) =>{
          setJobyear2(e.target.value)
        }} variant="filled" />
        </div>
        <TextField
            className='max-w-[50%] self-center'
            fullWidth
            id="Job2descr"
            label="Description"
            multiline
            value={descr2} 
            onChange={(e) =>{
              setDescr2(e.target.value)
            }}
            variant="filled"
          />
          <div className='flex justify-center gap-5 pt-10'>
        <TextField id="Job3" label="Job Title" value={job3} onChange={(e) =>{
          setJob3(e.target.value)
        }} variant="filled" />
        <TextField id="jobyear3" label="YYYYstart - YYYYend" value={jobyear3} onChange={(e) =>{
          setJobyear3(e.target.value)
        }} variant="filled" />
        </div>
        <TextField
            className='max-w-[50%] self-center pb-10'
            fullWidth
            id="Job3descr"
            label="Description"
            multiline
            value={descr3} 
            onChange={(e) =>{
              setDescr3(e.target.value)
            }}
            variant="filled"
          />
        <Button size="large" 
        variant="contained"  onClick={() => handleClick()} className=' max-w-[50%] self-center py-10'>Generate</Button>
    </div>
  )
}
