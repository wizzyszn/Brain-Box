import Logo from "@/assets/Logo.png";
import Robo1 from "@/assets/onBoard/Robo Image.webp";
import Robo2 from "@/assets/onBoard/Robot Image.webp";
import Robo3 from "@/assets/onBoard/Robot Img.webp";
import { Button } from "@/components/ui/button";
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
        <div className="min-h-svh overflow-hidden bg-customBg-main-1 p-2 max-sm:p-5">
            <div className="flex justify-end">
                <button className="p-4 text-lg font-semibold text-txt-2">
                    skip
                </button>
            </div>
            <div className="flex h-full flex-col items-center justify-center gap-5 p-6">
                <div>
                    <div>
                        <img src={Image} alt="img" />
                    </div>
                    <div>{/**  <span>pointers</span> */}</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="leadiing-[3em] text-center text-[clamp(1.5em,3.0vw,2.5em)] font-bold text-txt-1">
                        {Title}
                    </h2>
                    <p className="w-[60%] text-center text-[clamp(0.8em,3.0vw,1em)] leading-[1.5em] text-txt-5">
                        {Description}
                    </p>
                </div>
            </div>
            <div className="relative p-4 pb-20">
                {index === 0 || (
                    <Button
                        onClick={() => ElementUpdater("prev")}
                        disabled={index === 0}
                        className={`absolute left-3 w-[25%] p-4`}
                    >
                        Back
                    </Button>
                )}

                {index === ELements.length - 1 ? (
                    <Button className="absolute right-3 w-[25%] p-4">
                        Continue
                    </Button>
                ) : (
                    <Button
                        className={`absolute right-3 w-[25%] p-4`}
                        onClick={() => ElementUpdater("next")}
                        disabled={index === ELements.length - 1}
                    >
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
}
