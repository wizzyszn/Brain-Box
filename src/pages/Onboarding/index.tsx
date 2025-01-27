import Logo from "@/assets/Logo.png";
import Robo1 from "@/assets/onBoard/Robo Image.png";
import Robo2 from "@/assets/onBoard/Robot Image.png";
import Robo3 from "@/assets/onBoard/Robot Img.png";
import { useEffect, useState } from "react";
function Onboarding() {
    type OnboardStateComponentInt = "splash" | "On-Boarding";
    const [onBoardStateComponent, setOnBoardStateComponent] =
        useState<OnboardStateComponentInt>("splash");
    useEffect(() => {
        const timeoutFunc = setTimeout(() => {
            setOnBoardStateComponent("On-Boarding");
        }, 3000);
        return () => clearTimeout(timeoutFunc);
    }, []);
    return <>{onBoardStateComponent === "splash" ? <Splash /> : <Pages />}</>;
}

export default Onboarding;

//?* Splash Component
const Splash = () => (
    <div className="flex h-svh items-center justify-center bg-customBg-main-1">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div className="fixed bottom-5 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-medium text-txt-1">BrainBox</h2>
            <span className="text-xs text-txt-5">Version 1.0</span>
        </div>
    </div>
);

/*
components = [{},{},{}];
state -> 0
onClick -> state +/- 1

boardTemp(Props) {
btns => (){
}
}
Props {
{
Title,
Description,
image
} : components[state]
}
*/

function Pages() {
    const [index, setIndex] = useState(0);
    interface ElementInt {
        Title: string;
        Description: string;
        Image: string;
    }
    const ELements: ElementInt[] = [
        {
            Title: ` Unlock the Power
       Of  Future AI`,
            Description: `Chat with the smartest AI Future          Experience power of AI with us`,
            Image: Robo1,
        },
        {
            Title: `   Chat With Your
       Favourite Ai`,
            Description: `Chat with the smartest AI Future          Experience power of AI with us`,
            Image: Robo2,
        },
        {
            Title: `Boost Your Mind
   Power with Ai`,
            Description: `Chat with the smartest AI Future          Experience power of AI with us`,
            Image: Robo3,
        },
    ];
    const { Title, Description, Image } = ELements[index];
    const ElementUpdater = (payload: "prev" | "next") => {
        switch (payload) {
            case "prev":
                setIndex((latter) => latter - 1);
                return;
            case "next":
                setIndex((latter) => latter + 1);
                return;

            default:
                break;
        }
    };
    return (
        <div className="h-svh bg-customBg-main-1">
            <div className="flex justify-end p-4">
                <button className="text-lg font-semibold text-txt-2">
                    skip
                </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 p-6">
                <div>
                    <div>
                        <img src={Image} alt="img" />
                    </div>
                    <div>
                        <span>pointers</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-[40px] text-txt-1">{Title}</h2>
                    <p className="text-center text-xs">{Description}</p>
                </div>
            </div>
            <div>
                <button onClick={() => ElementUpdater("prev")}>Prev</button>{" "}
                <button onClick={() => ElementUpdater("next")}>Next</button>
            </div>
        </div>
    );
}
