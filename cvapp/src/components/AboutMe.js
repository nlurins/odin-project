
export const AboutMe = (props) => {
  return (
    <div className="gap-3 container mx-auto max-w-5xl p-10 flex flex-col bg-slate-100 shadow-2xl">
        <div className="text-center">
            <h1 className=" text-5xl font-bold">Summary</h1>
        </div>
        <div className="text-3xl text-left">
            <p>{props.summary}</p>
        </div>
    </div>
  )
}
