import { useEffect, useRef } from "react";

function AboutMe() {

    const canvasRef = useRef(null); // interact with canvas element directly
    const trail = useRef([]); //mouse trail data

    useEffect(() => { // runs once on component mount, 

        const canvas = canvasRef.current; // get canvas element from ref
        const ctx = canvas.getContext("2d"); // get 2D drawing context

        canvas.width = window.innerWidth; // set canvas size to fill window
        canvas.height = window.innerHeight; // set canvas size to fill window

        ctx.fillStyle = "white"; //white background
        ctx.globalAlpha = 0.8; // low opacity for fading effect
        ctx.fillRect(0,0,canvas.width,canvas.height); // fill entire canvas with white

        const handleMouseMove = (e) => { // add new point to trail on mouse move

            trail.current.push({ //tracks mouse position and life of each point
                x: e.clientX,
                y: e.clientY,
                life: 1 // life starts at 1 and will decrease to 0
            });

        };

        window.addEventListener("mousemove", handleMouseMove); // listen for mouse movement and call handleMouseMove

        function animate(){

            // slowly repaint white
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(255,255,255,0.05)";
            ctx.fillRect(0,0,canvas.width,canvas.height);

            ctx.globalCompositeOperation = "destination-out";

            trail.current.forEach((point, index) => {

                ctx.beginPath();
                ctx.arc(point.x, point.y, 60 * point.life, 0, Math.PI * 2);
                ctx.fill();

                // shrink / fade trail
                point.life -= 0.02;

                if(point.life <= 0){
                    trail.current.splice(index,1);
                }

            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return(
        <div>

            <div id="container">
                <img src="/kittyBackground.jpg" id="background" />
                <canvas ref={canvasRef} id="mask"></canvas>
                <h1>Haley Crousser</h1>
            </div>


        </div>
    );
}

export default AboutMe;