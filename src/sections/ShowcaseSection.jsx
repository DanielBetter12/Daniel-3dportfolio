import {useRef} from 'react';
import { gsap } from 'gsap';
import {ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom=100px'
                    }
                }
            )
        })
    gsap.fromTo(sectionRef.current,
        {opacity: 0},
        {opacity: 1, duration: 1.5 })
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">

            <div className="w-full">
                <h1 className="font-bold text-4xl">Projects</h1>
                <div className="showcaselayout">

                    {/*LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper hover:opacity-25">
                            <a href="https://skinstric-ai-beryl.vercel.app/" target="_blank">
                                <img src="/images/Skinstric.png" alt="Ryde"/>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>An app that uses A.I. to scan the users skin to develop a skincare routine</h2>
                            <p className="text-white-50 md:text-xl">A paid internship project where I designed and implemented a clean, mobile-responsive
                                UI using React.js and Tailwind CSS, optimized for performance and user experience.
                                Utilized the WebCam API to capture user facial images securely, enabling personalized
                                skincare insights without storing sensitive data.</p>
                        </div>
                    </div>

                    {/*Right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb] hover:opacity-25">
                                <a href="https://daniel-internship-beta.vercel.app/" target="_blank">
                                    <img src="/images/NFTproject.png" alt="nftproject"/>
                                </a>
                            </div>
                            <h2>Ultraverse NFT Library</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] hover:opacity-25">
                                <a href="https://store-it-peach-one.vercel.app/sign-in" target="_blank">
                                    <img src="/images/storeit.png" alt="storeit"/>
                                </a>
                            </div>
                            <h2>Google Drive Clone</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
