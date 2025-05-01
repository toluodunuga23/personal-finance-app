
const Navbar = () => {
    return(
        <>
             <div className="flex flex-col items-start bg-slate-800 h-full w-64 fixed z-1 top-0 left-0 p-4">
                <div>
                <p className="text-white text-lg font-semibold mb-4">FinPrep</p>
                </div>
                <div className='gap-4 mt-20 '>
                <ul className="space-y-12">
                <li className="text-white hover:text-gray-300">
                        <a href="/" className="flex items-center ">
                            <span className="mr-2">🏠</span> Home
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/learning" className="flex items-center">
                            <span className="mr-2">📚</span>Learning
                        </a>
                    </li>
                   <li className="text-white hover:text-gray-300">
                        <a href="/budget" className="flex items-center ">
                            <span className="mr-2">💰</span> Budgets
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center">
                            <span className="mr-2">📈</span> Stocks
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center">
                            <span className="mr-2">⚙️</span> Settings
                        </a>
                    </li>
                </ul>
                </div>
                </div>
        </>
    )
}
export default Navbar