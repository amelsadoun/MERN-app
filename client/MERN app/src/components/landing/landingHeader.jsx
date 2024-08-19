import { useNavigate } from "react-router-dom";

export default function LeandingHeader() {
  const navigate = useNavigate();

  const browseToLogin = () => {
    navigate("/login");
  };

  const browseToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-row bg-gradient-to-b from-transparent to-lime-900 items-center justify-between w-full pb-16 pt-7 desktop:px-32 px-10">
      <h1 className="text-4xl font-extrabold drop-shadow-lg text-ocean-500">
        (E)venTech
      </h1>
      <div className="flex gap-10 self-center justify-between items-center align-middle">
        <Button label="Login" onClick={browseToLogin} />
        <Button label="Sign up" onClick={browseToSignup} />
      </div>
    </div>
  );
}

const Button = ({ label, onClick }) => {
  return <button onClick={onClick} className="bg-lime-900 font-semibold border-b-[2px] border-r-[1px]  border-slate-100 text-ocean-500 rounded-full py-3 w-28 shadow-md hover:bg-lime-700 hover:border-none hover:scale-105 ease-in duration-200">{label}</button>;
};
