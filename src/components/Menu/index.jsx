import {menu}  from "../../utils/menu";
import Button from "../Button";

export default function Menu() {
  return (
    <ul className="menu"> 
      {menu.map(({ name, href }) => (
        <li className="menu__item" key={name}>
          <a href={href}>{name}</a>
        </li>
        
      ))}
     
    </ul>
    
  );
}
