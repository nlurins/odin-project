import avatar from "../img/avatar.png"
const Personal = (props) => {
  return (
    <div className="container flex flex-col-reverse mx-auto justify-between items-center pt-5 border shadow-2xl p-10 max-w-5xl bg-white md:flex-row">
        {/*left*/}
        <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">{props.name}</h1>
            <h3 className="text-2xl">{props.date}</h3>
            <h3 className="text-2xl">{props.address}</h3>
            <h3 className="text-2xl font-bold">{props.number}</h3>
            <h3 className="text-2xl font-bold">{props.email}</h3>
        </div>
        {/*right*/}
        <div>
            <img src={avatar} className="max-h-[300px]" alt="placeholder man" />
        </div>
    </div>
  )
}

export default Personal