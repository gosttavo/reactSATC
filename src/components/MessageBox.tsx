interface messageBoxProps {
    username: string;
    message: string;
}

export default function MessageBox(props: messageBoxProps) {
    return (
        <>
            <div className="flex justify-end">
                <div
                    className="w-1/3 mr-5 mb-3 p-3 rounded bg-green-900 text-white break-words"
                >
                    {props?.username}: {props?.message}
                </div>
            </div>
        </>
    )
}