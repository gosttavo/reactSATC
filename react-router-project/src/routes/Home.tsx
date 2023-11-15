export default function Home() {
    function doLoginUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;

        if (username) {
            localStorage.setItem('username', username);
            window.location.href = '/messages';
        } else {
            alert('Por favor, digite seu nome de usuário!');
        }
    }

    return (
        <>
            <div className="p-6">
                <h1 className="flex p-6 justify-center text-3xl font-bold">Fazer login</h1>
                <form 
                    method="post"
                    className="mx-auto my-auto mt-6 max-w-md rounded bg-gray-300 p-3"
                    onSubmit={doLoginUser}
                >
                    <label 
                        htmlFor="username" 
                        className="block"
                    >
                        Nome de usuário:
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        className="mt-2 block rounded p-2 w-full"
                        placeholder="Digite seu nome de usuário..."
                    />
                    <button 
                        type="submit"
                        className="rounded bg-blue-400 text-white p-2 mt-3 hover:bg-blue-600 w-full"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </>
    );
}