import { useState } from "react";
import MessageBox from "../components/MessageBox";
import LogoutButton from "../components/LogoutButton";

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
            const newMessage: message = {
                id: messageText.length + 1,
                message: messageText,
                username: localStorage.getItem('username') as string,
            };
            
            setMessage([...message, newMessage]);
            form.reset();
        } 
    }

    return (
      <>
        <div className="flex flex-col min-h-screen bg-green-600">
          <div className="flex text-white justify-center items-center mt-5 mb-6">
            <span className="mr-2 text-3xl">Bem-vindo</span>
            <span className="font-bold text-3xl">
              {localStorage.getItem("username")}!
            </span>
            <div className="ml-5">
              <LogoutButton />
            </div>
          </div>

          <MessageBox
                key={5}
                username={'Atendente'}
                message={'Teste'}
                fromLoggedUser={false}
          />

          {
            message.map((msg) => (
              <MessageBox
                key={msg.id}
                username={msg.username}
                message={msg.message}
                fromLoggedUser={msg.username === localStorage.getItem('username')}
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