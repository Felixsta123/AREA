import { useState } from 'react';
import { User } from '../../interfaces/user';

interface HomeHeaderProps {
    user: User | null;
}

const HomeHeader = ({ user }: HomeHeaderProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSignOut = () => {
        // TODO: Add sign out logic here
        setIsDropdownOpen(false);
    };

    return (
        <div className="bg-white shadow-md p-5 rounded-2xl flex justify-between items-center">
            <a className="text-2xl font-bold">Hello {user?.nickname}</a>
            <div className="relative group">
                <button onClick={toggleDropdown} className="text-2xl group-hover:bg-gray-100 rounded-full w-10 h-10">
                    { isDropdownOpen ? '-' : '+' }
                </button>
                {isDropdownOpen && (
                    <div className="absolute z-10 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-[12em] p-3 space-y-2">
                        <div className="">Content 1</div>
                        <div className="">Content 2</div>
                        <button onClick={handleSignOut} className="py-1 w-full rounded-xl bg-gray-200 hover:bg-gray-300">
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeHeader;