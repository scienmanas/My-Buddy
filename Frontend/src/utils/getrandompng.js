import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from "../assets/icons/red_triangle.png";

const icons=[
    blueOctagon,greenSquare,orangeSquare,redTriangle
]

export const generate=()=>{
    const x=Math.floor(Math.random()*3);
    return icons[x];
}