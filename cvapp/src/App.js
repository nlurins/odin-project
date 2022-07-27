import { AboutMe } from "./components/AboutMe";
import Personal from "./components/Personal";
import { Education } from "./components/Education";
import { Work } from "./components/Work";
import { useLocation } from "react-router-dom";
function App(props) {
  
  const { state } = useLocation();
  const {name, surname, date, address, number, email, summary, school1, school2, school3, year1, year2, year3,
  skill1, skill2, skill3, skill4, skill5, skill6, skillsl1, skillsl2, skillsl3, skillsl4, skillsl5, skillsl6,
  job1, job2, job3, jobyear1, jobyear2, jobyear3, descr1, descr2, descr3} = state;
  return (
    <div className="bg-[url(./img/bg.jpg)] bg-cover bg-fixed">
      <div className="shadow-2xl">
        <Personal name={name} surname={surname} date={date} address={address} number={number} email={email}/>
        <AboutMe summary={summary}/>
        <Education school1={school1} school2={school2} school3={school3} year1={year1} year2={year2} year3={year3}/>
        <Work skill1={skill1} skill2={skill2} skill3={skill3} skill4={skill4} skill5={skill5} skill6={skill6}
        skillsl1={skillsl1} skillsl2={skillsl2} skillsl3={skillsl3} skillsl4={skillsl4} skillsl5={skillsl5} skillsl6={skillsl6} 
        job1={job1} job2={job2} job3={job3} jobyear1={jobyear1} jobyear2={jobyear2} jobyear3={jobyear3} descr1={descr1} descr2={descr2} descr3={descr3} />
        
      </div>
    </div>
  );
}

export default App;
