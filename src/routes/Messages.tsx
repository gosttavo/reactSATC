import { useState } from "react";
import MessageBox from "../components/MessageBox";

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
        <div className="flex flex-col min-h-screen bg-green-600">
          <div className="flex text-white justify-center text-3xl items-center mt-5 mb-6">
            <span className="mr-2">Bem-vindo</span>
            <span className="font-bold">
              {localStorage.getItem("username")}
            </span>
            !
          </div>

          {
            message.map((msg) => (
              <MessageBox
                key={msg.id}
                username={msg.username}
                message={msg.message}
              />
            ))
          }

          <div className="mt-auto p-8 bg-green-900">
            <form 
                method="post" 
                onSubmit={doSendMessage} 
                className="rounded">
              <input
                type="text"
                name="newMsg"
                id="newMsg"
                placeholder="Digite uma mensagem"
                className="mt-2 block rounded p-2 w-full"
              />
            </form>
          </div>
        </div>
      </>
    );
}