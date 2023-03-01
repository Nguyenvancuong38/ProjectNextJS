import BasicTabs from "../../components/Tab";
import SignUp from "../../components/FormSignUp";
import ShowInfor from "../../components/FormShowInfor";
import { PersonalInformationIcon, InformationContactIcon } from "../../components/InconTab";

const componentChirldOfTab = [
    {
        'component': <SignUp />,
        'nameTab': "Sign up",
        'iconOnTab': <PersonalInformationIcon />,
        'value': 0
    },
    {
        'component': <ShowInfor />,
        'nameTab': "Show Information",
        'iconOnTab': <InformationContactIcon />,
        'value': 1
    }
]

function CreateUser() {
    return (
        <div className="bg-[white]">
            <BasicTabs data={componentChirldOfTab}/>
        </div>
    );
}

export default CreateUser;