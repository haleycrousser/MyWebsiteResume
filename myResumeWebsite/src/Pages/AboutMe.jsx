import { useEffect, useRef } from "react";

function AboutMe() {

    const canvasRef = useRef(null);
    const trail = useRef([]);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        const handleMouseMove = (e) => {

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            trail.current.push({
                x,
                y,
                life: 1
            });

        };

        window.addEventListener("mousemove", handleMouseMove);

        function animate(){

            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(255,255,255,0.05)";
            ctx.fillRect(0,0,canvas.width,canvas.height);

            ctx.globalCompositeOperation = "destination-out";

            trail.current.forEach((point, index) => {

                ctx.beginPath();
                ctx.arc(point.x, point.y, 60 * point.life, 0, Math.PI * 2);
                ctx.fill();

                point.life -= 0.05;

                if(point.life <= 0){
                    trail.current.splice(index,1);
                }

            });

            requestAnimationFrame(animate);
        }

        animate();

        /* ===== Commit Scroll Logic ===== */

        let currentSection = 0;
        let isScrolling = false;

        const sections = [
            document.getElementById("container"),
            document.getElementById("page2")
        ];

        const handleWheel = (e) => {

            if(isScrolling) return;

            if(e.deltaY > 40 && currentSection === 0){
                isScrolling = true;
                currentSection = 1;

                sections[1].scrollIntoView({behavior:"smooth"});

                setTimeout(()=>{isScrolling=false},800);
            }

            if(e.deltaY < -40 && currentSection === 1){
                isScrolling = true;
                currentSection = 0;

                sections[0].scrollIntoView({behavior:"smooth"});

                setTimeout(()=>{isScrolling=false},800);
            }

        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("wheel", handleWheel);
        };

    }, []);

    return(

<div className="page">

    <div id="container">

        <img src="/kittyBackground.jpg" id="background" />
        <canvas ref={canvasRef} id="mask"></canvas>

        <div className="textbox">
            <h1>
                <span style={{fontSize: "2em"}}>Haley Crousser </span><br/><br/>
                Professional Computer Science Student<br/>
                at Middle Tennessee State University
            </h1>

            <p>C++ • Python • Javascript • HTML • CSS • React</p>

            <p>
            I am currently in my third year of college, and I've had an interest
            in computers since I was a kid. I started programming with HTML and 
            CSS in high school, and I have since expanded my skillset to include C++, 
            Python, and React.<br/><br/>

            My goal is to become a software engineer because I want to contribute to
            meaningful projects that bring positivity and innovation. As a consumer and developer
            I'd rather support a passion project made by a company or a small team that cares about their work, rather than
            someone that prioritizes profit over quality.
            </p>
        </div>

        <div className="imagebox">
            <img src="/profilePic.jpg" id="profilePic" />
        </div>

    </div>

    <div id="page2">
        <h1>References</h1>
        <p>
            hi
        </p>
    </div>

</div>

    );
}

export default AboutMe;