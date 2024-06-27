import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1">
        <p className="p-3">Back</p>
      </div>
      <h1 className="flex-1 text-center mt-4 text-xl font-bold">My Workout</h1>
      <div className="flex-1 flex justify-end">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
