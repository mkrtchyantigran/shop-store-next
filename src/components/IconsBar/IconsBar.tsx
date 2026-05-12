import './iconsBar.scss'

const icons = [
    "/icons/icons-bar/icon-1.svg",
    "/icons/icons-bar/icon-2.svg",
    "/icons/icons-bar/icon-3.svg",
    "/icons/icons-bar/icon-4.svg",
    "/icons/icons-bar/icon-5.svg",
];

export default function IconsBar() {
    return (
        <div className="icons-bar">
           {icons.map((icon, i) => (
                <img key={i} src={icon} alt="icon" />
           ))}
        </div>
    )
}
