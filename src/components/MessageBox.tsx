interface messageBoxProps {
    username: string;
    message: string;
    fromLoggedUser?: boolean;
}

export default function MessageBox(props: messageBoxProps) {
    return (
        <>
            <div className={`flex ${props?.fromLoggedUser ? 'justify-end' : 'justify-start'}`}>
                <div
                    className={`w-1/3 mr-5 ml-5 mb-3 p-3 rounded break-words ${props?.fromLoggedUser ? 'bg-green-900 text-white' : 'bg-gray-600 text-white'}`}
                >
                    {props?.username}: {props?.message}
                </div>
            </div>
        </>
    )
}