
interface Props {
    item: {
        label: string;
        url: string;
    }
}

export const NavItem = ({ item } : Props) => {
  return (
    <a
        href={item.url}
        className="text-color-primary text-lg border-b-2 border-color-primary transition"
    >
        {item.label}
    </a>
  )
}
