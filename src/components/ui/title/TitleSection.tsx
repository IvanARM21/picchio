
interface Props {
    title: string;
}

export const TitleSection = ({title} : Props) => {
  return (
    <h2 className="text-4xl font-extrabold text-slate-700 mb-8">{title}</h2>
  )
}
