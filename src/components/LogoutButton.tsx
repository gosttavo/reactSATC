export default function LogoutButton() {
    function doLogout() {
        localStorage.removeItem('username');
        window.location.href = '/';
    }

    return (
        <>
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={doLogout}
            >
                Sair
            </button>
        </>
    )
}