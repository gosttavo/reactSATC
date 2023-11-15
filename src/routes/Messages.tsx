import { useState } from "react";

interface message {
    id: number;
    message: string;
    username: string;
}

export default function Messages() {
    const [message, setMessage] = useState<message[]>([]);

    function doSendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const messageText = formData.get('newMsg') as string;

        if (messageText) {
            console.log('===> doSendMessage - messageText:', messageText)

            const newMessage: message = {
                id: messageText.length + 1,
                message: messageText,
                username: localStorage.getItem('username') as string,
            };

            setMessage([...message, newMessage]);

            console.log('===> doSendMessage - message:', message)

            form.reset();
        } 
    }

    return (
        <>
            <div className="p-6 bg-green-600">
                <div className="flex text-white p-6 justify-center text-3xl">
                    <span className="mr-2">
                        Bem-vindo 
                    </span>
                    <span className="font-bold"> 
                        {localStorage.getItem('username')}
                    </span>!
                </div>

                <form 
                    method="post"
                    onSubmit={doSendMessage}
                    className="mt-6 rounded"
                >
                    <input 
                        type="text" 
                        name="newMsg"
                        id="newMsg"
                        placeholder="Digite uma mensagem"
                        className="mt-2 block rounded p-2 w-full"
                    />
                </form>
            </div>

            <div className="p-6">
                {message.map((msg) => (
                    <div className="mb-2 p-3 rounded bg-green-900 text-white">
                        {msg?.username}: {msg?.message}
                    </div>
                ))} 
            </div>
        </>
    );
}