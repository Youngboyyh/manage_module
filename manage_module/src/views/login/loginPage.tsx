import "./loginPage.scss"
import ParticlesBg from "particles-bg";
import FormP from "./form";

let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx: { beginPath: () => void; rect: (arg0: any, arg1: any, arg2: number, arg3: number) => void; fillStyle: any; fill: () => void; closePath: () => void; }, particle: { p: { x: any; y: any; }; radius: number; color: any; }) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    } 
  };
function LoginPage(){
    return (
        <div className="loginPage">
            <div className="formBox">
                <FormP />
            </div>
            
            <ParticlesBg type="custom" config={config} bg={true} />
        </div>
    )
}

export default LoginPage;