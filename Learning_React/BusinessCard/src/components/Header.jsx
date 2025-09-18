    import myImg from "../assets/myImg.jpg";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";

    export default function Header() {
    return (
        <header className="flex flex-col items-center text-white p-4">
        <img src={myImg} alt="My image" width={230} className="rounded" />
 <h1 className="text-3xl font-bold mt-4">Kumar Bhattarai</h1>
<p className="text-[#F3BF99]">Frontend Developer</p>
<p className="text-xs">kumarbhattarai.com.np</p>
<div className="flex mt-5">
    <span>
        <button className=" flex items-center px-[13px] py-[9px] bg-white text-black rounded-lg w-25"><img src={mail} alt="Mail icon" width={20}className="inline-block mr-1" /> Email</button>
    </span>

        <span>
            <button className=" flex items-center ml-2 px-[13px] py-[9px] bg-white text-[#5093E2] rounded-lg w-30"><img src={linkedin} alt="linkedin icon" width={24}className="inline-block mr-1" />LinkedIn</button>
        </span>
</div>

        </header>
    );
    }
